'use client'
import { motion } from "framer-motion";
import { containerVars, itemVars } from "@/app/_lib/animations";

export default function CompanyBackground() {
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