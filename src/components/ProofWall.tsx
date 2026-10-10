import { ScreenshotProof } from "./ScreenshotProof";

const shots = [
  {
    src: "/images/1224023-cropped.jpg",
    alt: "A WhatsApp message from a customer saying the odour hasn't come back in 7 weeks",
  },
  {
    src: "/images/1159158.jpg",
    alt: "A WhatsApp message from a customer saying she wishes she'd found the guide sooner",
  },
  {
    src: "/images/1224024.jpg",
    alt: "A WhatsApp message from a customer thanking Dr. Omole Kelvin for the guide",
  },
];

// The three real WhatsApp screenshots, grouped and shown large. On phones they sit
// in a swipeable row (internal scroll only, never page-level horizontal overflow).
export function ProofWall() {
  return (
    <div>
      <h2 className="text-center font-heading text-3xl font-bold text-charcoal">
        Real Messages From Women Who Read It
      </h2>
      <p className="mt-2 text-center text-sm text-charcoal/60">
        Unedited WhatsApp messages, shared with their permission.
        <span className="md:hidden"> Swipe to see more &rarr;</span>
      </p>
      <div className="-mx-6 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:mx-auto md:grid md:max-w-5xl md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
        {shots.map((shot) => (
          <ScreenshotProof
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            className="w-[82%] shrink-0 snap-center md:w-auto"
          />
        ))}
      </div>
    </div>
  );
}
