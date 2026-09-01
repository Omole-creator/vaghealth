export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="mx-auto w-full max-w-2xl space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-2xl border border-primary/20 bg-white/60 p-5 open:shadow-md"
        >
          <summary className="cursor-pointer list-none font-heading font-bold text-charcoal marker:content-none">
            <span className="flex items-center justify-between gap-4">
              {item.question}
              <span className="shrink-0 text-xl text-primary transition-transform group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 text-charcoal/80">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
