import Image from "next/image";

export function ScreenshotProof({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="mx-auto flex max-w-xs flex-col items-center">
      <div className="overflow-hidden rounded-[2rem] border-8 border-charcoal/90 shadow-2xl">
        <Image src={src} alt={alt} width={375} height={700} className="w-full" />
      </div>
      <figcaption className="mt-4 text-center text-sm italic text-charcoal/60">
        {caption}
      </figcaption>
    </figure>
  );
}
