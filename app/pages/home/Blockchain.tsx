"use client";

import { motion } from "framer-motion";
import { Sun, Lock, Globe, Zap, Leaf, ArrowUpRight } from "lucide-react";

const features = [
    {
        title: "Energy Grid Modernisation",
        desc: "Modernising power plants and transmission systems to support renewable energy at scale — aligned with Thailand's Energy Grid Connectivity Development Plan.",
        icon: <Lock className="w-4 h-4 text-gray-500" />
    },
    {
        title: "SOLR Token — 1 kWh = 1 token",
        desc: "Every kilowatt-hour generated automatically mints one SOLR token. Traceable, verifiable, and tradeable on our open blockchain exchange.",
        icon: <Globe className="w-4 h-4 text-blue-500" />
    },
    {
        title: "Instant on-chain settlement",
        desc: "Smart contracts execute energy trades and token transfers in real time. Non-custodial — your wallet, your assets.",
        icon: <Zap className="w-4 h-4 text-yellow-600" />
    },
    {
        title: "Renewable Energy Certificates",
        desc: "Every SOLR token carries an on-chain REC — cryptographic proof of renewable generation for compliance and reporting.",
        icon: <Leaf className="w-4 h-4 text-green-600" />
    }
];

export default function BlockchainSection() {
    return (
        <section className="bg-bg-sub py-10 md:py-12">
            <div className="max-w-[1440px] mx-auto px-6 md:px-[52px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[1px] w-8 bg-amber" />
                            <span className="font-brand text-[10px] font-bold text-amber-deep uppercase tracking-[0.3em]">
                                Fintech & Blockchain
                            </span>
                        </div>
                        <h2 className="font-brand text-4xl font-[900] text-text-main leading-none">
                            The technology<br />
                            <span className="italic font-editorial font-light text-amber-deep">powering the grid.</span>
                        </h2>
                        <p className="text-text-sub text-[13px] leading-relaxed my-4 max-w-xl">
                            Solarc integrates blockchain encryption and smart contract technology into the energy grid —
                            creating a transparent, secure, and automated system for energy distribution and token settlement.
                        </p>

                        <div className="space-y-4">
                            {features.map((f, i) => (
                                <div key={i} className="flex gap-2 group pb-3 border-b border-divider last:border-0">
                                    <div className="w-10 h-10 shrink-0 bg-amber-pale/20 rounded-lg flex items-center justify-center border border-border group-hover:border-amber/50 group-hover:bg-amber/30 transition-colors">
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-text-main font-bold text-[15px] mb-1">{f.title}</h4>
                                        <p className="text-text-sub text-[13px] leading-relaxed">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative bg-panel-dark border border-panel-dark-border rounded-[32px] p-8 shadow-2xl hover:border-amber"
                    >
                        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] pointer-events-none z-0">
                            <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.12)_0%)] blur-[100px]" />
                        </div>

                        <div className="flex justify-between items-start mb-6">
                            <div className="flex gap-4 items-center">
                                <div className="w-12 h-12 bg-amber rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(245,166,35,0.3)] animate-pulse">
                                    <Sun className="text-text-main w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-panel-dark-text font-black text-xl">SOLR Token</h3>
                                    <p className="text-panel-dark-text text-[10px] uppercase font-bold tracking-widest">1 token = 1 kWh generated</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-panel-dark-text text-2xl font-black">$0.0412</div>
                                <div className="text-green-400 text-[10px] font-bold uppercase tracking-tighter">↑ +2.3% today</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-3">
                            {[
                                { label: "Minted Today", val: "8,420", change: "+2.3%" },
                                { label: "24h Change", val: "+2.3%", color: "text-green-400" },
                                { label: "Total Supply", val: "2.4M" },
                                { label: "Active Wallets", val: "18,400" },
                            ].map((s, i) => (
                                <div key={i} className="bg-amber-tint rounded-2xl p-3 border border-amber-border hover:bg-amber/20 transition-all duration-300">
                                    <p className="text-amber text-[9px] font-bold uppercase tracking-widest mb-1">{s.label}</p>
                                    <div className={`text-lg font-black tracking-tight text-panel-dark-text ${s.color || ''}`}>{s.val}</div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
                                    <span className="text-amber text-[12px] font-bold uppercase tracking-widest">Live Markets</span>
                                </div>
                                <button className="text-panel-dark-text text-[12px] font-bold flex items-center gap-1 hover:text-amber transition-colors duration-300">
                                    View all <ArrowUpRight size={12} />
                                </button>
                            </div>
                            <div>
                                {[
                                    { pair: "SOLR / USDC", vol: "84,200 kWh traded today", price: "0.0412", pct: "+2.3%" },
                                    { pair: "WIND / USDC", vol: "61,500 kWh traded today", price: "0.0387", pct: "-0.8%", color: "text-red-400" },
                                    { pair: "GAR / USDC", vol: "14,446 kWh traded today", price: "5.67", pct: "-0.6%", color: "text-red-400" },
                                    { pair: "REC / USDC", vol: "1,240 certificates today", price: "12.40", pct: "+0.8%" },

                                ].map((m, i) => (
                                    <div key={i} className="flex justify-between items-center py-2 px-4 -mc-4 rounded-xl border-b border-divider/10 last:border-0 hover:bg-amber/10 cursor-pointer transition-all duration-300">
                                        <div>
                                            <div className="text-panel-dark-text text-[13px] font-bold">{m.pair}</div>
                                            <div className="text-panel-dark-muted text-[10px]">{m.vol}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-panel-dark-text text-[13px] font-bold">{m.price}</div>
                                            <div className={`${m.color || 'text-green-400'} text-[10px] font-bold`}>{m.pct}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

