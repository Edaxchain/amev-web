"use client";

import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, animate, useInView, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountUpNumberProps {
    value: string;
    duration?: number;
}

function CountUpNumber({ value, duration = 2 }: CountUpNumberProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" }); // นับเมื่อ Scroll มาถึง
    const [displayValue, setDisplayValue] = useState("0");

    // แยกตัวเลขออกจาก Text (เช่น "368 MW" -> 368)
    const numericPart = parseInt(
        value.replace(/,/g, "").match(/\d+/)?.at(0) || "0",
        10,
    );
    const textPart = value.replace(numericPart.toString(), "");

    useEffect(() => {
        if (isInView) {
            // สร้าง Animation สำหรับการนับเลข
            const controls = animate(0, numericPart, {
                duration: duration,
                ease: [0.22, 1, 0.36, 1], // จังหวะนุ่มนวลแบบ Solarc
                onUpdate(latest) {
                    // ปรับรูปแบบตัวเลข เช่น ใส่ comma
                    const formatted =
                        Math.floor(latest).toLocaleString("en-US");
                    setDisplayValue(formatted + textPart);
                },
            });

            return () => controls.stop();
        }
    }, [isInView, numericPart, duration, textPart]);

    return <span ref={ref}>{displayValue}</span>;
}

const stats = [
    { label: "Total Capacity", value: "368 MW" },
    { label: "Coverage", value: "5 provinces" },
    { label: "Completion target", value: "2,029" },
];

export default function Partner() {
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
            <div className="max-w-[1440px] mx-auto px-6 md:px-[52px] w-full relative">
                <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="font-brand text-[10px] font-bold text-amber-deep uppercase tracking-[0.3em]">
                                Join the project
                            </span>
                        </div>
                        <h2 className="font-black  font-brand text-4xl">
                            Partner with us.
                            <br />
                            <span className="italic font-editorial font-light">
                                Shape the future.
                            </span>
                        </h2>
                        <p className="max-w-xl font-brand text-[13px] mb-8">
                            We are actively seeking government bodies,
                            institutional investors, and energy partners to join
                            the ISC Project — the largest renewable energy
                            blockchain initiative in Southeast Asia.
                        </p>
                        <motion.div
                            className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVars}
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    variants={itemVars}
                                    className={`
                                flex flex-col items-center justify-center text-center group
                                ${index !== stats.length - 1 ? "lg:border-r lg:border-border lg:pr-10" : ""}
                                `}
                                >
                                    <h2 className="font-brand text-2xl md:text-3xl font-black tracking-tighter mb-3">
                                        <CountUpNumber
                                            value={stat.value}
                                            duration={2}
                                        />
                                    </h2>

                                    <p className="font-brand text-[10px] md:text-[11px] font-bold text-text-sub uppercase tracking-[0.15em] transition-colors">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                    <div className="w-full md:w-[25%] flex flex-col gap-4 mt-6 mb-6">
                        <Button className="bg-button-secondary hover:bg-button-secondary-hover text-button-secondary-text font-brand text-xs font-bold h-12 px-8 rounded-lg transition-all group">
                            Partner with us{" "}
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button
                            variant="outline"
                            className="border-border/50 text-text-sub font-brand text-xs font-bold h-12 px-8 rounded-lg hover:border-border transition-all"
                        >
                            Download Project Deck
                        </Button>
                        <p className="text-xs">ISO Certified · Audited · Government aligned</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
