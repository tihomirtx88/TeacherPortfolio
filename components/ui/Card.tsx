import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div
      className="
  `    group
      h-full
      rounded-3xl
      border
      border-white/10
      bg-slate-900/60
      p-8
      backdrop-blur-xl

      transition-all
      duration-500

      hover:-translate-y-3
      hover:border-blue-500/40
      hover:shadow-[0_0_40px_rgba(59,130,246,.25)]-blue-500/20`
      "
    >
      {children}
    </div>
  );
}
