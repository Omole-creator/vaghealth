import Image from "next/image";

export function AvoidThis({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="mx-auto max-w-sm">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, 384px"
          className="scale-125 object-cover blur-2xl saturate-50 brightness-95"
        />
        <div className="absolute inset-0 bg-charcoal/10" />
        <svg
          viewBox="0 0 100 100"
          aria-hidden
          className="absolute inset-0 m-auto h-2/5 w-2/5 drop-shadow-lg"
        >
          <line
            x1="12" y1="12" x2="88" y2="88"
            stroke="white" strokeWidth="16" strokeLinecap="round"
          />
          <line
            x1="88" y1="12" x2="12" y2="88"
            stroke="white" strokeWidth="16" strokeLinecap="round"
          />
          <line
            x1="12" y1="12" x2="88" y2="88"
            stroke="#E87575" strokeWidth="9" strokeLinecap="round"
          />
          <line
            x1="88" y1="12" x2="12" y2="88"
            stroke="#E87575" strokeWidth="9" strokeLinecap="round"
          />
        </svg>
      </div>
      <figcaption className="mt-4 text-center text-sm italic text-charcoal/60">
        {caption}
      </figcaption>
    </figure>
  );
}
