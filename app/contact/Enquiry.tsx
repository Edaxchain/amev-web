"use client";

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { containerVars, itemVars } from "@/app/_lib/animations";
import { Button } from "@/app/_components/ui/button";

export default function EnquiryForm() {
    return (
        <section id="enquiry-form" className="bg-background py-24 px-6 lg:px-20 border-b border-border">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVars}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
            >
                <div className="lg:col-span-4 flex flex-col gap-10">
                    <motion.div variants={itemVars}>
                        <div className="flex items-center gap-4 mb-6">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 32 }}
                                className="h-[1px] bg-amber-deep"
                            />
                            <span className="font-mono text-[13px] tracking-[0.4em] uppercase text-amber-deep font-black italic">
                                Partnership
                            </span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-brand italic text-text-main tracking-tighter leading-none mb-6">
                            Institutional <br />
                            <span className="font-serif normal-case text-amber-deep">Enquiry.</span>
                        </h2>
                        <p className="text-text-sub text-sm leading-relaxed italic max-w-xs">
                            Please provide your professional credentials and project details. Our strategic team typically responds within 48 business hours.
                        </p>
                    </motion.div>

                    <motion.ul variants={itemVars} className="flex flex-col gap-4 border-t border-border pt-10">
                        {["Government Partnerships", "Institutional Investment", "Grid Technology Licensing"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-text-sub font-brand">
                                <div className="w-1 h-1 rounded-full bg-text-sub" />
                                {item}
                            </li>
                        ))}
                    </motion.ul>
                </div>

                <motion.div variants={itemVars} className="lg:col-span-8">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                        {/* Name & Title */}
                        <div className="md:col-span-1 flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-[0.3em] text-text-main font-brand pl-4">Full Name</label>
                            <input type="text" placeholder="John Doe" className="bg-foreground/5 border border-border rounded-2xl p-6 text-text-main placeholder:text-text-sub focus:border-amber focus:outline-none transition-all" />
                        </div>
                        <div className="md:col-span-1 flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-[0.3em] text-text-main font-brand pl-4">Position / Title</label>
                            <input type="text" placeholder="Executive Director" className="bg-foreground/5 border border-border rounded-2xl p-6 text-text-main placeholder:text-text-sub focus:border-amber focus:outline-none transition-all" />
                        </div>

                        {/* Organisation & Email */}
                        <div className="md:col-span-1 flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-[0.3em] text-text-main font-brand pl-4">Organisation</label>
                            <input type="text" placeholder="Global Energy Corp" className="bg-foreground/5 border border-border rounded-2xl p-6 text-text-main placeholder:text-text-sub focus:border-amber focus:outline-none transition-all" />
                        </div>
                        <div className="md:col-span-1 flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-[0.3em] text-text-main font-brand pl-4">Professional Email</label>
                            <input type="email" placeholder="john@org.com" className="bg-foreground/5 border border-border rounded-2xl p-6 text-text-main placeholder:text-text-sub focus:border-amber focus:outline-none transition-all" />
                        </div>

                        {/* Message Box (Full Width) */}
                        <div className="md:col-span-2 flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-[0.3em] text-text-main font-brand pl-4">Enquiry Details</label>
                            <textarea rows={5} placeholder="Tell us about your strategic goals..." className="bg-foreground/5 border border-border rounded-3xl p-6 text-text-main placeholder:text-text-sub focus:border-amber focus:outline-none transition-all resize-none" />
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2 flex justify-end mt-4">
                            <Button
                                variant="default"
                                className="group bg-button-primary text-button-primary-text w-full md:w-auto px-12 py-8 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-button-primary-hover transition-colors hover:scale-105 active:scale-95 transition-all shadow-2xl"
                            >
                                Dispatch Enquiry
                                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Button>
                        </div>
                    </form>
                </motion.div>
            </motion.div>
        </section>
    );
}