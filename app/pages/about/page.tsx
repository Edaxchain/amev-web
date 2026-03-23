'use client'
import { useState, useEffect } from 'react';
import { SunIcon, Target, Rocket, Users, ShieldCheck } from "lucide-react";
import { motion, Variants } from "framer-motion";


const containerVars = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const itemVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const HeaderAbout = () => (
    <motion.section
        id="header-about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVars}
        className="relative min-h-auto bg-background text-text-main flex flex-col px-6 lg:px-20 py-8 border-b border-border"
    >
        <motion.div variants={itemVars} className="text-[10px] lg:text-[11px] uppercase tracking-[0.3em] text-amber-deep mb-6 lg:mb-8 font-mono font-bold">
            REGIONAL-COMMUNITY <span className="mx-1 opacity-50">•</span> ASIA MARKET TRADE <span className="mx-1 opacity-50">•</span> ECOSYSTEM INTERCONNECTION
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] lg:gap-x-12 items-start">
            <motion.div variants={itemVars} className="lg:col-start-1">
                <h1 className="text-4xl lg:text-5xl font-black leading-[0.85] tracking-tighter uppercase italic">
                    About
                    <span className="block text-4xl lg:text-5xl font-editorial text-amber-deep normal-case mt-2">AMEV</span>
                </h1>
            </motion.div>
            <div className="block">
                <motion.div variants={itemVars} className="max-w-3-full lg:max-w-[600px]">
                    <p className="text-lg lg:text-xl text-text-sub leading-tight max-w-3xl font-light tracking-tight lg:mt-8 mt-8 mb-8">
                        A unified blockchain ecosystem designed to integrate companies,
                        employees, and business assets. We are powering the new equity
                        blockchain to make business truly efficient, transparent, and reliable
                        through private blockchain technology.
                    </p>
                </motion.div>

                <motion.div variants={itemVars} className="flex lg:absolute top-26 right-12 flex-col items-center lg:items-end text-center lg:text-right">
                    <div className="w-24 h-24 rounded-full bg-amber flex items-center justify-center mb-4 shadow-[0_0_50px_rgba(245,166,35,0.4)]">
                        <SunIcon className="w-12 h-12 text-panel-dark" />
                    </div>

                    <div className="text-sm tracking-tight leading-relaxed text-text-sub">
                        <span className="font-extrabold uppercase text-xs tracking-widest block mb-1">Invest Smart Community</span>
                        AMEV <br />
                        Decentralized Equity & Energy <br />
                        Thailand &ndash; Est. 2019
                    </div>
                </motion.div>
            </div>


        </div>

    </motion.section>
);

const tabs = [
    { id: "mission", title: "Mission & Vision", subtitle: "Future Energy Goals", icon: <Target className="w-5 h-5" /> },
    { id: "journey", title: "Our Journey", subtitle: "Since 2019 Milestones", icon: <Rocket className="w-5 h-5" /> },
    { id: "team", title: "Values & Team", subtitle: "AMEV Core Identity", icon: <Users className="w-5 h-5" /> },
    { id: "network", title: "Trust & Network", subtitle: "Global Partnerships", icon: <ShieldCheck className="w-5 h-5" /> },
];

