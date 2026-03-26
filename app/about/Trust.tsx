'use client'
import { SunIcon, Leaf, BookCheck, Scale, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Trust () {
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
}