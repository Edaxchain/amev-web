"use client";

import { motion } from "framer-motion";
import {
    Clock,
    Search,
    BarChart3,
    ArrowRight,
    CheckCircle2,
    MapPin,
    Building2,
    User,
    Mail,
    Phone,
    ChevronDown,
    Zap,
} from "lucide-react";
import { useState } from "react";

const benefits = [
    {
        icon: <Clock className="text-amber" size={24} />,
        title: "Response within 48 hours",
        description:
            "Our engineering team reviews every enquiry personally — no automated responses.",
    },
    {
        icon: <Search className="text-amber" size={24} />,
        title: "Free site assessment included",
        description:
            "If your site qualifies, we arrange a free on-site visit at no cost and no obligation.",
    },
    {
        icon: <BarChart3 className="text-amber" size={24} />,
        title: "Custom earnings projection",
        description:
            "You'll receive a full report with estimated kWh output, SOLR tokens, and monthly value for your exact site.",
    },
];

export default function YourSite() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <section
            id="quote"
            className="py-24 bg-panel-dark relative overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-[1440px] mx-auto px-6 md:px-[52px] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    {/* Left Side: Content */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px w-8 bg-amber" />
                                <span className="font-brand text-[10px] font-bold text-amber-deep uppercase tracking-[0.3em]">
                                    Get a free quote
                                </span>
                            </div>

                            <h2 className="font-brand text-5xl md:text-6xl font-black text-white leading-[1.1] mb-6">
                                Tell us about <br />
                                <span className="italic font-editorial font-light text-amber-deep">
                                    your site.
                                </span>
                            </h2>

                            <p className="font-brand text-lg text-panel-dark-muted max-w-md leading-relaxed mb-12">
                                Fill in the form and our team will assess your
                                site within 48 hours — completely free of
                                charge. We'll tell you exactly which
                                installation suits you.
                            </p>

                            <div className="space-y-8">
                                {benefits.map((benefit, i) => (
                                    <motion.div
                                        key={benefit.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.2 + i * 0.1,
                                        }}
                                        className="flex gap-5 group"
                                    >
                                        <div className="shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-amber/30 transition-colors">
                                            {benefit.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-brand text-sm font-bold text-white mb-1 tracking-tight">
                                                {benefit.title}
                                            </h3>
                                            <p className="font-brand text-[13px] text-panel-dark-muted leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-black border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden"
                        >
                            {/* Form Gradient Glow */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber/10 blur-[80px] rounded-full" />

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="font-brand text-[10px] font-black text-panel-dark-muted uppercase tracking-widest ml-1">
                                        Full name
                                    </label>
                                    <div className="relative group">
                                        <User
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-amber transition-colors"
                                            size={18}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-4 pl-12 pr-6 font-brand text-sm focus:outline-none focus:border-amber transition-all shadow-sm group-hover:shadow-md placeholder:text-white/20"
                                        />
                                    </div>
                                </div>

                                {/* Company */}
                                <div className="space-y-2">
                                    <label className="font-brand text-[10px] font-black text-panel-dark-muted uppercase tracking-widest ml-1">
                                        Company
                                    </label>
                                    <div className="relative group">
                                        <Building2
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-amber transition-colors"
                                            size={18}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Organisation name"
                                            className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-4 pl-12 pr-6 font-brand text-sm focus:outline-none focus:border-amber transition-all shadow-sm group-hover:shadow-md placeholder:text-white/20"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="font-brand text-[10px] font-black text-panel-dark-muted uppercase tracking-widest ml-1">
                                        Email address
                                    </label>
                                    <div className="relative group">
                                        <Mail
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-amber transition-colors"
                                            size={18}
                                        />
                                        <input
                                            type="email"
                                            placeholder="you@company.com"
                                            className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-4 pl-12 pr-6 font-brand text-sm focus:outline-none focus:border-amber transition-all shadow-sm group-hover:shadow-md placeholder:text-white/20"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="space-y-2">
                                    <label className="font-brand text-[10px] font-black text-panel-dark-muted uppercase tracking-widest ml-1">
                                        Phone number
                                    </label>
                                    <div className="relative group">
                                        <Phone
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-amber transition-colors"
                                            size={18}
                                        />
                                        <input
                                            type="tel"
                                            placeholder="+66 xx xxx xxxx"
                                            className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-4 pl-12 pr-6 font-brand text-sm focus:outline-none focus:border-amber transition-all shadow-sm group-hover:shadow-md placeholder:text-white/20"
                                        />
                                    </div>
                                </div>

                                {/* Installation Type */}
                                <div className="space-y-2">
                                    <label className="font-brand text-[10px] font-black text-panel-dark-muted uppercase tracking-widest ml-1">
                                        Installation type
                                    </label>
                                    <div className="relative group">
                                        <Zap
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-amber transition-colors"
                                            size={18}
                                        />
                                        <select className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-4 pl-12 pr-10 font-brand text-sm focus:outline-none focus:border-amber transition-all shadow-sm appearance-none group-hover:shadow-md outline-none placeholder:text-white/20">
                                            <option
                                                value=""
                                                className="bg-panel-dark"
                                            >
                                                Select a type
                                            </option>
                                            <option
                                                value="rooftop"
                                                className="bg-panel-dark"
                                            >
                                                Rooftop Solar
                                            </option>
                                            <option
                                                value="farm"
                                                className="bg-panel-dark"
                                            >
                                                Solar Farm
                                            </option>
                                            <option
                                                value="floating"
                                                className="bg-panel-dark"
                                            >
                                                Floating Solar
                                            </option>
                                            <option
                                                value="other"
                                                className="bg-panel-dark"
                                            >
                                                Other / Not sure
                                            </option>
                                        </select>
                                        <ChevronDown
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                                            size={16}
                                        />
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="space-y-2">
                                    <label className="font-brand text-[10px] font-black text-panel-dark-muted uppercase tracking-widest ml-1">
                                        Site location
                                    </label>
                                    <div className="relative group">
                                        <MapPin
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-amber transition-colors"
                                            size={18}
                                        />
                                        <input
                                            type="text"
                                            placeholder="City / Province, Thailand"
                                            className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-4 pl-12 pr-6 font-brand text-sm focus:outline-none focus:border-amber transition-all shadow-sm group-hover:shadow-md placeholder:text-white/20"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="md:col-span-2 space-y-2">
                                    <label className="font-brand text-[10px] font-black text-panel-dark-muted uppercase tracking-widest ml-1">
                                        Tell us about your site
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="Roof area / land size / water body dimensions, current energy usage, any relevant details…"
                                        className="w-full bg-white/5 border border-white/10 text-white rounded-2xl p-6 font-brand text-sm focus:outline-none focus:border-amber transition-all shadow-sm hover:shadow-md outline-none placeholder:text-white/20"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="md:col-span-2 pt-4">
                                    <button
                                        type="submit"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsSubmitting(true);
                                            setTimeout(
                                                () => setIsSubmitting(false),
                                                2000,
                                            );
                                        }}
                                        className={`
                                            w-full bg-amber text-panel-dark font-brand text-sm font-black uppercase tracking-[0.2em] py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300
                                            ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-amber-deep hover:text-white shadow-xl shadow-amber/20 hover:shadow-amber/40 hover:-translate-y-0.5"}
                                        `}
                                    >
                                        {isSubmitting ? (
                                            "Sending..."
                                        ) : (
                                            <>
                                                Submit Enquiry
                                                <ArrowRight size={18} />
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Footer Note */}
                                <div className="md:col-span-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-4">
                                    {[
                                        "Free assessment",
                                        "No obligation",
                                        "Response within 48 hours",
                                    ].map((text) => (
                                        <div
                                            key={text}
                                            className="flex items-center gap-2"
                                        >
                                            <CheckCircle2
                                                size={12}
                                                className="text-amber"
                                            />
                                            <span className="font-brand text-[9px] font-bold text-white/60 uppercase tracking-wider whitespace-nowrap">
                                                {text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
