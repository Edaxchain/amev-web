'use client'
import { SunIcon } from "lucide-react";
import { motion } from "framer-motion";

import { containerVars, itemVars } from "@/app/_lib/animations";

export default function HeaderAbout() {
    return (
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
}