// A drawn driver's-eye view through the windscreen. It shows the copy's "gap": the
// factory visor sits at the top, the glare source (low sun by day, oncoming full
// headlights by night) sits below it at eye level, and the DUSKWAY lens drops into
// exactly that band. Pure SVG, no images, so it paints instantly on a slow phone.

export type Mode = "day" | "night";

const LENS = { x: 40, y: 44, w: 320, h: 92 };

export function GlareScene({
  id,
  mode,
  lensOn,
  className = "",
}: {
  /** Unique per instance on the page, used to namespace SVG defs. */
  id: string;
  mode: Mode;
  lensOn: boolean;
  className?: string;
}) {
  const day = mode === "day";
  const glareAt = day ? { cx: 252, cy: 108 } : { cx: 178, cy: 126 };
  const ease = "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]";

  return (
    <svg
      viewBox="0 0 400 250"
      className={`block h-full w-full ${className}`}
      role="img"
      aria-label={
        day
          ? lensOn
            ? "Low sun seen through the grey lens. The road ahead is clear."
            : "Low sun shining under the car visor straight into the driver's eyes."
          : lensOn
            ? "Oncoming headlights seen through the amber lens. The glare is softer."
            : "Oncoming full headlights flashing into the driver's eyes at night."
      }
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          {day ? (
            <>
              <stop offset="0" stopColor="#7CC3EC" />
              <stop offset="1" stopColor="#FBE3B5" />
            </>
          ) : (
            <>
              <stop offset="0" stopColor="#04060A" />
              <stop offset="1" stopColor="#141A26" />
            </>
          )}
        </linearGradient>
        <radialGradient id={`${id}-glare`}>
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="0.18" stopColor={day ? "#FFF6DA" : "#E4F1FF"} stopOpacity="0.95" />
          <stop offset="0.5" stopColor={day ? "#FFE7A8" : "#BFDBFF"} stopOpacity="0.45" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <clipPath id={`${id}-lens`}>
          <rect x={LENS.x} y={LENS.y} width={LENS.w} height={LENS.h} rx="12" />
        </clipPath>
        <mask id={`${id}-out`}>
          <rect width="400" height="250" fill="white" />
          <rect x={LENS.x} y={LENS.y} width={LENS.w} height={LENS.h} rx="12" fill="black" />
        </mask>
      </defs>

      {/* World */}
      <rect width="400" height="250" fill={`url(#${id}-sky)`} />
      <g fill={day ? "#8796A8" : "#0B0F16"}>
        <rect x="0" y="70" width="34" height="50" />
        <rect x="38" y="88" width="26" height="32" />
        <rect x="66" y="98" width="40" height="22" />
        <rect x="300" y="92" width="30" height="28" />
        <rect x="334" y="74" width="24" height="46" />
        <rect x="362" y="96" width="38" height="24" />
      </g>
      {!day && (
        <g fill="#F6C66B" opacity="0.55">
          <rect x="8" y="80" width="4" height="4" />
          <rect x="20" y="94" width="4" height="4" />
          <rect x="340" y="84" width="4" height="4" />
          <rect x="346" y="100" width="4" height="4" />
        </g>
      )}
      <rect x="0" y="120" width="400" height="130" fill={day ? "#A7A28F" : "#07090D"} />
      <polygon points="186,120 214,120 400,250 0,250" fill={day ? "#5D6470" : "#151922"} />
      <g fill={day ? "#F3F4F6" : "#3B4251"}>
        <polygon points="199,124 201,124 202,134 198,134" />
        <polygon points="197,144 203,144 205,166 195,166" />
        <polygon points="194,184 206,184 210,220 190,220" />
      </g>
      {/* Car ahead in our lane */}
      <g>
        <rect x="216" y="128" width="30" height="16" rx="3" fill={day ? "#2B2F36" : "#0D1016"} />
        <rect x="218" y="137" width="6" height="3" rx="1" fill="#FF3B3B" opacity={day ? 0.8 : 1} />
        <rect x="238" y="137" width="6" height="3" rx="1" fill="#FF3B3B" opacity={day ? 0.8 : 1} />
      </g>
      {/* Glare source */}
      {day ? (
        <circle cx={glareAt.cx} cy={glareAt.cy} r="11" fill="#FFF8E1" />
      ) : (
        <g>
          <rect x="160" y="121" width="36" height="12" rx="3" fill="#0D1016" />
          <circle cx="167" cy="126" r="4" fill="#FFFFFF" />
          <circle cx="189" cy="126" r="4" fill="#FFFFFF" />
        </g>
      )}

      {/* Glare: full strength outside the lens, cut right down inside it when the lens is down */}
      <g mask={`url(#${id}-out)`}>
        <circle cx={glareAt.cx} cy={glareAt.cy} r={day ? 190 : 170} fill={`url(#${id}-glare)`} />
      </g>
      <g clipPath={`url(#${id}-lens)`}>
        <circle
          cx={glareAt.cx}
          cy={glareAt.cy}
          r={day ? 190 : 170}
          fill={`url(#${id}-glare)`}
          className={ease}
          style={{ opacity: lensOn ? 0.16 : 1 }}
        />
      </g>
      {/* The "blinded" wash over everything */}
      <rect
        width="400"
        height="250"
        fill="#FFFFFF"
        className={ease}
        style={{ opacity: lensOn ? 0 : day ? 0.3 : 0.16 }}
      />

      {/* The lens dropping down from the visor */}
      <g
        className={ease}
        style={{
          transform: lensOn ? "translateY(0px)" : "translateY(-96px)",
          opacity: lensOn ? 1 : 0,
        }}
      >
        <rect
          x={LENS.x}
          y={LENS.y}
          width={LENS.w}
          height={LENS.h}
          rx="12"
          fill={day ? "rgba(28,34,42,0.5)" : "rgba(255,166,0,0.34)"}
          stroke={day ? "rgba(10,12,16,0.8)" : "rgba(255,140,0,0.95)"}
          strokeWidth="2"
        />
        <rect x="182" y="36" width="36" height="12" rx="2" fill="#E5E7EB" />
      </g>

      {/* Factory visor + headlining, and the dashboard at the bottom */}
      <path d="M0 0 H400 V30 Q200 46 0 30 Z" fill={day ? "#3A3F47" : "#101318"} />
      <rect x="150" y="18" width="100" height="22" rx="6" fill={day ? "#4B515B" : "#1A1E25"} />
      <path d="M0 250 V232 Q200 214 400 232 V250 Z" fill={day ? "#1F2328" : "#050608"} />
      <path
        d="M120 250 Q200 196 280 250"
        fill="none"
        stroke={day ? "#2E333A" : "#0C0E12"}
        strokeWidth="12"
      />
    </svg>
  );
}
