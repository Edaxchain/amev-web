"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function EnergyProduction() {
    return (
        <section className="py-20 bg-background text-text-main overflow-hidden">
            <div className="px-6 lg:px-20 mb-2 relative z-10">
                <div className="flex items-center gap-4">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 32 }}
                        className="h-[1px] bg-amber-deep"
                    />
                    <span className="font-brand text-[13px] tracking-[0.4em] uppercase text-amber-deep font-bold italic">
                        Generation & Data</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    <div>
                    <h2 className="text-4xl lg:text-5xl font-brand italic text-text-main tracking-tighter leading-[1.3] mb-10">
                            Pure Solar <br />
                            <span className="font-serif normal-case text-amber-deep">to Digital Data.</span>
                        </h2>

                        <p className="text-text-main text-lg lg:text-xl italic mb-10 leading-relaxed max-w-lg">
                            From massive solar farms to floating arrays, our
                            <span className="text-text-main font-bold"> 368MW </span>
                            infrastructure powers the region. Integrated with advanced
                            <span className="text-text-main font-bold"> IoT Smart Metering</span>, every unit of clean energy is verified in real-time.
                        </p>


                        <Button asChild className="group items-center bg-button-primary text-button-primary-text px-6 py-5 rounded-2xl font-bold transition-all hover:bg-button-primary-hover active:scale-95 shadow-2xl shadow-black/20 h-auto">
                            <Link href="/solution">
                                Explore Our Solar Solutions
                                <ArrowUpRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </Button>

                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { key: 1, label: "Solar Farm", val: "Industrial", img: "/img/solar-farm.png" },
                                { key: 2, label: "Floating Solar", val: "Water Body", img: "/img/solar-floating.png" },
                                { key: 3, label: "Rooftop", val: "Commercial", img: "/img/solar-rooftop.jpg" },
                                { key: 4, label: "IoT Oracle", val: "Real-time", img: "/img/bc.png" }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="group relative h-[280px] rounded-[2.5rem] overflow-hidden border border-amber-border shadow-lg bg-amber-dim"
                                >
                                    <Image
                                        src={item.img}
                                        alt={item.label}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">


                                        <div>
                                            <p className="font-brand italic text-2xl text-white mb-1 leading-none">
                                                {item.label}
                                            </p>
                                            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-amber-deep font-bold">
                                                {item.val}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2 border-amber-border rounded-[2.5rem] z-20" />
                                </motion.div>
                            ))}
                        </div>

                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-200/20 blur-[100px] rounded-full" />
                    </div>

                </div>
            </div>
        </section>
    );
}