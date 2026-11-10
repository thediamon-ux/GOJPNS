"""Idempotent Stripe catalog setup for Jewell's Herbal Magic Blend tea.
Run: python setup_stripe.py  (safe to run multiple times)
Sizes: 1.25 oz trial ($15), 2.5 oz weekly supply ($30), 10 oz monthly supply ($100) — one-time purchases.
"""
import os
import stripe
from dotenv import load_dotenv
from pathlib import Path

load_dotenv(Path(__file__).parent / ".env")
stripe.api_key = os.environ["STRIPE_SECRET_KEY"]

CATALOG = [
    {
        "emergent_product_id": "herbal_magic_blend",
        "name": "Jewell's Herbal Magic Blend",
        "tax_code": "txcd_99999999",  # physical goods
        "prices": [
            {"lookup_key": "herbal_blend_trial", "amount": 1500, "currency": "usd"},
            {"lookup_key": "herbal_blend_weekly", "amount": 3000, "currency": "usd"},
            {"lookup_key": "herbal_blend_monthly", "amount": 10000, "currency": "usd"},
        ],
    },
]


def get_or_create_product(entry):
    for p in stripe.Product.list(active=True).auto_paging_iter():
        if p.to_dict().get("metadata", {}).get("emergent_product_id") == entry["emergent_product_id"]:
            return p
    return stripe.Product.create(
        name=entry["name"], tax_code=entry.get("tax_code"),
        metadata={"managed_by": "emergent", "emergent_product_id": entry["emergent_product_id"]},
    )


def ensure_price(product, p):
    existing = stripe.Price.list(lookup_keys=[p["lookup_key"]], active=True, limit=1).data
    if existing and (existing[0].unit_amount != p["amount"] or existing[0].currency != p["currency"]):
        stripe.Price.modify(existing[0].id, active=False)
        existing = []
    if not existing:
        stripe.Price.create(
            product=product.id, unit_amount=p["amount"], currency=p["currency"],
            lookup_key=p["lookup_key"], transfer_lookup_key=True,
        )
        print(f"created price {p['lookup_key']} = {p['amount']} {p['currency']}")
    else:
        print(f"price {p['lookup_key']} already up to date")


if __name__ == "__main__":
    acct = stripe.Account.retrieve()
    print("account country:", acct.get("country"))
    for entry in CATALOG:
        product = get_or_create_product(entry)
        print("product:", product.id, product.name)
        for p in entry["prices"]:
            ensure_price(product, p)
    print("done")
