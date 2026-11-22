// Structured data for /car. Wording mirrors CAR-SALES-COPY.md, which is the source
// of truth: change copy there first, then here.

export type PackageId = "1" | "2" | "3";

export type Package = {
  id: PackageId;
  title: string;
  visors: number;
  price: number;
  /** Shown struck through: what the same number of visors costs at the single price. */
  was?: number;
  tag?: string;
};

export const SINGLE_PRICE = 15_000;

export const packages: Package[] = [
  { id: "1", title: "1 Visor", visors: 1, price: 15_000 },
  { id: "2", title: "2 Visors", visors: 2, price: 25_000, was: 30_000, tag: "Most popular" },
  { id: "3", title: "3 Visors + 1 FREE", visors: 4, price: 35_000, was: 60_000, tag: "Best value" },
];

export const naira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export const installSteps = [
  "Press the button and pull the clip open.",
  "Slide it over your car's visor.",
  "Push the clip back until it holds tight.",
];

// PLACEHOLDER testimonials. The owner is replacing these with real customer messages.
// Keep the casual, light-pidgin voice; don't polish them or add new invented ones.
export const testimonials = [
  {
    quote:
      "I drive Lekki to Ikeja every day and that evening sun for Third Mainland used to finish me. Now I just flip the grey one down. Small thing but e don help me well well.",
    name: "Tunde A.",
    city: "Lagos",
  },
  {
    quote: "Bought 2, one for me and one for my wife's car. Fixing it no reach one minute.",
    name: "Emeka O.",
    city: "Enugu",
  },
  {
    quote:
      "Na the night side I buy am for. Those trailers with full light for Lagos-Ibadan expressway, at least now e no dey blind me like before.",
    name: "Ibrahim S.",
    city: "Ibadan",
  },
  {
    quote: "I was scared it won't fit my Highlander but it fit well. Delivery was fast and I paid when it came.",
    name: "Funmi B.",
    city: "Abuja",
  },
  {
    quote: "My dad drives at night a lot so I got him one. He said he should have had it long ago.",
    name: "Ada N.",
    city: "Port Harcourt",
  },
];

export const faqs = [
  {
    q: "Will it fit my car?",
    a: "It fits most cars, SUVs, buses and pickups with a normal visor. When we call to confirm your order, tell us your car and we'll check. If it still doesn't fit, you get your money back.",
  },
  { q: "Does it replace my car's visor?", a: "No. It clips onto the visor you already have." },
  { q: "How do I pay?", a: "You pay the dispatch rider when the visor gets to you. Nothing upfront." },
  { q: "How long does delivery take?", a: "We deliver within 24 hours, and delivery is free." },
  {
    q: "Can I keep the amber lens down all night?",
    a: "Flip it down when full light is coming at you, and up on a dark, empty road. Like any tint, it lets in a little less light.",
  },
  {
    q: "Is it the same as wearing sunglasses at night?",
    a: "No. Never wear dark glasses at night. This sits on the car, you only flip it down for the few seconds you need it, and it works with your prescription glasses on.",
  },
  { q: "What if I don't like it?", a: "Message us on WhatsApp and you get your money back." },
  { q: "How do I clean it?", a: "Wipe it gently with a soft cloth. Don't use rough sponges or harsh chemicals." },
];

export const nigerianStates = [
  "Abia", "Abuja (FCT)", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo",
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa",
  "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe",
  "Zamfara",
];

export const deliveryTimes = ["Any time", "Morning (9am to 12pm)", "Afternoon (12pm to 4pm)", "Evening (4pm to 7pm)"];
