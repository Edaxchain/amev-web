'use client'

import { motion } from "framer-motion";

export default function MissonVision() {
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