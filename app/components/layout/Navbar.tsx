"use client";

import { useState } from "react";
import Link from "next/link";
import { Sun, Menu, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { ModeToggle } from "@/app/components/ui/modeToggle"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [
        { title: 'About', href: '/' },
        { title: 'Project', href: '/' },
        { title: 'Solutions', href: '/' },
        { title: 'Community', href: '/' },
        { title: 'Partners', href: '/' },
        { title: 'Contact', href: '/' }
    ];
    return (
        <>
            <nav className="h-[62px] flex items-center justify-between px-6 md:px-[52px] border-b border-border bg-background sticky top-0 z-[100] transition-colors">

                {/* Logo */}
                <div className="flex items-center gap-[9px] font-brand text-[18px] font-[900] text-text-main tracking-[-0.3px] cursor-pointer group shrink-0">
                    <div className="logo-sun w-[28px] h-[28px] rounded-full bg-amber flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_0_4px_rgba(245,166,35,0.2),0_0_16px_rgba(245,166,35,0.3)]">
                        <Sun size={16} strokeWidth={2.5} fill="currentColor" />
                    </div>
                    <span className="block uppercase"> AMEV </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-[2px]">
                    {menuItems.map((item) => (
                        <Button
                            key={item.title}
                            asChild
                            variant="ghost"
                            className="font-brand text-[12px] font-[500] text-text-sub hover:bg-foreground/10 hover:text-text-main h-auto py-[5px] px-[14px] rounded-[8px]"
                        >
                            <Link href={item.href}>{item.title}</Link>
                        </Button>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-[6px] md:gap-[8px]">
                    <ModeToggle />
                    {/* Login Button */}
                    <Button
                        variant="outline"
                        asChild
                        className="hidden lg:flex font-brand text-[12px] font-[500] text-text-sub border-border/60 hover:text-text-main hover:border-border h-auto py-[5px] px-[14px] rounded-[8px]"
                    >
                        <Link href="/">Login</Link>
                    </Button>

                    {/* Get quote button */}
                    <Button
                        asChild
                        className="font-brand text-[11px] md:text-[12px] font-[700] text-button-primary-text bg-button-primary hover:bg-button-primary-hover hover:shadow-[0_0_0_3px_rgba(245,166,35,0.25),0_4px_20px_rgba(245,166,35,0.3)] hover:-translate-y-[0.5px] active:scale-[0.98] h-auto py-[6px] px-[10px] md:px-[16px] rounded-[8px] transition-all"
                    >
                        <Link href="/">Partner with us</Link>
                    </Button>

                    {/* Hamburger Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-0 h-10 w-10 text-text-main active:scale-90"
                    >
                        {isOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
                    </Button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`
                fixed inset-0 z-[90] bg-background backdrop-blur-xl transition-all duration-300 lg:hidden
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
            `}>
                <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
                    {menuItems.map((item) => (
                        <Button
                            key={item.title}
                            asChild
                            variant="link"
                            onClick={() => setIsOpen(false)}
                            className="font-brand text-xl text-text-main transition-colors tracking-widest h-auto decoration-transparent"
                        >
                            <Link href={item.href}>{item.title}</Link>
                        </Button>
                    ))}
                    <Button
                        asChild
                        variant="outline"
                        className="mt-4 w-full font-brand text-sm font-medium text-text-main border-border py-6 rounded-[8px]"
                    >
                        <Link href="/">Login</Link>
                    </Button>
                </div>
            </div>
        </>
    );
}