"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Smartphone, ArrowUpRight, Send, Linkedin, Facebook } from 'lucide-react';
import { containerVars, itemVars } from "@/app/_lib/animations";
import Script from 'next/script';

export default function OfficeLocation() {
    const fullAddress = "82/11 M. 5, Sao Thong Hin, Bang Yai, Nonthaburi 11140 Thailand";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

    const XIcon = ({ size = 18 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
        </svg>
    );




    return (
        <section id="location" className="bg-bg-alt py-24 px-6 lg:px-20 border-b border-border">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVars}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
            >
                <div className="lg:col-span-5 flex flex-col justify-between">
                    <motion.div variants={itemVars}>
                        <div className="flex items-center gap-4 mb-6">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 32 }}
                                className="h-[1px] bg-amber-deep"
                            />
                            <span className="font-brand text-[13px] tracking-[0.4em] uppercase text-amber-deep font-black italic">
                                Contact
                            </span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-brand italic text-text-main tracking-tighter leading-none mb-10">
                            Regional <br />
                            <span className="font-serif normal-case text-amber-deep">Headquarters.</span>
                        </h2>

                        <div className="flex flex-col gap-6">
                            {/* Address Card */}
                            <div className="group">

                                <p className="text-lg font-brand text-text-main mb-3 font-bold flex items-center gap-2">
                                    <MapPin size={18} className='text-amber shrink-0' />
                                    <span>Address</span>
                                </p>
                                <p className="text-lg text-text-main font-brand italic leading-snug">
                                    82/11 M. 5, Sao Thong Hin, <br />
                                    Bang Yai, Nonthaburi 11140, <br />
                                    Thailand
                                </p>
                            </div>
                            <motion.div variants={itemVars} className="mt-2 lg:mt-0">
                                <a
                                    href={googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 text-amber-deep font-brand text-xs tracking-[0.2em] font-black group"
                                >
                                    Get Directions
                                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                            </motion.div>

                            {/* Contact Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col">
                                    <p className="text-lg font-brand text-text-main mb-3 font-bold flex items-center gap-2">
                                        <Smartphone size={18} className="text-amber shrink-0" />
                                        Inquiries</p>
                                    <div className="flex flex-col gap-2">
                                        <a href="mailto:support@amev.io" className="flex items-center gap-3 text-sm text-text-main hover:text-amber-deep transition-colors font-bold tracking-tight">
                                            support@amev.io
                                        </a>
                                        <a href="tel:+66868972555" className="flex items-center gap-3 text-sm text-text-main hover:text-amber-deep transition-colors font-bold tracking-tight uppercase">
                                            (+66) 86-897-2555
                                        </a>
                                        <a href="tel:+6621034555" className="flex items-center gap-3 text-sm text-text-main hover:text-amber-deep transition-colors font-bold tracking-tight uppercase">
                                            (+66) 2-103-4555
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-lg font-brand text-text-main mb-2 font-bold flex items-center gap-2">
                                        <Users size={18} className="text-amber" />
                                        Community</p>

                                    <div className="flex items-center gap-1">
                                        
                                        {[
                                            { name: 'Telegram', icon: <Send size={18} />, href: '#' },
                                            { name: 'Facebook', icon: <Facebook size={18} />, href: '#' },
                                            { name: 'Twitter', icon: <XIcon size={18} />, href: '#' },
                                            { name: 'LinkedIn', icon: <Linkedin size={18} />, href: '#' }

                                        ].map((social) => (
                                            <a
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 rounded-2xl flex items-center justify-center text-text-main hover:text-amber-deep hover:border-amber hover:bg-amber-tint transition-all duration-300 group relative"
                                                title={social.name}
                                            >
                                                <div className="group-hover:scale-110 transition-transform duration-300">
                                                    {social.icon}
                                                </div>
                                                <span className="absolute -bottom-3 text-[9px] font-brand tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-text-sub">
                                                    {social.name}
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                </div>

                <motion.div
                    variants={itemVars}
                    className="lg:col-span-7 relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-tr from-amber-deep/20 to-transparent rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="relative h-[500px] lg:h-full min-h-[450px] w-full rounded-[3rem] overflow-hidden border border-border bg-bg-alt shadow-2xl">
                        <iframe
                            title="AMEV Headquarters Location"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`}
                        ></iframe>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}