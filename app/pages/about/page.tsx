'use client'
import { useState, useEffect } from 'react';
import { SunIcon, Target, Rocket, Users, ShieldCheck, Leaf, Zap, BookCheck, Scale, Building2, ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';


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
                <h1 className="text-4xl lg:text-5xl font-brand leading-[0.85] tracking-tighter uppercase italic">
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
    { id: "identity", title: "Values & Team", subtitle: "AMEV Core Identity", icon: <Users className="w-5 h-5" /> },
    { id: "trust", title: "Trust & Network", subtitle: "Global Partnerships", icon: <ShieldCheck className="w-5 h-5" /> },
];

const TabsAbout = () => {
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
};

const MissonVision = () => {
    return (
        <section id='mission' className="bg-background text-text-main py-14 lg:py-16 px-6 lg:px-20 border-b border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
                <div className="flex flex-col gap-20 lg:gap-24 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >

                        <div className="flex items-center gap-3">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 32 }}
                                className="h-[1px] bg-amber-deep"
                            />
                            <span className="font-mono text-[12px] tracking-[0.4em] uppercase text-amber-deep font-bold italic">
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
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 32 }}
                                className="h-[1px] bg-amber-deep"
                            />
                            <span className="font-mono text-[12px] tracking-[0.4em] uppercase text-amber-deep font-bold italic">
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
        <section id='journey' className="scroll-mt-40 bg-bg-sub py-12 lg:py-16 px-6 lg:px-20 border-b border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24 items-start">

                <motion.aside
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVars}
                    className="flex flex-col gap-0" >
                    <div className="py-6 flex flex-col gap-1">
                        <div className="flex items-center gap-2 mb-1">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 32 }}
                                className="h-[1px] bg-amber-deep"
                            />
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

