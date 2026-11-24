// Every CTAButton reads from this single constant, so the checkout link only ever
// needs to change in one place.
export const CHECKOUT_URL = "https://selar.com/22kmt31ud8";

// Guarantee / refund contact. Local format for display, international for the wa.me link.
export const WHATSAPP_DISPLAY = "0904 874 4395";
export const WHATSAPP_URL = "https://wa.me/2349048744395";

// /car (DUSKWAY visor) orders are sent to this WhatsApp number as a pre-filled message.
// Separate from the ebook refund line above on purpose.
export const CAR_ORDER_WHATSAPP = "2349052745033";
export const CAR_WHATSAPP_DISPLAY = "0905 274 5033";
export const CAR_WHATSAPP_URL = `https://wa.me/${CAR_ORDER_WHATSAPP}`;
export const CAR_DELIVERY_PROMISE = "within 24 hours";
