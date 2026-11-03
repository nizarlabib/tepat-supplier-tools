import type { ReactNode } from "react";
import { SectionIndex } from "./SectionIndex";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  tone?: "light" | "dark";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  tone = "light",
  className = "",
  titleClassName = "",
}: SectionHeadingProps) {
  const titleColor = tone === "dark" ? "text-white" : "text-graphite";
  const descriptionColor =
    tone === "dark" ? "text-graphite/60" : "text-graphite/60";

  return (
    <div className={className}>
      <SectionIndex index={index} label={eyebrow} tone={tone} />
      <h2
        className={`mt-6 max-w-3xl font-display text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] ${titleColor} ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-xl text-base leading-7 ${descriptionColor}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
