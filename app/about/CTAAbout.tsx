'use client'
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from '@/app/_components/ui/button';
import Link from 'next/link';

export default function AboutCTA() {
    return (
        <section className="scroll-mt-40 bg-amber/80 pt-10 pb-50 lg:pt-16 lg:pb-24 px-6 lg:px-20">
            <div className="flex flex-col gap-6 mb-6">
                <div className="flex items-center gap-4">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 32 }}
                        className="h-[1px] bg-button-primary-text"
                    />
                    <span className="font-brand text-[13px] tracking-[0.4em] uppercase text-button-primary-text font-bold italic">
                        Partner with us
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-start">
                <div className="lg:col-span-8 flex flex-col justify-start">
                    <h2 className="text-4xl lg:text-5xl font-brand italic tracking-tighter text-button-primary-text leading-[0.8]">
                        Be part of <br />
                        <span className="font-serif normal-case text-button-primary-text tracking-tight opacity-95 block my-4 text-4xl lg:text-5xl">
                            the mission.
                        </span>
                    </h2>

                    <p className="text-button-primary-text text-lg lg:text-xl font-brand leading-tight max-w-lg italic">
                        We are actively seeking government partners, institutional investors, and energy companies to join the ISC Project and help build ASEAN's clean energy future.
                    </p>
                </div>


                <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-start gap-5 lg:mt-2">
                    <Button variant={"default"} className="group bg-button-primary text-button-primary-text w-full lg:w-[320px] py-6 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:bg-button-primary-hover active:scale-95 shadow-2xl shadow-black/20">
                        <Link href="/">Partner With Us </Link>
                        <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>

                    <Button variant={"default"} className="bg-foreground/20 hover:bg-foreground/30 text-button-primary-text w-full lg:w-[320px] py-6 rounded-2xl font-bold transition-all backdrop-blur-md border border-black/5">
                        Download Project Deck
                    </Button>

                    <p className="text-[10px] font-mono text-button-primary-text uppercase tracking-[0.2em] mt-4 font-bold">
                        ISO Certified • Audited • Government Aligned
                    </p>
                </div>
            </div>

        </section>
    );
};
