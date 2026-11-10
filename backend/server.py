from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import httpx
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="JPNS Enterprise API")
api_router = APIRouter(prefix="/api")

logger = logging.getLogger(__name__)

EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ["EMERGENT_EMAIL_KEY"]
EMAIL_FROM_NAME = os.environ["EMAIL_FROM_NAME"]
OWNER_EMAIL = os.environ["OWNER_EMAIL"]

GOLD = "#D4AF37"


async def send_email(recipient: str, subject: str, html: str, reply_to: Optional[str] = None):
    payload = {
        "to": [recipient],
        "subject": subject,
        "html": html,
        "from_name": EMAIL_FROM_NAME,
    }
    if reply_to:
        payload["contact_email"] = reply_to
    try:
        async with httpx.AsyncClient(timeout=30) as c:
            resp = await c.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=payload,
            )
        resp.raise_for_status()
        return True
    except Exception as e:
        logger.error(f"Email send error: {e}")
        return False


def wrap_email(title: str, body_rows: str) -> str:
    return f"""
    <div style="background:#0B0B0B;padding:40px 0;font-family:Arial,Helvetica,sans-serif;">
      <table align="center" width="600" cellpadding="0" cellspacing="0" style="background:#160821;border:1px solid rgba(212,175,55,0.25);">
        <tr><td style="padding:32px 40px;border-bottom:1px solid rgba(212,175,55,0.25);">
          <span style="color:{GOLD};letter-spacing:4px;font-size:12px;">JPNS ENTERPRISES LLC</span>
          <h1 style="color:#ffffff;font-size:24px;margin:12px 0 0;">{title}</h1>
        </td></tr>
        <tr><td style="padding:32px 40px;color:#BFBFBF;font-size:15px;line-height:1.7;">
          <table width="100%" cellpadding="0" cellspacing="0">{body_rows}</table>
        </td></tr>
        <tr><td style="padding:20px 40px;border-top:1px solid rgba(212,175,55,0.25);color:#7a6f80;font-size:12px;">
          Strength. Vision. Legacy. &middot; One Enterprise. Unlimited Impact.
        </td></tr>
      </table>
    </div>"""


def row(label: str, value: str) -> str:
    return f"""<tr><td style="padding:8px 0;color:{GOLD};width:130px;vertical-align:top;font-size:13px;letter-spacing:1px;">{label}</td>
    <td style="padding:8px 0;color:#ffffff;">{value or '—'}</td></tr>"""


# ---------- Models ----------
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = ""
    subject: Optional[str] = ""
    message: str


class PartnerCreate(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = ""
    phone: Optional[str] = ""
    interest: Optional[str] = ""
    message: str


class CareerCreate(BaseModel):
    name: str
    email: EmailStr
    role: str
    message: str


class NewsletterCreate(BaseModel):
    email: EmailStr


def base_doc(data: dict, kind: str) -> dict:
    return {
        "id": str(uuid.uuid4()),
        "kind": kind,
        "created_at": datetime.now(timezone.utc).isoformat(),
        **data,
    }


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "JPNS Enterprise API"}


@api_router.post("/contact")
async def contact(payload: ContactCreate):
    doc = base_doc(payload.model_dump(), "contact")
    await db.submissions.insert_one(dict(doc))
    rows = row("Name", payload.name) + row("Email", payload.email) + row("Phone", payload.phone) + row("Subject", payload.subject) + row("Message", payload.message)
    await send_email(OWNER_EMAIL, f"New Contact Inquiry — {payload.name}", wrap_email("New Contact Inquiry", rows), reply_to=payload.email)
    return {"status": "success", "id": doc["id"]}


@api_router.post("/partner")
async def partner(payload: PartnerCreate):
    doc = base_doc(payload.model_dump(), "partner")
    await db.submissions.insert_one(dict(doc))
    rows = row("Name", payload.name) + row("Email", payload.email) + row("Company", payload.company) + row("Phone", payload.phone) + row("Interest", payload.interest) + row("Message", payload.message)
    await send_email(OWNER_EMAIL, f"New Partnership Inquiry — {payload.name}", wrap_email("New Partnership Inquiry", rows), reply_to=payload.email)
    return {"status": "success", "id": doc["id"]}


