import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div
      className="
      rounded-3xl
      border
      h-full
      border-white/10
      bg-slate-900/60
      p-8
      backdrop-blur-xl
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-blue-500/40
      hover:shadow-blue-500/20
      "
    >
      {children}
    </div>
  );
}
