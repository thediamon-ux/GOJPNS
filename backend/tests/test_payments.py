"""Backend tests for Shop the Tea / Stripe payments endpoints."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://premium-divisions-1.preview.emergentagent.com").rstrip("/")
FRONTEND_ORIGIN = BASE_URL  # same as origin for tests


@pytest.fixture(scope="module")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


class TestShopProduct:
    def test_get_product(self, api):
        r = api.get(f"{BASE_URL}/api/shop/product", timeout=30)
        assert r.status_code == 200, r.text
        d = r.json()
        assert d["name"] == "Jewells Herbal Magic Blend"
        assert d["amount"] == 2500
        assert d["currency"] == "usd"
        assert d["lookup_key"] == "herbal_blend_tin"


class TestCheckout:
    def test_checkout_qty_1(self, api):
        r = api.post(
            f"{BASE_URL}/api/payments/checkout",
            json={"lookup_key": "herbal_blend_tin", "quantity": 1, "origin_url": FRONTEND_ORIGIN},
            timeout=30,
        )
        assert r.status_code == 200, r.text
        d = r.json()
        assert "checkout.stripe.com" in d["checkout_url"]
        assert d["session_id"].startswith("cs_")
        # verify status endpoint works for fresh session
        s = api.get(f"{BASE_URL}/api/payments/status/{d['session_id']}", timeout=30)
        assert s.status_code == 200, s.text
        sd = s.json()
        assert sd["session_id"] == d["session_id"]
        assert sd["payment_status"] in ("pending", "unpaid", "paid")

    def test_checkout_qty_3_stores_7500(self, api):
        r = api.post(
            f"{BASE_URL}/api/payments/checkout",
            json={"lookup_key": "herbal_blend_tin", "quantity": 3, "origin_url": FRONTEND_ORIGIN},
            timeout=30,
        )
        assert r.status_code == 200, r.text
        d = r.json()
        assert "checkout.stripe.com" in d["checkout_url"]
        assert d["session_id"].startswith("cs_")
        # verify stored amount via direct mongo check through env
        # Fallback: just confirm status works; amount stored verification needs DB access.
        import pymongo
        mc = pymongo.MongoClient(os.environ.get("MONGO_URL", "mongodb://localhost:27017"))
        doc = mc[os.environ.get("DB_NAME", "test_database")].payment_transactions.find_one(
            {"session_id": d["session_id"]}
        )
        assert doc is not None
        assert doc["amount"] == 7500
        assert doc["quantity"] == 3


class TestStatus:
    def test_status_nonexistent_returns_404(self, api):
        r = api.get(f"{BASE_URL}/api/payments/status/cs_test_nonexistent_fakeid_xyz", timeout=30)
        assert r.status_code == 404
