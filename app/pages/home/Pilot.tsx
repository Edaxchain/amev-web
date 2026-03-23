"use client";

import { motion, Variants } from "framer-motion";

export default function Pilot() {
    const containerVars = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVars: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
    };
    return (
        <section
            id="pilot"
            className="bg-panel-dark py-10 md:py-12 flex flex-col gap-12 lg:gap-16"
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-[52px] relative w-full">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-amber-deep" />
                            <span className="font-brand text-[10px] font-bold text-amber-deep uppercase tracking-[0.3em]">
                                Pilot Project
                            </span>
                        </div>
                        <h2 className="font-black font-brand text-4xl text-white ">
                            Phichit City
                            <br />
                            <span className="italic font-editorial font-light text-amber">
                                Where it all began.
                            </span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl font-brand text-[13px] md:text-right md:pt-12 leading-relaxed text-panel-dark-muted text-right"
                    >
                        Developed under Thailand&apos;s national renewable
                        energy framework in partnership with leading engineering
                        and investment groups.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
