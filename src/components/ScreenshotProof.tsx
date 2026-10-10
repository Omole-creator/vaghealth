import Image from "next/image";

export function ScreenshotProof({
  src,
  alt,
  caption,
  className = "mx-auto max-w-xs",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`flex flex-col items-center ${className}`}>
      <div className="overflow-hidden rounded-[2rem] border-8 border-charcoal/90 shadow-2xl">
        <Image
          src={src}
          alt={alt}
          width={375}
          height={700}
          sizes="(max-width: 768px) 82vw, 360px"
          className="w-full"
        />
      </div>
      {caption ? (
        <figcaption className="mt-4 text-center text-sm italic text-charcoal/60">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
