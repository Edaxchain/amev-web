'use client'

import { motion } from 'framer-motion'
import { containerVars, itemVars } from '@/app/_lib/animations';

export default function HeaderSupport() {
    return (
        <motion.section
            id="hero-support"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVars}
            className="relative min-h-[40vh] flex flex-col justify-center bg-bg-sub px-6 lg:px-20 py-12 overflow-hidden border-b border-border"
        >
            <motion.div variants={itemVars} className="flex items-center gap-4 mb-8">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    className="h-[1px] bg-amber-deep"
                />
                <span className="font-brand text-[13px] tracking-[0.4em] uppercase text-amber-deep font-black italic">
                    Global Connectivity
                </span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                <div className="lg:col-span-8">
                    <motion.h1
                        variants={itemVars}
                        className="text-6xl font-brand italic text-text-main leading-[1] tracking-tighter uppercase"
                    >
                        Direct access <br />
                        <span className="font-serif normal-case italic text-amber-deep">To the core.</span>
                    </motion.h1>
                </div>

                <div className="lg:col-span-4 lg:pb-4">
                    <motion.p
                        variants={itemVars}
                        className="text-text-sub text-lg lg:text-xl font-medium leading-tight italic border-l-2 border-amber-deep/30 pl-8"
                    >
                        Connecting institutional partners and global visionaries to the heart of ASEAN's renewable energy infrastructure.
                    </motion.p>
                </div>
            </div>            
        </motion.section> 
    );
}
