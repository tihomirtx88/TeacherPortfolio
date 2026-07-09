"use client";

import Link from "next/link";
import { Download } from "lucide-react";

const links = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Teaching",
    href: "#teaching",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto mt-6 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">
        <Link href="/" className="text-xl font-bold tracking-wider text-white">
          TZ
        </Link>

        <nav className="hidden gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-sm text-slate-300 transition duration-300 hover:text-blue-400"
            >
              {link.title}
            </a>
          ))}
        </nav>

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500">
          <Download size={18} />
          Изтегли CV
        </button>
      </div>
    </header>
  );
}
