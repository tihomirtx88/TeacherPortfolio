import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative mx-auto max-w-7xl px-6 py-28 lg:px-8 ${className}`}
    >
      {children}
    </section>
  );
}
