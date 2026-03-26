"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { Zap, Info, ArrowUpRight, TrendingUp } from "lucide-react";
import { Building2, Landmark, Waves } from "lucide-react";

const installationTypes = [
    {
        id: "rooftop",
        label: "Rooftop",
        yield: 120,
        icon: <Building2 size={24} />,
    },
    {
        id: "farm",
        label: "Solar Farm",
        yield: 155,
        icon: <Landmark size={24} />,
    },
    {
        id: "floating",
        label: "Floating",
        yield: 145,
        icon: <Waves size={24} />,
    },
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
        <section
            id="calculate"
            className="bg-bg-alt py-16 md:py-24 border-y border-divider"
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-[52px]">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-amber" />
                            <span className="font-brand text-[10px] font-bold text-amber-deep uppercase tracking-[0.3em]">
                                Return on investment
                            </span>
                        </div>
                        <h2 className="font-brand text-4xl md:text-6xl font-black text-text-main leading-[0.9] tracking-tighter">
                            Calculate your <br />
                            <span className="italic font-editorial font-light text-amber-deep">
                                potential income.
                            </span>
                        </h2>
                    </div>
                    <p className="font-brand text-sm text-text-sub max-w-[320px] leading-relaxed md:text-right">
                        Adjust the parameters below to estimate your monthly
                        generation and token rewards across different system
                        scales.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Column: Inputs (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-bg-raised border border-divider p-8 md:p-10 rounded-[2.5rem] shadow-sm relative overflow-hidden">
                            <div className="relative z-10 space-y-12">
                                {/* Type Selection */}
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <label className="font-brand text-[11px] font-black text-text-sub uppercase tracking-widest flex items-center gap-2">
                                            01. Installation Type
                                            <Info
                                                size={14}
                                                className="opacity-40"
                                            />
                                        </label>
                                        <span className="font-brand text-[11px] font-bold text-amber-deep px-3 py-1 bg-amber/10 rounded-full border border-amber/20">
                                            {type.yield} kWh / kWp
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        {installationTypes.map((t) => (
                                            <button
                                                key={t.id}
                                                onClick={() => setType(t)}
                                                className={`
                                                    flex flex-col items-center gap-3 py-6 rounded-2xl border transition-all duration-300
                                                    ${
                                                        type.id === t.id
                                                            ? "bg-amber text-text-main-inverted border-amber shadow-lg shadow-amber/20 scale-[1.02]"
                                                            : "bg-background border-divider text-text-sub hover:border-amber/40"
                                                    }
                                                `}
                                            >
                                                <span className="text-2xl">
                                                    {t.icon}
                                                </span>
                                                <span className="font-brand text-[10px] font-black uppercase tracking-tighter">
                                                    {t.label}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* System Size */}
                                <div className="space-y-6">
                                    <div className="flex justify-between items-end">
                                        <label className="font-brand text-[11px] font-black text-text-sub uppercase tracking-widest">
                                            02. System Size (kWp)
                                        </label>
                                        <div className="flex items-baseline gap-1">
                                            <span className="font-brand text-4xl font-black text-text-main">
                                                {size}
                                            </span>
                                            <span className="font-brand text-sm font-bold text-text-sub uppercase">
                                                kWp
                                            </span>
                                        </div>
                                    </div>
                                    <div className="relative pt-4">
                                        <input
                                            type="range"
                                            min="1"
                                            max="500"
                                            value={size}
                                            onChange={(e) =>
                                                setSize(
                                                    parseInt(e.target.value),
                                                )
                                            }
                                            className="w-full h-1.5 bg-divider rounded-lg appearance-none cursor-pointer accent-amber"
                                        />
                                        <div className="flex justify-between font-brand text-[10px] text-text-sub/50 font-bold mt-4 uppercase tracking-widest">
                                            <span>Residential (10kW)</span>
                                            <span>Commercial (100kW)</span>
                                            <span>Industrial (500kW)</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Advanced Settings */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-divider">
                                    {/* Token Price */}
                                    <div className="space-y-4">
                                        <label className="font-brand text-[11px] font-black text-text-sub uppercase tracking-widest">
                                            03. SOLR Market Price
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-sub font-black">
                                                $
                                            </span>
                                            <input
                                                type="number"
                                                step="0.001"
                                                value={tokenPrice}
                                                onChange={(e) =>
                                                    setTokenPrice(
                                                        parseFloat(
                                                            e.target.value,
                                                        ),
                                                    )
                                                }
                                                className="w-full bg-background border border-divider rounded-2xl py-4 pl-8 pr-4 font-brand text-xl font-black text-text-main focus:outline-none focus:border-amber transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Energy Tariff */}
                                    <div className="space-y-4">
                                        <label className="font-brand text-[11px] font-black text-text-sub uppercase tracking-widest">
                                            04. Energy Tariff (Savings)
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-sub font-black">
                                                $
                                            </span>
                                            <input
                                                type="number"
                                                step="0.01"
                                                value={energyTariff}
                                                onChange={(e) =>
                                                    setEnergyTariff(
                                                        parseFloat(
                                                            e.target.value,
                                                        ),
                                                    )
                                                }
                                                className="w-full bg-background border border-divider rounded-2xl py-4 pl-8 pr-4 font-brand text-xl font-black text-text-main focus:outline-none focus:border-amber transition-colors"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Output (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {/* Summary Dashboard */}
                        <div className="flex-1 bg-black text-white p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[400px]">
                            {/* Animated Background Pulse */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber/20 blur-[100px] rounded-full animate-pulse pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                                        <TrendingUp
                                            size={20}
                                            className="text-amber"
                                        />
                                    </div>
                                    <span className="font-brand text-[10px] font-bold text-amber uppercase tracking-[0.3em]">
                                        Est. Monthly Revenue
                                    </span>
                                </div>

                                <div className="mb-12">
                                    <div className="flex items-baseline gap-3">
                                        <span className="font-brand text-6xl md:text-8xl font-black tracking-tighter text-white">
                                            $
                                            <AnimatedNumber
                                                value={results.totalMonthly}
                                            />
                                        </span>
                                        <span className="font-brand text-xl text-white/40 font-light">
                                            / mo
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-green-400 font-brand text-sm font-bold mt-4">
                                        <ArrowUpRight size={18} />
                                        <span className="text-white">
                                            Est. yearly return: $
                                            {results.yearly.toLocaleString()}
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-auto">
                                    <div className="bg-white/5 border border-white/5 p-6 rounded-3xl">
                                        <div className="font-brand text-[9px] font-black text-white/40 uppercase tracking-[0.2em] mb-2">
                                            SOLR Minting
                                        </div>
                                        <div className="font-brand text-2xl font-black text-white">
                                            $
                                            {results.rewardEarnings.toLocaleString(
                                                undefined,
                                                { maximumFractionDigits: 0 },
                                            )}
                                        </div>
                                    </div>
                                    <div className="bg-white/5 border border-white/5 p-6 rounded-3xl">
                                        <div className="font-brand text-[9px] font-black text-white/40 uppercase tracking-[0.2em] mb-2">
                                            Grid Savings
                                        </div>
                                        <div className="font-brand text-2xl font-black text-white">
                                            $
                                            {results.energySavings.toLocaleString(
                                                undefined,
                                                { maximumFractionDigits: 0 },
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Capacity Note */}
                        <div className="bg-amber p-8 rounded-[2rem] flex items-center justify-between border border-amber-light group hover:scale-[1.02] transition-all duration-500">
                            <div>
                                <div className="font-brand text-[10px] font-black text-black/40 uppercase tracking-widest mb-1">
                                    Monthly System Output
                                </div>
                                <div className="font-brand text-4xl font-black text-black tracking-tighter">
                                    {results.monthlyGeneration.toLocaleString()}
                                    <span className="text-xl ml-2 opacity-50">
                                        kWh
                                    </span>
                                </div>
                            </div>
                            <div className="w-14 h-14 bg-black/5 rounded-2xl flex items-center justify-center -rotate-6 group-hover:rotate-0 transition-all duration-500 border border-black/5">
                                <Zap size={28} className="text-black" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
