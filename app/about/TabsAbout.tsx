'use client'
import { useState, useEffect } from 'react';
import { Target, Rocket, Users, ShieldCheck } from "lucide-react";

export default function TabsAbout() {
    const [activeSection, setActiveSection] = useState("mission");
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };
    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 200) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-10% 0px -80% 0px',
                threshold: 0.1
            }
        );

        tabs.forEach((tab) => {
            const el = document.getElementById(tab.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const activeTab = document.getElementById(`tab-${activeSection}`);

        if (activeTab) {
            requestAnimationFrame(() => {
                activeTab.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            });
        }
    }, [activeSection]);


    const tabs = [
        { id: "mission", title: "Mission & Vision", subtitle: "Future Energy Goals", icon: <Target className="w-5 h-5" /> },
        { id: "journey", title: "Our Journey", subtitle: "Since 2019 Milestones", icon: <Rocket className="w-5 h-5" /> },
        { id: "identity", title: "Values & Team", subtitle: "AMEV Core Identity", icon: <Users className="w-5 h-5" /> },
        { id: "trust", title: "Trust & Network", subtitle: "Global Partnerships", icon: <ShieldCheck className="w-5 h-5" /> },
    ];
    return (
        <nav
            className={`sticky top-[62px] z-40 w-full bg-bg-alt backdrop-blur-lg border-b border-border transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}>
            <div className="relative">
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 lg:hidden" />
                <div className="flex overflow-x-auto no-scrollbar lg:grid lg:grid-cols-4 lg:divide-x divide-border">
                    {tabs.map((tab) => {
                        const isActive = activeSection === tab.id;
                        return (
                            <button
                                key={tab.id}
                                id={`tab-${tab.id}`}
                                onClick={() => scrollToSection(tab.id)}
                                className={`group flex-shrink-0 min-w-[50%] lg:min-w-0 flex flex-col items-center lg:items-start p-6 lg:p-8 transition-all text-center lg:text-left border-r border-border lg:border-r-0 ${isActive ? "bg-amber-deep/[0.04]" : "hover:bg-amber-deep/[0.02]"
                                    }`}
                            >
                                <div className={`flex items-center gap-3 mb-2 transition-colors duration-300 ${isActive ? "text-amber-deep" : "text-text-sub/50 group-hover:text-amber-deep"
                                    }`}>
                                    <div className={`${isActive ? "scale-110" : "scale-100"} transition-transform duration-300`}>
                                        {tab.icon}
                                    </div>
                                    <span className={`text-sm lg:text-base font-brand uppercase italic tracking-tighter transition-colors ${isActive ? "text-amber-deep" : "text-text-main"
                                        }`}>
                                        {tab.title}
                                    </span>
                                </div>

                                <span className={`text-[10px] lg:text-[11px] font-mono uppercase tracking-widest transition-colors ${isActive ? "text-text-main opacity-100" : "text-text-sub"
                                    }`}>
                                    {tab.subtitle}
                                </span>

                                <div className={`hidden lg:block mt-4 h-[2px] transition-all duration-300 ${isActive ? "w-full bg-amber-deep" : "w-0 bg-amber-deep group-hover:w-1/2"
                                    }`} />
                            </button>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
