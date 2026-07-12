"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";

const links = [
    { title: "За мен", href: "#about" },
    { title: "Умения", href: "#skills" },
    { title: "Проект", href: "#projects" },
    { title: "Преподаване", href: "#teaching" },
    { title: "Контакти", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-[9999] w-full px-4"
            style={{ pointerEvents: "auto" }}>
            <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-4 backdrop-blur-2xl">
                <Link
                    href="/"
                    className="text-xl font-black tracking-widest text-white transition-all duration-300 hover:text-blue-400
hover:-translate-y-1"
                >
                    TZ
                </Link>

                <nav className="hidden gap-8 lg:flex">
                    {links.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="text-slate-300 transition hover:text-blue-400 transition-all duration-300 hover:text-blue-400
hover:-translate-y-1"
                        >
                            {link.title}
                        </a>
                    ))}
                </nav>

                <button
                    onClick={() => {
                        setIsOpen(prev => !prev);
                    }}
                    className="text-white lg:hidden"
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
                

            </div>

            {isOpen && (
                <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-slate-900/95 p-6 backdrop-blur-xl lg:hidden">
                    <div className="flex flex-col gap-5">
                        {links.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg text-white"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
