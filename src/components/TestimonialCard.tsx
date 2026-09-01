export function TestimonialCard({
  quote,
  name,
  location,
  className = "",
}: {
  quote: string;
  name: string;
  location: string;
  className?: string;
}) {
  return (
    <figure
      className={`mx-auto max-w-lg rounded-2xl border border-primary/20 bg-white/60 p-6 shadow-sm ${className}`}
    >
      <blockquote className="text-charcoal/90">
        <span className="mr-1 font-heading text-2xl text-primary">&ldquo;</span>
        {quote}
        <span className="ml-1 font-heading text-2xl text-primary">&rdquo;</span>
      </blockquote>
      <figcaption className="mt-4 font-heading text-sm font-bold text-charcoal">
        {name}
        <span className="block font-body text-xs font-normal text-charcoal/50">
          {location}
        </span>
      </figcaption>
    </figure>
  );
}