@api_router.post("/careers")
async def careers(payload: CareerCreate):
    doc = base_doc(payload.model_dump(), "career")
    await db.submissions.insert_one(dict(doc))
    rows = row("Name", payload.name) + row("Email", payload.email) + row("Role", payload.role) + row("Message", payload.message)
    await send_email(OWNER_EMAIL, f"New Career Application — {payload.role}", wrap_email("New Career Application", rows), reply_to=payload.email)
    return {"status": "success", "id": doc["id"]}


@api_router.post("/newsletter")
async def newsletter(payload: NewsletterCreate):
    existing = await db.subscribers.find_one({"email": payload.email})
    if existing:
        return {"status": "success", "message": "Already subscribed"}
    doc = base_doc({"email": payload.email}, "newsletter")
    await db.subscribers.insert_one(dict(doc))
    welcome = wrap_email("Welcome to the JPNS Circle", row("Email", payload.email) + f'<tr><td colspan="2" style="padding:16px 0;color:#ffffff;">Thank you for subscribing. You will now receive exclusive updates across our divisions, events, and impact initiatives.</td></tr>')
    await send_email(payload.email, "Welcome to JPNS Enterprises", welcome)
    return {"status": "success", "id": doc["id"]}


@api_router.get("/impact")
async def impact():
    return {
        "metrics": [
            {"label": "Lives Impacted", "value": 250000, "suffix": "+"},
            {"label": "Donations Raised", "value": 12, "suffix": "M+", "prefix": "$"},
            {"label": "Charity Partners", "value": 48, "suffix": ""},
            {"label": "Orphanages Supported", "value": 16, "suffix": ""},
            {"label": "Countries Reached", "value": 9, "suffix": ""},
        ]
    }


app.include_router(api_router)

# ---------------- Stripe payments (Shop the Tea) ----------------
import stripe

stripe.api_key = os.environ.get("STRIPE_SECRET_KEY") or "sk_test_emergent"
STRIPE_WEBHOOK_SECRET = os.environ.get("STRIPE_WEBHOOK_SECRET", "")
SHIP_COUNTRIES = ["US"]

payments_router = APIRouter(prefix="/api")


class CheckoutRequest(BaseModel):
    lookup_key: str = "herbal_blend_trial"
    quantity: int = Field(1, ge=1, le=50)
    origin_url: str


SIZE_OPTIONS = [
    {"lookup_key": "herbal_blend_trial", "label": "Trial", "size": "1.25 oz", "sub_key": None, "sub_interval": None},
    {"lookup_key": "herbal_blend_weekly", "label": "Weekly Supply", "size": "2.5 oz", "sub_key": "herbal_blend_weekly_sub", "sub_interval": "week"},
    {"lookup_key": "herbal_blend_monthly", "label": "Monthly Supply", "size": "10 oz", "sub_key": "herbal_blend_monthly_sub", "sub_interval": "month"},
]


@payments_router.get("/shop/product")
async def shop_product():
    options = []
    name = "Jewell's Herbal Magic Blend"
    currency = "usd"
    for s in SIZE_OPTIONS:
        prices = stripe.Price.list(lookup_keys=[s["lookup_key"]], active=True, limit=1, expand=["data.product"]).data
        if not prices:
            continue
        price = prices[0]
        name = price.product.name
        currency = price.currency
        opt = {"lookup_key": s["lookup_key"], "label": s["label"], "size": s["size"], "amount": price.unit_amount}
        if s["sub_key"]:
            subs = stripe.Price.list(lookup_keys=[s["sub_key"]], active=True, limit=1).data
            if subs:
                opt["sub"] = {"lookup_key": s["sub_key"], "interval": s["sub_interval"], "amount": subs[0].unit_amount}
        options.append(opt)
    if not options:
        raise HTTPException(404, "Product not found")
    return {"name": name, "currency": currency, "options": options}


