interface SectionIndexProps {
  index: string;
  label: string;
  tone?: "light" | "dark";
  className?: string;
}

export function SectionIndex({
  index,
  label,
  tone = "light",
  className = "",
}: SectionIndexProps) {
  const mutedClass = tone === "dark" ? "text-graphite/50" : "text-graphite/60";
  const lineClass = tone === "dark" ? "bg-industrial-blue/70" : "bg-industrial-blue";
  const indexClass = tone === "dark" ? "text-blue-accent" : "text-industrial-blue";

  return (
    <div
      className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] ${mutedClass} ${className}`}
    >
      <span className={indexClass}>{index}</span>
      <span className={`h-px w-8 ${lineClass}`} />
      <span>{label}</span>
    </div>
  );
}
