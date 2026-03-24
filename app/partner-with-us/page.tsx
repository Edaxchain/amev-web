import Built from "@/app/home/Built";
import { Button } from "@/app/_components/ui/button";

export default function PartnerWithUsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <div className="py-24 px-6 md:px-[52px] flex flex-col items-center justify-center text-center bg-panel-dark text-panel-dark-text relative overflow-hidden">
                <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full bg-amber/5 blur-[120px] pointer-events-none" />

                <div className="flex items-center gap-3 mb-8">
                    <div className="h-px w-8 bg-amber" />
                    <span className="font-brand text-[10px] font-bold text-amber uppercase tracking-[0.3em]">
                        Strategic Partnerships
                    </span>
                </div>
                <h2 className="font-brand text-6xl font-black mb-6 leading-none">
                    Power the future <br />
                    <span className="text-amber italic font-editorial font-light">
                        together.
                    </span>
                </h2>
                <p className="font-brand text-[16px] text-panel-dark-muted max-w-2xl mx-auto leading-relaxed mb-12">
                    Join AMEV in developing Southeast Asia's most advanced
                    renewable energy infrastructure. We're looking for land
                    owners, investors, and engineering partners.
                </p>
                <Button className="bg-button-primary text-button-primary-text hover:bg-button-primary-hover font-bold h-14 px-10 rounded-full text-lg shadow-xl shadow-amber/20 transition-all hover:-translate-y-1">
                    Apply for Partnership
                </Button>
            </div>

            <Built />

            <div className="py-20 px-6 md:px-[52px] bg-bg-alt border-t border-border">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-3xl font-black text-text-main mb-6 uppercase">
                            Why Partner with AMEV?
                        </h3>
                        <div className="flex flex-col gap-6">
                            {[
                                {
                                    t: "Proven Track Record",
                                    d: "Phase 1 of our 368MW master plan is already underway in Phichit, Thailand.",
                                },
                                {
                                    t: "Blockchain Transparency",
                                    d: "Every kWh generated is verified on-chain, ensuring trust and automated settlements.",
                                },
                                {
                                    t: "Regulatory Expertise",
                                    d: "Deep knowledge of Thailand's renewable energy framework and national grid standards.",
                                },
                            ].map((item) => (
                                <div key={item.t} className="flex gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber mt-2 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-text-main uppercase text-sm tracking-widest">
                                            {item.t}
                                        </h4>
                                        <p className="text-text-sub text-sm leading-relaxed">
                                            {item.d}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-bg-sub p-10 rounded-2xl border border-divider">
                        <h4 className="text-xl font-bold text-text-main mb-8">
                            Inquiry Form
                        </h4>
                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="bg-background border border-border p-4 rounded-xl text-sm"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-background border border-border p-4 rounded-xl text-sm"
                            />
                            <select className="bg-background border border-border p-4 rounded-xl text-sm text-text-sub">
                                <option>Type of Partnership</option>
                                <option>Land Owner</option>
                                <option>Institutional Investor</option>
                                <option>EPC / Engineering</option>
                            </select>
                            <textarea
                                placeholder="Tell us about your project or inquiry"
                                rows={4}
                                className="bg-background border border-border p-4 rounded-xl text-sm"
                            />
                            <Button className="bg-amber text-panel-dark hover:bg-amber-deep font-bold py-6 rounded-xl">
                                Submit Inquiry
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