@payments_router.post("/payments/checkout")
async def create_checkout(req: CheckoutRequest):
    prices = stripe.Price.list(lookup_keys=[req.lookup_key], active=True, limit=1).data
    if not prices:
        raise HTTPException(500, f"Price not found: {req.lookup_key}")
    price = prices[0]
    mode = "subscription" if price.recurring else "payment"
    kwargs = dict(
        line_items=[{"price": price.id, "quantity": req.quantity}],
        mode=mode,
        success_url=f"{req.origin_url}/payment/success?session_id={{CHECKOUT_SESSION_ID}}",
        cancel_url=f"{req.origin_url}/payment/cancel",
        shipping_address_collection={"allowed_countries": SHIP_COUNTRIES},
        phone_number_collection={"enabled": True},
        metadata={"lookup_key": req.lookup_key},
    )
    try:
        session = stripe.checkout.Session.create(
            **kwargs, automatic_tax={"enabled": True}, billing_address_collection="required",
        )
    except stripe.error.InvalidRequestError:
        session = stripe.checkout.Session.create(**kwargs)
    await db.payment_transactions.insert_one({
        "session_id": session.id, "lookup_key": req.lookup_key, "quantity": req.quantity,
        "amount": (price.unit_amount or 0) * req.quantity, "currency": price.currency,
        "status": "initiated", "payment_status": "pending",
        "created_at": datetime.now(timezone.utc).isoformat(),
        "updated_at": datetime.now(timezone.utc).isoformat(),
    })
    return {"checkout_url": session.url, "session_id": session.id}


@payments_router.get("/payments/status/{session_id}")
async def get_status(session_id: str):
    record = await db.payment_transactions.find_one({"session_id": session_id})
    if not record:
        raise HTTPException(404, "Transaction not found")
    if record.get("payment_status") != "paid":
        try:
            s = stripe.checkout.Session.retrieve(session_id)
            if s.payment_status == "paid" or s.status == "complete":
                await db.payment_transactions.update_one(
                    {"session_id": session_id, "payment_status": {"$ne": "paid"}},
                    {"$set": {"status": "completed", "payment_status": "paid",
                              "stripe_payment_intent_id": s.payment_intent,
                              "updated_at": datetime.now(timezone.utc).isoformat()}},
                )
                record = await db.payment_transactions.find_one({"session_id": session_id})
        except stripe.error.StripeError:
            pass
    return {"session_id": record["session_id"], "status": record["status"],
            "payment_status": record["payment_status"]}


@payments_router.post("/stripe/webhook")
async def stripe_webhook(request: Request):
    payload = await request.body()
    sig = request.headers.get("stripe-signature", "")
    try:
        event = stripe.Webhook.construct_event(payload, sig, STRIPE_WEBHOOK_SECRET)
    except Exception:
        raise HTTPException(400, "Invalid signature")
    obj, t = event["data"]["object"], event["type"]
    now = datetime.now(timezone.utc).isoformat()
    if t == "checkout.session.completed":
        await db.payment_transactions.update_one(
            {"session_id": obj["id"], "payment_status": {"$ne": "paid"}},
            {"$set": {"status": "completed", "payment_status": obj.get("payment_status", "paid"),
                      "stripe_payment_intent_id": obj.get("payment_intent"), "updated_at": now}},
        )
    elif t == "checkout.session.async_payment_succeeded":
        await db.payment_transactions.update_one({"session_id": obj["id"]},
            {"$set": {"payment_status": "paid", "updated_at": now}})
    elif t == "checkout.session.async_payment_failed":
        await db.payment_transactions.update_one({"session_id": obj["id"]},
            {"$set": {"status": "failed", "payment_status": "failed", "updated_at": now}})
    elif t == "checkout.session.expired":
        await db.payment_transactions.update_one({"session_id": obj["id"]},
            {"$set": {"status": "expired", "payment_status": "expired", "updated_at": now}})
    return {"status": "ok"}


app.include_router(payments_router)


app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
