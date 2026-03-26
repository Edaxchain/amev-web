'use client'
import { Users, ShieldCheck, Leaf, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function CoreValues() {
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
}