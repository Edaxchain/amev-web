"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Building2,
    Landmark,
    Waves,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

const tabs = [
    {
        id: "rooftop",
        label: "Solar Rooftop",
        icon: <Building2 size={20} />,
        title: "Turn your roof into a revenue stream.",
        description:
            "Mounted on commercial and industrial rooftops — factories, warehouses, offices, and shopping complexes. Utilises unused roof space with zero land acquisition cost, making it the fastest path to energy income for existing property owners.",
        benefits: [
            "Zero Land Requirement",
            "Structural Integration",
            "Direct On-site Consumption",
            "Protection Against Roof Heat",
        ],
    },
    {
        id: "farm",
        label: "Solar Farm",
        icon: <Landmark size={20} />,
        title: "Utility-Scale Ground Installations",
        description:
            "Large-scale solar arrays designed for open land. We utilize high-efficiency mounting systems and dual-axis trackers to maximize solar harvest throughout the day.",
        benefits: [
            "Maximum Power Density",
            "Easier Maintenance",
            "Utility-Grid Direct Feed",
            "Scalable to Megawatts",
        ],
    },
    {
        id: "floating",
        label: "Solar Floating",
        icon: <Waves size={20} />,
        title: "Harnessing Unused Water Surfaces",
        description:
            "Innovative floating solar platforms for reservoirs, industrial ponds, and lakes. This solution eliminates land conflicts and reduces water evaporation by up to 70%.",
        benefits: [
            "No Land Conflict",
            "Natural Cooling Effect",
            "Reduces Algae Growth",
            "High Efficiency in Hot Climates",
        ],
    },
];

export default function Tabs() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section className="bg-background py-10 md:py-12 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="mx-auto px-6 md:px-[52px]">
                {/* Header */}
                <div className="max-w-3xl mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-amber" />
                        <span className="font-brand text-[10px] font-bold text-amber-deep uppercase tracking-[0.3em]">
                            Tailored Solutions
                        </span>
                    </div>
                    <h2 className="font-brand text-4xl font-black text-text-main leading-tight mb-4">
                        Choose the installation type <br />
                        <span className="italic font-editorial font-light text-amber-deep">
                            that fits your site perfectly.
                        </span>
                    </h2>
                </div>

                {/* Tabs Navigation */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-12 p-1.5 bg-bg-secondary/50 rounded-2xl border border-divider/50">
                    {tabs.map((tab) => {
                        const isActive = activeTab.id === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab)}
                                className={`
                                    relative flex items-center gap-3 px-6 py-4 rounded-xl font-brand text-sm font-bold transition-all duration-300
                                    ${
                                        isActive
                                            ? "text-panel-dark"
                                            : "text-text-sub hover:text-text-main hover:bg-bg-tertiary/50"
                                    }
                                `}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-amber rounded-xl shadow-lg shadow-amber/20"
                                        transition={{
                                            type: "spring",
                                            bounce: 0.25,
                                            duration: 0.5,
                                        }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    <span
                                        className={
                                            isActive
                                                ? "text-panel-dark"
                                                : "text-amber"
                                        }
                                    >
                                        {tab.icon}
                                    </span>
                                    {tab.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Content Area */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            {/* Left: Main Info */}
                            <div className="flex flex-col justify-center">
                                <h3 className="font-brand text-2xl font-black text-text-main mb-4">
                                    {activeTab.title}
                                </h3>
                                <p className="font-brand text-[15px] text-text-sub leading-relaxed mb-8 max-w-2xl">
                                    {activeTab.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 gap-x-8 mb-10">
                                    {activeTab.benefits.map((benefit) => (
                                        <div
                                            key={benefit}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="bg-amber-pale/50 p-1 rounded-full">
                                                <CheckCircle2
                                                    size={16}
                                                    className="text-amber-deep"
                                                />
                                            </div>
                                            <span className="font-brand text-[14px] font-medium text-text-main/80">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
