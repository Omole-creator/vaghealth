import Image from "next/image";

const FADE_MASK =
  "radial-gradient(ellipse at center, black 55%, transparent 85%)";

export function SeamlessImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        WebkitMaskImage: FADE_MASK,
        maskImage: FADE_MASK,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        placeholder={priority ? undefined : "empty"}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