const Timeline = () => {
    const timelineData = [
        {
            year: "2018 - 2020",
            status: "Complete",
            title: "Foundation & Vision",
            items: [
                "Concept Generation & Core Team Assemble",
                "Strategic Energy Master Plan & Site Survey",
                "Infrastructure Site Acquisition & Procurement"
            ]
        },
        {
            year: "2021 - 2022",
            status: "Complete",
            title: "Market Entry & Pilot RWA",
            items: [
                "AME Tokenization & DeFi Listing (PancakeSwap)",
                "600kW Solar Rooftop Launch (Vietnam)",
                "REST Lending Platform & CEX Listing (Bankcex/Nexdax)"
            ]
        },
        {
            year: "2023 - 2027",
            status: "Active",
            title: "Ecosystem & Digital Economy",
            items: [
                "Launch EDAX Energy Exchange & Smart POS",
                "Super Dapp Development & Multi-Chain Protocol",
                "Integration of Smart Grid Monitoring Systems"
            ]
        },
        {
            year: "2028 - 2030",
            status: "Future",
            title: "ASEAN Energy Connectivity",
            items: [
                "Build 140MW Solar Power Plant (QDP Stage II)",
                "Full Scale ASEAN Grid Connectivity",
                "Launch Full Operational AI-Smart Contracts"
            ]
        },
    ];

    return (
        <section id='journey' className="scroll-mt-40 bg-panel-dark py-8 lg:py-16 px-6 lg:px-20 overflow-hidden">
            <div className="flex flex-col gap-6 mb-20">
                <div className="flex items-center gap-4">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 32 }}
                        className="h-[1px] bg-amber-deep"
                    />
                    <span className="font-mono text-[12px] tracking-[0.4em] uppercase text-amber-deep font-bold italic">
                        Implementation Plan
                    </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                    <h2 className="text-5xl lg:text-6xl font-brand italic tracking-tighter text-panel-dark-text leading-[0.85]">
                        Project <br /> <span className="text-amber-deep font-editorial normal-case tracking-normal">Timeline.</span>
                    </h2>
                    <p className="text-panel-dark-text/30 font-light text-lg italic leading-tight lg:text-right max-w-sm lg:ml-auto">
                        A phased approach from conceptualization to full ASEAN grid connectivity.
                    </p>
                </div>
            </div>
            <div className="relative mt-6 mb-6">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-zinc-800 hidden lg:block">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "66%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="h-full bg-panel-dark-text shadow-[0_0_15px_var(--panel-dark-text)]"
                    />

                    <div className="w-full h-full grid grid-cols-4 z-20">
                        {timelineData.map((data, idx) => (
                            <div key={idx} className="relative h-full flex justify-center">
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: data.status ? 1.25 : 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + (idx * 0.4), duration: 0.5 }}
                                    className={`absolute -top-2 w-4 h-4 rounded-full border-2 transition-all duration-500 
                                        ${data.status === "Complete"
                                            ? "bg-green-500 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                                            : data.status === "Active"
                                                ? "bg-amber border-amber shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                                                : "bg-zinc-900 border-zinc-700"
                                        }`}
                                />
                            </div>
                        ))}
                    </div>
                </div>



                <motion.div
                    variants={containerVars}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10 pt-16"
                >
                    {timelineData.map((data, index) => (
                        <TimelineCard key={index} {...data} variants={itemVars} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const TimelineCard = ({ year, title, items, status, variants }: any) => (
    <motion.div
        variants={variants}
        className={`p-6 rounded-2xl border transition-all duration-500 group flex flex-col h-full 
            ${status === "Complete"
                ? "border-green-500"
                : status === "Active"
                    ? "border-amber-deep"
                    : "border-zinc-700"
            } 
            `}
    >

        <div className="group flex flex-col gap-1 mb-6">
            <span className={`font-mono text-xl font-bold tracking-tighter text-panel-dark-text lg:text-panel-dark-muted group-hover:text-panel-dark-text transition-colors`}>
                {year}
            </span>
            <h3 className={`text-md font-bold uppercase tracking-tight mb-4 leading-tight text-panel-dark-text lg:text-panel-dark-muted group-hover:text-panel-dark-text transition-colors`}>
                {title}
            </h3>
        </div>
        <ul className="flex flex-col gap-3 flex-grow mb-8">
            {items.map((item: string, idx: number) => (
                <li key={idx} className="flex gap-2 text-[11px] leading-relaxed text-panel-dark-muted group-hover:text-panel-dark-text transition-colors">
                    <span className="text-panel-dark-text lg:text-panel-dark-muted group-hover:text-panel-dark-text transition-colors">•</span>
                    {item}
                </li>
            ))}
        </ul>

        <div className="mt-auto pt-4">
            <span className={`text-[8px] font-mono uppercase tracking-[0.2em] px-2 py-1 rounded border 
            ${status === "Complete" ? "border-green-500/20 text-green-500/80 bg-green-500/5" :
                    status === "Active" ? "border-amber-deep/40 text-amber-deep bg-amber-deep/5" :
                        "border-zinc-800 text-zinc-600"
                }`}>
                {status}
            </span>
        </div>
    </motion.div>
);

const CoreValues = () => {
    const values = [
        {
            id: "01",
            title: "Sustainability First",
            desc: "Every decision is measured against its environmental impact. We build infrastructure that generates clean energy for generations—not just for the next quarter.",
            icon: <Leaf />
        },
        {
            id: "02",
            title: "Radical Transparency",
            desc: "Every kilowatt-hour, every token, and every transaction is recorded on-chain and publicly verifiable. We believe energy markets should be open and auditable.",
            icon: <ShieldCheck />
        },
        {
            id: "03",
            title: "Community Ownership",
            desc: "Energy infrastructure should benefit the communities it serves. Our model puts income directly in the hands of local residents, not intermediaries.",
            icon: <Users />
        },
        {
            id: "04",
            title: "Technology as Enabler",
            desc: "Blockchain and IoT are tools, not goals. We deploy technology precisely where it removes friction, increases trust, and creates real value for physical grids.",
            icon: <Zap />
        }
    ];

    return (
        <section id='identity' className="scroll-mt-40 bg-background py-24 lg:py-16 px-6 lg:px-20">
            <div className="flex flex-col gap-6 mb-16">
                <div className="flex items-center gap-4">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 32 }}
                        className="h-[1px] bg-amber-deep"
                    />
                    <span className="font-mono text-[12px] tracking-[0.4em] uppercase text-amber-deep font-bold italic">
                        Core Values
                    </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                    <h2 className="text-5xl lg:text-6xl font-brand italic tracking-tighter text-text-main leading-none">
                        What we <br /> <span className="text-amber-deep font-serif normal-case tracking-normal text-5xl lg:text-6xl">stand for.</span>
                    </h2>
                    <p className="text-text-sub font-light text-lg max-w-sm lg:ml-auto lg:text-right italic leading-tight">
                        The principles that guide every installation, every token, and every partnership we build.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {values.map((v, idx) => (
                    <motion.div
                        key={v.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative p-8 lg:p-12 rounded-3xl bg-amber-deep/10 border border-amber-border hover:border-amber/70 transition-all duration-500"
                    >
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                <div className="w-12 h-12 rounded-xl bg-amber-tint flex items-center justify-center text-2xl lg:grayscale group-hover:grayscale-0 transition-all">
                                    {v.icon}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-text-main mb-4 tracking-tight">
                                    {v.title}
                                </h3>
                                <p className="text-text-sub text-sm lg:text-base leading-relaxed group-hover:text-text-main transition-colors">
                                    {v.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const Trust = () => {
    const partners = [
        {
            name: "Ample Rich Investors Corp.",
            location: "Thailand • Est. 2019",
            role: "Lead Developer",
            desc: "Lead development company and primary investor behind the ISC Project. Responsible for overall project structure and investment framework.",
            tags: "Project Development • Investment • Regulatory",
            icon: <Building2 />
        },
        {
            name: "BS Industry Service Co., Ltd.",
            location: "Thailand",
            role: "Grid Partner",
            desc: "Engineering and grid connectivity partner. Responsible for power system design, transmission infrastructure, and IoT smart meter integration.",
            tags: "Grid Engineering • IoT Oracle • Smart Meter",
            icon: <Building2 />
        },
        {
            name: "Solana Foundation",
            location: "Blockchain Protocol",
            role: "Integrated",
            desc: "Infrastructure built on the Solana SPL token standard—selected for its speed, low transaction cost, and energy efficiency.",
            tags: "SPL Token • Smart Contracts • On-chain Settlement",
            icon: <Building2 />
        }
    ];

    const certs = [
        { title: "ISO 9001", subtitle: "Quality Management System", icon: <BookCheck /> },
        { title: "IEC 61215", subtitle: "Solar Panel Qualification", icon: <SunIcon /> },
        { title: "REC Certified", subtitle: "Renewable Energy Certificate", icon: <Leaf /> },
        { title: "SEC Compliant", subtitle: "Regulatory Framework", icon: <Scale /> }
    ];

    return (
        <section id="trust" className="scroll-mt-40 bg-bg-sub py-12 lg:py-16 px-6 lg:px-20">
            <div className="flex flex-col gap-6 mb-16">
                <div className="flex items-center gap-4">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 32 }}
                        className="h-[1px] bg-amber-deep"
                    />
                    <span className="font-mono text-[13px] tracking-[0.4em] uppercase text-amber-deep font-bold italic">
                        Partners & Certifications
                    </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                    <h2 className="text-5xl lg:text-6xl font-brand italic tracking-tighter text-text-main leading-none">
                        Built with <br /> <span className="text-amber-deep font-serif normal-case tracking-normal text-5xl lg:text-6xl">trusted leaders.</span>
                    </h2>
                    <p className="text-text-sub font-light text-lg max-w-sm lg:ml-auto lg:text-right italic leading-tight">
                        Developed under Thailand's national renewable energy framework with leading engineering and investment organisations.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {partners.map((p, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`group p-8 rounded-[2rem] border border-amber-border transition-all duration-300 flex flex-col h-full hover:border-amber`}
                    >
                        <div className="flex justify-between items-start mb-10">
                            <div className="w-12 h-12 bg-amber-pale/10 border border-amber-border rounded-xl flex items-center justify-center text-xl group-hover:border-amber">
                                {p.icon}
                            </div>
                            <span className={`text-[11px] font-brand px-3 py-1 rounded-full border border-amber-border group-hover:border-amber`}>
                                {p.role}
                            </span>
                        </div>
                        <div className="flex-grow">
                            <h3 className="lg:text-text-sub text-xl font-bold mb-1 group-hover:text-text-main transition-colors duration-300">{p.name}</h3>
                            <p className="text-text-main lg:text-text-sub text-xs font-brand mb-6 group-hover:text-text-main transition-colors duration-300">{p.location}</p>
                            <p className="text-text-main lg:text-text-sub text-sm leading-relaxed mb-8 group-hover:text-text-main transition-colors duration-300">{p.desc}</p>
                        </div>
                        <p className="text-amber-deep/80 text-[10px] font-mono tracking-tight uppercase pt-6">
                            {p.tags}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {certs.map((c, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-amber-pale/10 border border-amber-border hover:border-amber transition-colors">
                        <div className="text-2xl text-amber">{c.icon}</div>
                        <div>
                            <h4 className="text-text-main text-sm font-bold uppercase tracking-wider">{c.title}</h4>
                            <p className="text-text-sub text-[10px]">{c.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const AboutCTA = () => {
    return (
        <section className="scroll-mt-40 bg-amber/80 pt-10 pb-50 lg:pt-16 lg:pb-24 px-6 lg:px-20">
            <div className="flex flex-col gap-6 mb-6">
                <div className="flex items-center gap-4">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 32 }}
                        className="h-[1px] bg-button-primary-text"
                    />
                    <span className="font-brand text-[13px] tracking-[0.4em] uppercase text-button-primary-text font-bold italic">
                        Partner with us
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-start">
                <div className="lg:col-span-8 flex flex-col justify-start">
                    <h2 className="text-4xl lg:text-5xl font-brand italic tracking-tighter text-button-primary-text leading-[0.8]">
                        Be part of <br />
                        <span className="font-serif normal-case text-button-primary-text tracking-tight opacity-95 block my-4 text-4xl lg:text-5xl">
                            the mission.
                        </span>
                    </h2>

                    <p className="text-button-primary-text text-lg lg:text-xl font-brand leading-tight max-w-lg italic">
                        We are actively seeking government partners, institutional investors, and energy companies to join the ISC Project and help build ASEAN's clean energy future.
                    </p>
                </div>


                <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-start gap-5 lg:mt-2">
                    <Button variant={"default"} className="group bg-button-primary text-button-primary-text w-full lg:w-[320px] py-6 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:bg-button-primary-hover active:scale-95 shadow-2xl shadow-black/20">
                        <Link href="/">Partner With Us </Link>
                        <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>

                    <Button variant={"default"} className="bg-foreground/20 hover:bg-foreground/30 text-button-primary-text w-full lg:w-[320px] py-6 rounded-2xl font-bold transition-all backdrop-blur-md border border-black/5">
                        Download Project Deck
                    </Button>

                    <p className="text-[10px] font-mono text-button-primary-text uppercase tracking-[0.2em] mt-4 font-bold">
                        ISO Certified • Audited • Government Aligned
                    </p>
                </div>
            </div>

        </section>
    );
};


export default function AboutPage() {
    return (
        <main className="bg-background min-h-screen text-text-main">
            <HeaderAbout />
            <TabsAbout />
            <MissonVision />
            <CompanyBackground />
            <Timeline />
            <CoreValues />
            <Trust />
            <AboutCTA />


        </main>
    );
}