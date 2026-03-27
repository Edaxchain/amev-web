"use client"; 

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountUpNumberProps {
    value: string;
    duration?: number;
    className?: string;
    
}

export default function CountUpNumber({ value, duration = 2, className }: CountUpNumberProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState("0");

    const rawNumbers = value.replace(/,/g, "").match(/\d+/);
    const numericPart = parseInt(rawNumbers?.[0] || "0", 10);
    const textPart = value.replace(/[0-9,]+/, "");
    
    useEffect(() => {
        if (isInView) {
            const controls = animate(0, numericPart, {
                duration: duration,
                ease: [0.22, 1, 0.36, 1],
                onUpdate(latest) {
                    const formatted = Math.floor(latest).toLocaleString("en-US");
                    setDisplayValue(formatted + textPart);
                },
            });
            return () => controls.stop();
        }
    }, [isInView, numericPart, duration, textPart]);

    return <span ref={ref} className={className}>{displayValue}</span>;
}