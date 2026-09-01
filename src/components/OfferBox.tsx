import { CTAButton } from "./CTAButton";
import { CHECKOUT_URL } from "@/lib/config";

export type OfferItem = {
  label: string;
  value: string;
};

export function OfferBox({
  heading,
  items,
  totalValue,
  price,
  priceNote,
  ctaLabel,
  id,
}: {
  heading: string;
  items: OfferItem[];
  totalValue: string;
  price: string;
  priceNote: string;
  ctaLabel: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      data-testid="offer-box"
      className="mx-auto w-full max-w-xl rounded-3xl border-2 border-primary bg-white/50 p-6 shadow-xl shadow-primary/10 backdrop-blur-sm sm:p-8"
    >
      <h3 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">
        {heading}
      </h3>

      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex items-start justify-between gap-4 border-b border-primary/15 pb-3 text-charcoal/90"
          >
            <span className="flex items-start gap-2">
              <span className="mt-1 text-primary">&#10003;</span>
              <span>{item.label}</span>
            </span>
            <span className="whitespace-nowrap text-charcoal/50 line-through">
              {item.value}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-charcoal/70">
        Total value: <span className="font-heading font-bold">{totalValue}</span>
      </p>

      <p className="mt-2 font-heading text-4xl font-bold text-accent sm:text-5xl">
        {price}
      </p>
      <p className="mt-1 text-sm text-charcoal/60">{priceNote}</p>

      <CTAButton href={CHECKOUT_URL} className="mt-6 w-full">
        {ctaLabel}
      </CTAButton>
    </div>
  );
}
