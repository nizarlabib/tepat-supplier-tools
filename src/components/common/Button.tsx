import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "light" | "dark";

interface ButtonProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-blue-accent bg-blue-accent text-white hover:border-industrial-blue hover:bg-industrial-blue",
  outline:
    "border border-graphite/25 bg-transparent text-graphite hover:border-industrial-blue hover:bg-industrial-blue hover:text-white",
  light:
    "border border-white/30 bg-transparent text-white hover:border-white hover:bg-white hover:text-graphite",
  dark: "border border-graphite bg-graphite text-white hover:border-blue-accent hover:bg-blue-accent",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
  ...anchorProps
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 px-6 py-3 text-sm font-semibold leading-none transition-colors duration-200 ${variantClasses[variant]} ${className}`}
      {...anchorProps}
    >
      <span>{children}</span>
      {icon ? (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      ) : null}
    </a>
  );
}
