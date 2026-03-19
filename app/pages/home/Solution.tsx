"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Leaf, Droplets } from "lucide-react";

const solutions = [
    {
        title: "Solar Rooftop",
        icon: <Building2 className="w-4 h-4 text-blue-400" />,
        range: "50–500 kW",
        desc: "Commercial and industrial rooftops. Factories, warehouses, offices. Zero land cost.",
        stats: "100 kW · ~120,000 kWh/yr",
        yield: "120,000 SOLR/yr",
        monthly: "~$1,880 / mo",
        tags: ["25-yr warranty", "IoT meter"],
        color: "from-amber/40 to-transparent",
    },
    {
        title: "Solar Farm",
        icon: <Leaf className="w-4 h-4 text-green-400" />,
        range: "1–50 MW",
        desc: "Utility-scale ground-mounted on open land. Maximum output for national grid contribution.",
        stats: "1 MW · ~1,200,000 kWh/yr",
        yield: "1.2M SOLR/yr",
        monthly: "~$18,800 / mo",
        tags: ["30-yr warranty", "IoT meter"],
        color: "from-green-600/40 to-transparent",
    },
    {
        title: "Solar Floating",
        icon: <Droplets className="w-4 h-4 text-cyan-400" />,
        range: "100 kW–10 MW",
        desc: "Panels over reservoirs. Cooler environment boosts efficiency. +15% yield vs ground-mount.",
        stats: "500 kW · ~690,000 kWh/yr",
        yield: "690,000 SOLR/yr",
        monthly: "~$10,580 / mo",
        tags: ["25-yr warranty", "IoT meter"],
        color: "from-blue-600/40 to-transparent",
    }
];

export default function Solution() {
    return (
        <section id="solution" className="bg-bg-alt py-10 md:py-12">
            <div className="max-w-[1440px] mx-auto px-6 md:px-[52px]">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-8">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[1px] w-8 bg-amber-deep" />
                            <span className="font-brand text-[10px] font-bold text-amber-deep uppercase tracking-[0.3em]">
                                Installation Solutions
                            </span>
                        </div>
                        <h2 className="font-brand text-4xl md:text-5xl font-[900] text-text-main leading-none mb-4">
                            Three ways to harvest.<br />
                            <span className="italic font-serif font-light text-amber-deep">One token for all.</span>
                        </h2>
                    </div>
                    <p className="font-brand text-[13px] text-text-main/50 max-w-[280px] text-left md:text-right leading-relaxed">
                        Every installation type generates SOLR tokens automatically. Same token, same exchange, any site.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-[24px] overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col"
                        >
                            <div className={`h-48 relative overflow-hidden bg-panel-dark`}>
                                <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-60`} />
                                <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-30 group-hover:opacity-50 transition-opacity">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="w-12 h-8 border border-amber/30 rounded-sm bg-amber/10 transform -skew-x-12" />
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <h3 className="font-brand text-lg font-[900] text-text-main">{item.title}</h3>
                                    </div>
                                    <span className="bg-amber-pale text-amber-deep text-[10px] font-bold px-3 py-1 rounded-full border border-amber/10">
                                        {item.range}
                                    </span>
                                </div>

                                <p className="font-brand text-[13px] text-text-main/60 leading-relaxed mb-8 h-12">
                                    {item.desc}
                                </p>

                                <div className="bg-amber-dim rounded-2xl p-6 mb-2">
                                    <div className="flex justify-between items-center mb-4 border-b border-divider pb-2">
                                        <span className="text-[12px] text-text-main/40 uppercase tracking-wider">{item.stats}</span>
                                        <span className="text-text-main text-[12px] font-bold">↗ {item.yield}</span>
                                    </div>
                                    <p className="text-text-main/30 text-[10px] font-bold uppercase tracking-widest mb-1">Est. Monthly Value</p>
                                    <h4 className="text-text-main text-xl font-black tracking-tight">{item.monthly}</h4>
                                    <p className="text-text-main/30 text-[10px] mt-1">tokens + energy savings est.</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="text-[11px] font-bold text-text-main bg-amber-pale px-3 py-1 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>


                                <div className="mt-auto pt-4 border-t border-border flex justify-between items-center group/btn cursor-pointer">
                                    <span className="font-brand text-xs font-bold text-amber-deep transition-colors group-hover/btn:text-amber">
                                        Learn more
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-amber-deep transform transition-all group-hover/btn:translate-x-1 group-hover/btn:text-amber" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center mt-6 text-[12px] text-text-sub italic">
                    * Earnings estimates based on current token price. Actual value depends on market conditions at time of trading.
                </p>
            </div>
        </section>
    );
}