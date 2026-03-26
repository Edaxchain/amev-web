"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Image, FileSearch, ArrowRight } from 'lucide-react';
import { containerVars, itemVars } from "@/app/_lib/animations";

const secondaryResources = [
    {
        title: "Legal Framework",
        desc: "Compliance, Privacy Policy, and Terms of Service for AMEV Ecosystem.",
        icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
        title: "Media Kit",
        desc: "Official brand guidelines, high-res logos, and executive assets.",
        icon: <Image className="w-5 h-5" />,
    },
    {
        title: "Audit Transparency",
        desc: "Public access to our smart contract security and financial audits.",
        icon: <FileSearch className="w-5 h-5" />,
    }
];

export default function SupportSecondary() {
    return (
        <section className="bg-background pb-52 lg:py-20 px-6 lg:px-20 border-t border-border">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVars}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {secondaryResources.map((item, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVars}
                        className="group relative p-8 rounded-3xl bg-bg-alt border border-border hover:bg-foreground/20 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-amber to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        
                        <div className="flex flex-col gap-6">
                            <div className="text-amber-deep group-hover:text-amber transition-colors">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-lg font-brand text-text-main mb-2 font-bold">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-text-sub leading-relaxed italic group-hover:text-text-main transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                            <button className="flex items-center gap-2 text-[10px] font-brand uppercase tracking-widest text-amber-deep group-hover:text-amber transition-all mt-4">
                                Coming Soon <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}