const TabsAbout = () => {
    const [activeSection, setActiveSection] = useState("mission");
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const scrollToSection = (id: string) => {
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
                    if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-150px 0px -50% 0px',
                threshold: [0.2, 0.5]
            }
        );

        tabs.forEach((tab) => {
            const el = document.getElementById(tab.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);
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
};

const MissonVision = () => {
    return (
        <section id="mission" className="bg-background text-text-main py-14 lg:py-16 px-6 lg:px-20 border-b border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
                <div className="flex flex-col gap-20 lg:gap-24 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-amber-deep font-bold italic">
                                Our Mission
                            </span>
                            <div className="flex-1 h-[1px] bg-divider" />
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-editorial italic leading-[1.3] text-text-main tracking-tight">
                            "To develop <span className="font-editorial italic text-amber-deep">clean energy infrastructure</span> that is owned by communities, verified on-chain, and built to last generations."
                        </h2>

                        <p className="text-lg text-text-sub font-light leading-relaxed max-w-xl">
                            <span className="font-black text-text-main italic mr-2 uppercase">AMEV</span>
                            integrates assets into a transparent protocol via EDAX Smart Chain, ensuring every kilowatt-hour is traceable through Proof of History (PoH).
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-amber-deep font-bold italic">
                                Our Vision
                            </span>
                            <div className="flex-1 h-[1px] bg-divider" />
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-editorial italic leading-[1.3] text-text-main tracking-tight">
                            "To become the <span className="font-editorial italic text-amber-deep">Electricity Distribution Hub of ASEAN</span> by 2029, powered by a modern, decentralized blockchain grid."
                        </h2>

                        <p className="text-lg text-text-sub font-light leading-relaxed max-w-xl">
                            Connecting renewable energy producers and buyers across the region to create a resilient energy network that is transparent, secure, and sustainable.
                        </p>
                    </motion.div>
                </div>

                <div className="w-full flex flex-col">
                    <div className="font-mono text-[12px] tracking-[0.3em] uppercase text-text-sub mb-8 border-b border-border pb-4 font-bold flex justify-between">
                        <span>Key Performance Indicators</span>
                        <span>FY 2024</span>
                    </div>

                    <div className="flex flex-col divide-y divide-divider">
                        <DataRow label="Total Capacity" sub="ISC Project Target" value="368" unit="MW" color="text-amber-deep" />
                        <DataRow label="Block Time" sub="EDAX Smart Chain Speed" value="5" unit="Sec" />
                        <DataRow label="Land Area" sub="Phichit Pilot Project" value="1,557" unit="Acres" />
                        <DataRow label="AMEV Tokens" sub="On-chain Verified Assets" value="2.4M" unit="AMEV" />
                        <DataRow label="Provincial Coverage" sub="Expansion across Thailand" value="5" unit="Prov" color="text-amber-deep" />
                        <DataRow label="Active Users" sub="Ecosystem Participants" value="18K" unit="Wallets" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const DataRow = ({ label, sub, value, unit, color = "text-text-main" }: any) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="py-7 flex justify-between items-end group hover:bg-amber/[0.02] transition-all px-2 -mx-2 rounded-lg"
    >
        <div className="flex flex-col">
            <span className="text-xs lg:text-sm font-black uppercase tracking-tight text-text-sub group-hover:text-text-main transition-colors italic">{label}</span>
            <span className="text-[10px] font-mono text-text-sub/30 group-hover:text-text-sub/60 transition-colors italic">{sub}</span>
        </div>
        <div className="text-right">
            <span className={`text-4xl lg:text-5xl font-black italic tracking-tighter ${color}`}>
                {value}
            </span>
            <span className="text-[9px] font-mono text-text-sub/50 uppercase ml-2 font-bold">{unit}</span>
        </div>
    </motion.div>
);

const CompanyBackground = () => {
    return (
        <section id="journey" className="scroll-mt-40 bg-bg-sub py-10 lg:py-12 px-6 lg:px-20 border-b border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24 items-start">

                <motion.aside
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVars}
                    className="flex flex-col gap-0" >
                    <div className="py-6 flex flex-col gap-1">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-4 h-[1px] bg-amber-deep" />
                            <span className="font-mono text-[12px] tracking-[0.3em] uppercase text-amber-deep font-bold italic">
                                Background
                            </span>
                        </div>
                        <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-text-sub italic">
                            Company Facts
                        </span>
                    </div>
                    <FactItem variants={itemVars} label="Founded" value="2019" />
                    <FactItem variants={itemVars} label="Headquarters" value="Thailand" />
                    <FactItem variants={itemVars} label="Lead Developer" value="Ample Rich Investors Corp." />
                    <FactItem variants={itemVars} label="Grid Partner" value="BS Industry Service Co., Ltd." />
                    <FactItem variants={itemVars} label="Token Network" value="EDAX (Solana SPL)" />
                    <FactItem variants={itemVars} label="Pilot Location" value="Phichit City, Thailand" />
                    <FactItem variants={itemVars} label="Implementation" value="2021 - 2029" />
                    <FactItem variants={itemVars} label="Certification" value="ISO 9001 • IEC 61215" />
                </motion.aside>
                <article className="flex flex-col gap-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-brand tracking-tighter text-text-main leading-tight"
                    >
                        The <span className="text-amber-deep font-editorial italic font-normal tracking-normal mx-1">Invest Smart Community</span> Project.
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-4 text-text-sub font-brand leading-relaxed text-md lg:text-lg max-w-5xl"
                    >
                        <p>
                            The ISC Project is a landmark renewable energy development programme jointly initiated by
                            <strong className="text-text-main font-editorial mx-1 italic">Ample Rich Investors Corp. (Thailand)</strong>
                            and its affiliates in partnership with
                            <strong className="text-text-main font-editorial mx-1 italic">BS Industry Service Co., Ltd.</strong>
                            under Thailand&apos;s Renewable Energy Power Plant Industry Development Master Plan.
                        </p>
                        <p>
                            Smart city development is a framework for improving the quality of life of communities and their surrounding societies through effective resource management, carbon emission reduction, green space planning, and the integration of renewable energy sources such as wind and solar. The ISC Project was designed to serve as a working implementation of this framework at scale.
                        </p>
                        <p>
                            The project introduces <strong className="text-text-main font-editorial mx-1 italic">FinTech blockchain technology</strong>, combining encryption and security in the transmission and distribution of electricity across relevant sectors in accordance with Thailand&apos;s Energy Grid Connectivity Development Plan. This modernisation enables proactive, flexible renewable energy integration at a level previously unavailable in the region.
                        </p>

                        <p>
                            The long-term objective is to position Thailand as the <strong className="text-text-main font-editorial mx-1 italic">electricity centre of ASEAN</strong> — a regional hub capable of distributing renewable energy across Southeast Asia while simultaneously creating a community power plant model that generates measurable income for local residents and the broader underlying economy.
                        </p>
                    </motion.div>
                </article>
            </div>
        </section>
    );
};

const FactItem = ({ label, value, variants }: any) => (
    <motion.div
        variants={variants} className="py-4 border-b border-border flex flex-col gap-1 group">
        <span className="font-mono text-[12px] uppercase tracking-widest text-text-sub italic">
            {label}
        </span>
        <span className="text-sm font-bold text-text-main uppercase tracking-tight group-hover:text-amber-deep transition-colors duration-300">
            {value}
        </span>
    </motion.div>
);

export default function AboutPage() {
    return (
        <main className="bg-background min-h-screen text-text-main">
            <HeaderAbout />
            <TabsAbout />
            <MissonVision />
            <CompanyBackground />

        </main>
    );
}