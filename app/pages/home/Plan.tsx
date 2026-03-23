"use client";

import { motion, Variants } from "framer-motion";

const ProgressBar = ({ progress }: { progress: string }) => {
    return (
        <div className="hidden lg:flex w-full h-3 items-center relative mb-8">
            {/* Progress Track */}
            <div className="w-full h-[4px] bg-panel-dark-muted flex justify-start overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: progress }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-foreground rounded-full"
                />
            </div>

            {/* Left Circle (Start) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-foreground rounded-full" />

            {/* Right Circle (End) */}
            <div
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full transition-colors ${
                    progress === "100%"
                        ? "bg-foreground duration-500" // Fades to black as bar arrives
                        : "bg-panel-dark-muted duration-75" // Snaps back to grey quickly when reducing
                }`}
            />
        </div>
    );
};

const Card = ({
    title,
    subtitle,
    description,
    status,
}: {
    title: string;
    subtitle: string;
    description: string;
    status: string;
}) => {
    const isInProgress = status === "In progress";

    return (
        <div
            className={`p-6 rounded-2xl transition-all duration-500 h-full flex flex-col cursor-pointer group-hover:shadow-2xl ${
                isInProgress
                    ? "bg-foreground text-background"
                    : "bg-amber-light text-foreground"
            }`}
        >
            <h3
                className={`text-2xl font-bold ${isInProgress ? "text-amber" : ""}`}
            >
                {title}
            </h3>
            <h3
                className={`text-xl uppercase ${isInProgress ? "text-amber-deep" : ""}`}
            >
                {subtitle}
            </h3>

            <p
                className={`mt-4 flex-1 ${isInProgress ? "text-panel-dark-muted" : "text-text-sub"}`}
            >
                {description}
            </p>

            {/* Status Badge */}
            <div
                className={`p-2 rounded-md mt-4 inline-block self-start ${
                    isInProgress ? "bg-amber text-white" : "bg-amber-deep"
                }`}
            >
                <span className="text-sm font-medium">{status}</span>
            </div>
        </div>
    );
};

const cards = [
    {
        title: "2021",
        subtitle: "phase 1",
        description:
            "Master plan approved. Land acquisition begins in Phichit City. Engineering design complete",
        status: "complete",
    },
    {
        title: "2023",
        subtitle: "Pilot launch",
        description:
            "Phichit pilot installation live. First SOLR tokens minted. Blockchain platform operational.",
        status: "complete",
    },
    {
        title: "2025",
        subtitle: "Expansion",
        description:
            "5-province rollout underway. EV station network begins. Hospital energy supply planning.",
        status: "In progress",
    },
    {
        title: "2027",
        subtitle: "Asean phase",
        description:
            "Regional grid connectivity. Cross-border energy trading enabled. ASEAN hub development.",
        status: "Upcoming",
    },
    {
        title: "2029",
        subtitle: "Full 368 MW",
        description:
            "Complete 368MW capacity. Full hybrid fossil-to-solar transition. Community power plant model replicated nationally.",
        status: "Target",
    },
];

export default function Plan() {
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
            id="plan"
            className="bg-amber py-10 lg:py-20 flex flex-col gap-12 lg:gap-16"
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-[52px] relative z-10">
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
                                Project Timeline
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                            Implementation plan
                            <br />
                            <span className="italic font-editorial font-light">
                                2021-2029
                            </span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl font-brand text-[13px] md:text-right md:pt-12 leading-relaxed text-text-sub mt-6 text-right"
                    >
                        Sustainable urban development in the future under the
                        development framework of the Renewable Energy Power
                        Plant Industry.
                    </motion.p>
                </div>

                <ProgressBar progress="50%" />
                <motion.div
                    className="grid grid-cols-1 px-[10vw] lg:px-0 lg:grid-cols-5 gap-4"
                    variants={containerVars}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={itemVars}
                            whileHover={{ y: -8 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }}
                            className="group flex flex-col h-full"
                        >
                            <Card
                                title={card.title}
                                subtitle={card.subtitle}
                                description={card.description}
                                status={card.status}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
