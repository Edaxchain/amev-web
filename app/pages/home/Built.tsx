"use client";

import { Building, Settings, Medal, Zap, Link } from "lucide-react";
import { motion, Variants } from "framer-motion";

const Card = ({
    title,
    subtitle,
    icon: Icon,
}: {
    title: string;
    subtitle: string;
    icon: React.ElementType;
}) => {
    return (
        <div className="p-10 rounded-2xl transition-all duration-300 border border-amber-deep/60 text-center h-full flex flex-col items-center gap-6 group hover:bg-panel-dark-muted/5 hover:border-amber-deep/30">
            <div className="p-4 bg-panel-dark-muted/10 rounded-full group-hover:bg-amber-deep/10">
                <Icon className="w-10 h-10 text-amber-deep" strokeWidth={1.2} />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold leading-snug">{title}</h3>
                <p className="text-xs uppercase tracking-widest text-text-sub font-medium">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

const cards = [
    {
        title: "Ample Rich Investors Corp.",
        subtitle: "Lead developer · Thailand",
        icon: Building,
    },
    {
        title: "BS Industry Service Co., Ltd.",
        subtitle: "Grid & engineering partner",
        icon: Settings,
    },
    {
        title: "ISO 9001 Certified",
        subtitle: "Quality management system",
        icon: Medal,
    },
    {
        title: "IEC 61215 Compliant",
        subtitle: "International solar standard",
        icon: Zap,
    },
    {
        title: "Solana Blockchain",
        subtitle: "SPL token infrastructure",
        icon: Link,
    },
];

export default function Built() {
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
            id="built"
            className="py-10 lg:py-20 flex flex-col gap-12 lg:gap-16"
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-[52px] relative">
                <div className="flex flex-col lg:flex-row justify-between gap-10-0 mb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <span className="font-brand text-amber-deep tracking-widest text-[10px] uppercase mb-4">
                                Partner & Compliance
                            </span>
                            <h1 className="font-brand text-4xl font-black ">
                                Built with trusted
                            </h1>
                            <p className="font-brand text-amber-deep text-4xl italic">
                                Industry Leaders.
                            </p>
                        </div>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl font-brand text-[13px] md:text-right md:pt-12 leading-relaxed text-text-sub pt-12 text-right"
                    >
                        Developed under Thailand's national renewable energy
                        framework in partnership with leading engineering and
                        investment groups.
                    </motion.p>
                </div>
                <motion.div
                    className="grid grid-cols-1 px-[10vw] lg:px-0 lg:grid-cols-5 gap-4"
                    variants={containerVars}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={itemVars}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }}
                            className="group flex flex-col h-full  p-6 transition-all duration-300"
                        >
                            <Card
                                title={card.title}
                                subtitle={card.subtitle}
                                icon={card.icon}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
