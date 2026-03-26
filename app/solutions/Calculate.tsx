"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { Zap, Info, ArrowUpRight, TrendingUp } from "lucide-react";

const installationTypes = [
    { id: "rooftop", label: "Rooftop", yield: 120, icon: "🏠" },
    { id: "farm", label: "Solar Farm", yield: 155, icon: "🌾" },
    { id: "floating", label: "Floating", yield: 145, icon: "💧" },
];

function AnimatedNumber({ value }: { value: number }) {
    const motionValue = useMotionValue(value);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });

    useEffect(() => {
        motionValue.set(value);
    }, [value, motionValue]);

    const displayValue = useTransform(springValue, (latest) =>
        latest.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }),
    );

    return <motion.span className="text-white">{displayValue}</motion.span>;
}

export default function Calculate() {
    const [type, setType] = useState(installationTypes[0]);
    const [size, setSize] = useState(10);
    const [tokenPrice, setTokenPrice] = useState(0.045);
    const [energyTariff, setEnergyTariff] = useState(0.12);

    const results = useMemo(() => {
        const monthlyGeneration = size * type.yield;
        const rewardEarnings = monthlyGeneration * tokenPrice;
        const energySavings = monthlyGeneration * energyTariff;
        const totalMonthly = rewardEarnings + energySavings;
        const yearly = totalMonthly * 12;

        return {
            monthlyGeneration,
            rewardEarnings,
            energySavings,
            totalMonthly,
            yearly,
        };
    }, [size, type, tokenPrice, energyTariff]);

    return (
        <section id="calculate" className="bg-bg-alt py-10 md:py-12">
            <div className="mx-auto px-6 md:px-[52px]">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-amber" />
                            <span className="font-brand text-[10px] font-bold text-amber-deep uppercase tracking-[0.3em]">
                                Earnings calculator
                            </span>
                        </div>
                        <h2 className="font-brand text-4xl md:text-5xl font-black text-text-main leading-tight">
                            Calculate your <br />
                            <span className="italic font-editorial font-light text-amber-deep">
                                potential income.
                            </span>
                        </h2>
                    </div>
                    <p className="font-brand text-[13px] text-text-sub max-w-[320px] leading-relaxed text-right">
                        Select your installation type and system size to see
                        your estimated token earnings.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Left Column: Inputs */}
                    <div className="bg-background border border-divider p-8 md:p-10 rounded-3xl shadow-2xl shadow-black/5 relative overflow-hidden h-full">
                        <div className="relative z-10 space-y-10">
                            {/* Type Selection */}
                            <div className="space-y-4">
                                <label className="font-brand text-[11px] font-black text-text-sub uppercase tracking-widest flex items-center gap-2">
                                    1. Installation Type{" "}
                                    <Info size={14} className="opacity-40" />
                                </label>
                                <div className="grid grid-cols-3 gap-3">
                                    {installationTypes.map((t) => (
                                        <button
                                            key={t.id}
                                            onClick={() => setType(t)}
                                            className={`
                                                flex flex-col items-center gap-2 py-4 rounded-2xl border transition-all duration-300
                                                ${
                                                    type.id === t.id
                                                        ? "bg-amber-deep/5 border-amber text-amber"
                                                        : "bg-bg-secondary border-divider text-text-sub hover:border-amber/40"
                                                }
                                            `}
                                        >
                                            <span className="text-xl">
                                                {t.icon}
                                            </span>
                                            <span className="font-brand text-[10px] font-bold uppercase">
                                                {t.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* System Size */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <label className="font-brand text-[11px] font-black text-text-sub uppercase tracking-widest">
                                        2. System Size (kWp)
                                    </label>
                                    <span className="font-brand text-2xl font-black text-text-main">
                                        {size} kWp
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="500"
                                    value={size}
                                    onChange={(e) =>
                                        setSize(parseInt(e.target.value))
                                    }
                                    className="w-full h-2 bg-divider rounded-lg appearance-none cursor-pointer accent-amber"
                                />
                                <div className="flex justify-between font-brand text-[10px] text-text-sub/60 font-medium">
                                    <span>Residential (1-10kW)</span>
                                    <span>Industrial (500kW+)</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {/* Token Price */}
                                <div className="space-y-4">
                                    <label className="font-brand text-[11px] font-black text-text-sub uppercase tracking-widest">
                                        3. Token Price
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-sub font-bold">
                                            $
                                        </span>
                                        <input
                                            type="number"
                                            step="0.001"
                                            value={tokenPrice}
                                            onChange={(e) =>
                                                setTokenPrice(
                                                    parseFloat(e.target.value),
                                                )
                                            }
                                            className="w-full bg-bg-secondary border border-divider rounded-2xl py-4 pl-8 pr-4 font-brand text-lg font-bold text-text-main focus:outline-none focus:border-amber transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Energy Tariff */}
                                <div className="space-y-4">
                                    <label className="font-brand text-[11px] font-black text-text-sub uppercase tracking-widest">
                                        4. Energy Tariff
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-sub font-bold">
                                            $
                                        </span>
                                        <input
                                            type="number"
                                            step="0.01"
                                            value={energyTariff}
                                            onChange={(e) =>
                                                setEnergyTariff(
                                                    parseFloat(e.target.value),
                                                )
                                            }
                                            className="w-full bg-bg-secondary border border-divider rounded-2xl py-4 pl-8 pr-4 font-brand text-lg font-bold text-text-main focus:outline-none focus:border-amber transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Output */}
                    <div className="flex flex-col gap-6 h-full">
                        {/* Main Income Card */}
                        <div className="flex-1 bg-panel-dark p-10 rounded-3xl border border-panel-dark-border shadow-2xl relative overflow-hidden group flex flex-col justify-center">
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber/10 blur-[100px] rounded-full group-hover:bg-amber/20 transition-all duration-1000" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 bg-amber/10 border border-amber/20 rounded-full flex items-center justify-center">
                                        <TrendingUp
                                            size={18}
                                            className="text-amber"
                                        />
                                    </div>
                                    <span className="font-brand text-[10px] font-bold text-amber-pale uppercase tracking-[0.2em]">
                                        Estimated Monthly Revenue
                                    </span>
                                </div>

                                <div className="mb-4 flex items-baseline gap-2">
                                    <span className="font-brand text-6xl md:text-7xl font-black tracking-tighter text-white">
                                        $
                                        <AnimatedNumber
                                            value={results.totalMonthly}
                                        />
                                    </span>
                                    <span className="font-brand text-xl text-panel-dark-muted font-light">
                                        / month
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-green-400 font-brand text-sm font-bold mb-10">
                                    <ArrowUpRight size={16} />
                                    <span className="text-white">
                                        Estimated yearly: $ 
                                        {results.yearly.toLocaleString(
                                            undefined,
                                            {
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0,
                                            },
                                        )}
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 border border-white/5 p-6 rounded-3xl">
                                        <div className="font-brand text-[9px] font-black text-panel-dark-muted/60 uppercase tracking-widest mb-2">
                                            SOLR Rewards
                                        </div>
                                        <div className="font-brand text-xl font-bold text-panel-dark-text">
                                            $
                                            {results.rewardEarnings.toLocaleString(
                                                undefined,
                                                {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2,
                                                },
                                            )}
                                        </div>
                                    </div>
                                    <div className="bg-white/5 border border-white/5 p-6 rounded-3xl">
                                        <div className="font-brand text-[9px] font-black text-panel-dark-muted/60 uppercase tracking-widest mb-2">
                                            Bill Savings
                                        </div>
                                        <div className="font-brand text-xl font-bold text-panel-dark-text">
                                            $
                                            {results.energySavings.toLocaleString(
                                                undefined,
                                                {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2,
                                                },
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Power Gen Card */}
                        <div className="bg-amber p-10 rounded-3xl flex items-center justify-between border border-amber-light shadow-xl">
                            <div>
                                <div className="font-brand text-[10px] font-bold text-panel-dark/60 uppercase tracking-widest mb-2">
                                    Monthly Power Output
                                </div>
                                <div className="font-brand text-4xl font-black text-black">
                                    {results.monthlyGeneration.toLocaleString()}
                                    <span className="text-xl ml-1 font-bold text-black">
                                        kWh
                                    </span>
                                </div>
                            </div>
                            <div className="w-16 h-16 bg-panel-dark rounded-2xl flex items-center justify-center -rotate-6">
                                <Zap size={28} className="text-amber" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
