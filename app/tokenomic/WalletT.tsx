"use client";

import { motion } from 'framer-motion';
import { containerVars, itemVars } from "@/app/_lib/animations";
import { ArrowUpRight, Wallet, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { Button } from "@/app/_components/ui/button";

const connectSteps = [
    {
        id: "01",
        title: "Install a Web3 wallet",
        desc: "Download Digital wallet. Create a new wallet or import an existing one. Keep your seed phrase safe.",
        icon: <Wallet size={18} />
    },
    {
        id: "02",
        title: "Connect to AMEV",
        desc: "Click 'Connect wallet' below. Your wallet will prompt you to approve the connection—this is read-only and secure.",
        icon: <CheckCircle2 size={18} />
    },
    {
        id: "03",
        title: "Register your installation",
        desc: "If you have an ISC solar installation, register your wallet address with our team to start minting $AMEV directly.",
        icon: <Zap size={18} />
    },
    {
        id: "04",
        title: "Trade or hold $AMEV",
        desc: "Once tokens appear, you can sell them on DEXs, hold for appreciation, or use them within our energy ecosystem.",
        icon: <ArrowUpRight size={18} />
    }
];

const wallets = [
    { name: "MetaMask", desc: "Most popular Web3 wallet", popular: true },
    { name: "Trust Wallet", desc: "Mobile-first experience", popular: false },
    { name: "WalletConnect", desc: "Connect via mobile scan", popular: false },
];

export default function ConnectWalletSection() {
    return (
        <section className="bg-amber/80 py-22 px-6 lg:px-20 border-t border-amber-border relative overflow-hidden">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVars}
                className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
                <div className="lg:col-span-5 flex flex-col gap-10">
                    <motion.div variants={itemVars} className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 32 }}
                                className="h-[1px] bg-button-primary-text"
                            />
                            <span className="font-brand text-[13px] tracking-[0.4em] uppercase text-button-primary-text font-bold italic">
                                Connect Wallet</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-brand italic tracking-tighter text-button-primary-text leading-[0.8]">
                            Start earning <br />
                            <span className="font-serif normal-case text-button-primary-text tracking-tight opacity-95 block my-4 text-4xl lg:text-5xl">
                                $AMEV today.</span>
                        </h2>
                        <p className="text-button-primary-text text-lg lg:text-xl font-brand leading-tight max-w-lg italic">
                            Connect your wallet to view your token balance, claim pending tokens from your installation, or start trading $AMEV on the open exchange.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVars} className="flex flex-col gap-4">
                        {wallets.map((wallet, i) => (
                            <Button
                                key={i}
                                variant="outline"
                                className="group flex items-center justify-between p-4 md:p-8 w-full h-auto rounded-[1.5rem] bg-panel-dark text-button-primary-text font-bold gap-3 transition-all hover:bg-button-primary-hover active:scale-95 shadow-xl shadow-black/20">
                                <div className="flex items-center gap-5 text-left">
                                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-amber-deep group-hover:bg-amber-deep group-hover:text-button-primary-text transition-colors duration-500">
                                        <Wallet size={20} />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h4 className="font-brand font-black italic uppercase tracking-tight leading-none mb-1.5 text-panel-dark-text group-hover:text-amber-deep transition-colors">
                                            Connect {wallet.name}
                                        </h4>
                                        <p className="text-[8px] md:text-[10px] italic font-medium text-panel-dark-muted opacity-70 group-hover:opacity-100 transition-opacity group-hover:text-amber-deep">
                                            {wallet.desc}
                                        </p>
                                    </div>
                                </div>
                                <ArrowUpRight
                                    size={20}
                                    className="text-panel-dark-text opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                                />
                            </Button>
                        ))}
                    </motion.div>

                    <motion.div variants={itemVars} className="flex flex-col gap-2 pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-button-primary-text text-[12px] font-brand italic">
                            <ShieldCheck size={12} className="text-button-primary-text" />
                            Non-custodial • Audited Contracts Q2 2026
                        </div>
                        <p className="text-[12px] text-button-primary-text/50 font-brand italic">
                            AMEV never has access to your private keys or wallet funds.
                        </p>
                    </motion.div>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-12 pt-4">
                    <div className="grid grid-cols-1 gap-12">
                        {connectSteps.map((step, idx) => (
                            <motion.div key={idx} variants={itemVars} className="flex gap-6 group">
                                <span className="font-brand text-[12px] text-button-primary-text font-bold pt-1">{step.id}</span>
                                <div className="flex-1 pb-2 border-b border-divider/50 group-last:border-none">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center text-button-primary-text border border-border group-hover:bg-amber-tint/10 group-hover:text-amber-deep transition-all duration-300">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl font-brand font-black italic text-button-primary-text tracking-tight group-hover:text-amber-deep transition-colors">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-xs text-button-primary-text leading-relaxed max-w-lg opacity-80">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div variants={itemVars} className="flex flex-col gap-4">
                        <span className="font-brand text-[10px] uppercase tracking-[0.3em] text-button-primary-text font-bold italic">Compatible Wallets</span>
                        <div className="flex flex-wrap gap-2">
                            {["MetaMask", "Trust Wallet", "Rabby", "Ledger", "Safe", "Any BEP-20 Wallet"].map((w, i) => (
                                <div key={i} className="px-4 py-1.5 rounded-full border border-border bg-amber-pale/50 text-[10px] font-mono text-button-primary-text uppercase tracking-widest">
                                    ● {w}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}