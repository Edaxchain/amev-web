"use client";

import { motion, useTransform, animate, useInView, Variants } from "framer-motion";
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
    const numericPart = parseInt(value.replace(/,/g, '').match(/\d+/)?.at(0) || "0", 10);
    const textPart = value.replace(numericPart.toString(), "");

    useEffect(() => {
        if (isInView) {
            // สร้าง Animation สำหรับการนับเลข
            const controls = animate(0, numericPart, {
                duration: duration,
                ease: [0.22, 1, 0.36, 1], // จังหวะนุ่มนวลแบบ Solarc
                onUpdate(latest) {
                    // ปรับรูปแบบตัวเลข เช่น ใส่ comma
                    const formatted = Math.floor(latest).toLocaleString('en-US');
                    setDisplayValue(formatted + textPart);
                },
            });

            return () => controls.stop();
        }
    }, [isInView, numericPart, duration, textPart]);

    return <span ref={ref}>{displayValue}</span>;
}

export default function ProjectStats() {
    const stats = [
        { label: "Total Capacity", value: "368 MW" },
        { label: "Acres · Phase 1", value: "1,557" },
        { label: "Coverage · Thailand", value: "5 provinces" },
        { label: "Implementation Plan", value: "2021—2029" },
    ];

    const containerVars = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const itemVars : Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="stats" className="relative bg-amber pt-6 pb-6 md:pt-4 md:pb-4 border-t border-amber-border/5 z-20">
            <div className="max-w-[1440px] mx-auto px-6 md:px-[52px]">

                {/* Stats Grid */}
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVars}
                >
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={stat.label}
                            variants={itemVars}
                            className={`
                                flex flex-col items-center justify-center text-center group
                                ${index !== stats.length - 1 ? 'lg:border-r lg:border-border lg:pr-10' : ''}
                            `}
                        >
                            <h2 className="font-brand text-3xl md:text-4xl font-[900] text-text-main tracking-tighter mb-3">
                                <CountUpNumber value={stat.value} duration={2} />
                            </h2>
                            
                            <p className="font-brand text-[10px] md:text-[11px] font-bold text-text-sub uppercase tracking-[0.15em] transition-colors">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}