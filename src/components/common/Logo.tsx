interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
}

export function Logo({ tone = "light", className = "" }: LogoProps) {
  const textColor = tone === "dark" ? "text-white" : "text-graphite";
  const subColor = tone === "dark" ? "text-graphite/50" : "text-graphite/60";
  const borderColor = tone === "dark" ? "border-white/40" : "border-graphite";

  return (
    <a
      href="#home"
      className={`inline-flex shrink-0 items-center gap-3 ${className}`}
      aria-label="Tepat Supplier Tools — kembali ke atas"
    >
      <span
        className={`flex size-9 items-center justify-center border ${borderColor}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="size-5" fill="none">
          <path
            d="M16 3v26M3 16h26"
            stroke="currentColor"
            strokeWidth="1"
            opacity=".45"
          />
          <circle
            cx="16"
            cy="16"
            r="6.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="16" cy="16" r="1.5" fill="#315F85" />
        </svg>
      </span>
      <span className={`flex flex-col ${textColor}`}>
        <span className="font-display text-[15px] font-bold leading-none tracking-[0.24em]">
          TEPAT
        </span>
        <span
          className={`mt-1 whitespace-nowrap text-[8px] font-medium leading-none tracking-[0.28em] ${subColor}`}
        >
          SUPPLIER TOOLS
        </span>
      </span>
    </a>
  );
}
