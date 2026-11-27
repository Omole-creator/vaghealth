// Every CTAButton reads from this single constant, so the checkout link only ever
// needs to change in one place.
export const CHECKOUT_URL = "https://selar.com/22kmt31ud8";

// Guarantee / refund contact. Local format for display, international for the wa.me link.
export const WHATSAPP_DISPLAY = "0904 874 4395";
export const WHATSAPP_URL = "https://wa.me/2349048744395";

// /car (DUSKWAY visor) orders are saved by Web3Forms (web3forms.com, free plan) and emailed to the
// address the key was made with. The key is meant to be public, so it lives here, not in .env.
export const WEB3FORMS_KEY = "cab4cc6b-0a53-4002-9cf8-5617cdf9945e";

// Order line, only used as the fallback link if a form submission fails.
export const CAR_ORDER_WHATSAPP = "2349048744395";

// The number visitors see on /car (footer: questions, refunds). Orders do NOT go here.
export const CAR_WHATSAPP_DISPLAY = "0905 274 5033";
export const CAR_WHATSAPP_URL = "https://wa.me/2349052745033";
export const CAR_DELIVERY_PROMISE = "within 24 hours";
