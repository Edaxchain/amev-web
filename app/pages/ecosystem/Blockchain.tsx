"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Coins, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/app/components/ui/button";

export default function Blockchain() {
    const features = [
        {
            icon: <ShieldCheck className="w-6 h-6 text-amber-deep" />,
            title: "Immutable Ledger",
            desc: "Every watt produced is recorded on-chain, preventing data tampering."
        },
        {
            icon: <Cpu className="w-6 h-6 text-amber-deep" />,
            title: "Smart Settlement",
            desc: "Automated revenue sharing between stakeholders via audited contracts."
        },
        {
            icon: <Coins className="w-6 h-6 text-amber-deep" />,
            title: "Token Minting",
            desc: "Energy-backed token issuance directly linked to real-world production."
        }
    ];

    return (
        <section className="relative py-22 bg-bg-alt overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

                    <div className="lg:col-span-7 order-2 lg:order-1 flex justify-center items-center h-[400px] lg:h-[600px] w-full overflow-hidden">
                        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border border-amber-deep/20 rounded-full border-dashed"
                            />

                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-10 border border-amber-border rounded-full"
                            />
                            <div className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 bg-panel-dark/40 border border-amber-border rounded-full shadow-[0_0_50px_rgba(212,175,55,0.2)] flex flex-col items-center justify-center backdrop-blur-3xl overflow-hidden">
                                <motion.span
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        rotateY: [0, 180, 360]
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="text-4xl lg:text-6xl mb-1 lg:mb-2"
                                >
                                    🪙
                                </motion.span>
                                <span className="font-mono text-[7px] lg:text-[9px] tracking-[0.2em] lg:tracking-[0.4em] text-amber-deep font-black bg-panel-dark/50 px-2 py-1 rounded">
                                    TOKEN MINTING
                                </span>
                                <motion.div
                                    animate={{ x: [-200, 200] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                                />
                            </div>

                            {[0, 120, 240].map((degree, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{ duration: 20 + i, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 pointer-events-none"
                                >
                                    <div
                                        style={{
                                            transform: `rotate(${degree}deg) translate(clamp(120px, 15vw, 180px)) rotate(-${degree}deg)`
                                        }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 lg:w-14 lg:h-14 bg-transparent rounded-2xl flex items-center justify-center text-2xl lg:text-4xl pointer-events-auto"
                                    >
                                        {i === 0 ? "⚡" : i === 1 ? "📊" : "🔐"}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="flex items-center gap-4 mb-8">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 32 }}
                                className="h-[1px] bg-amber-deep"
                            />
                            <span className="font-brand text-xs tracking-[.4em] uppercase text-amber-deep font-bold italic">Blockchain Layer</span>
                        </div>

                    <h2 className="text-4xl lg:text-5xl font-brand italic text-text-main tracking-tighter leading-[1.3] mb-10">
                            Transparency <br />
                            <span className="font-serif normal-case text-amber-deep">by Design.</span>
                        </h2>

                        <p className="text-text-main text-md lg:text-lg italic mb-10 leading-relaxed">
                            Every kilowatt-hour generated by our solar assets is transformed into
                            <strong className="text-text-main"> verifiable digital value</strong>. Through Layer-2 blockchain technology, we ensure that every transaction is fast, secure, and fully audited.
                        </p>

                        <div className="space-y-6 mb-12">
                            {features.map((f, i) => (
                                <div key={i} className="flex gap-4 items-start group">
                                    <div className="mt-1 p-2 bg-amber-dim rounded-lg border border-amber-border group-hover:border-amber transition-colors">
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-text-main font-bold text-sm uppercase tracking-wider mb-1">{f.title}</h4>
                                        <p className="text-text-sub text-sm leading-snug">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild className="group bg-button-primary hover:bg-button-primary-hover text-button-primary-text border border-amber-border px-8 py-6 h-auto rounded-2xl font-bold">
                                <Link href="/technology">
                                    Our Technology
                                    <ArrowUpRight className="ml-2 w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
                                </Link>
                            </Button>
                            <Button asChild className="group bg-button-primary hover:bg-button-primary-hover text-button-primary-text px-8 py-6 h-auto rounded-2xl font-bold">
                                <Link href="/tokenomic">
                                    Tokenomics
                                    <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}