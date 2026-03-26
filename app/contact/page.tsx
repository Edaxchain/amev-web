export default function ContactPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <div className="flex-1 py-32 px-6 md:px-[52px] flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-px w-8 bg-amber-deep" />
                    <span className="font-brand text-[10px] font-bold text-amber-deep uppercase tracking-[0.3em]">
                        Contact & Support
                    </span>
                </div>
                <h2 className="font-brand text-6xl font-black text-text-main mb-6 leading-none">
                    Get in{" "}
                    <span className="text-amber italic font-editorial font-light">
                        touch.
                    </span>
                </h2>
                <p className="font-brand text-[14px] text-text-sub max-w-xl mx-auto leading-relaxed mb-12">
                    Whether you're looking for clean energy solutions,
                    partnership opportunities, or technical support, we're here
                    to help you power ASEAN's renewable future.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                    <div className="p-8 border border-border rounded-2xl bg-bg-sub/30 flex flex-col items-start text-left">
                        <span className="text-amber text-[10px] font-bold uppercase tracking-widest mb-1">
                            Partnership Inquiries
                        </span>
                        <h4 className="text-text-main text-lg font-bold mb-2">
                            partners@amev.io
                        </h4>
                        <p className="text-text-sub text-[12px]">
                            For institutional and investment partners.
                        </p>
                    </div>
                    <div className="p-8 border border-border rounded-2xl bg-bg-sub/30 flex flex-col items-start text-left">
                        <span className="text-amber text-[10px] font-bold uppercase tracking-widest mb-1">
                            General Support
                        </span>
                        <h4 className="text-text-main text-lg font-bold mb-2">
                            info@amev.io
                        </h4>
                        <p className="text-text-sub text-[12px]">
                            For technical help and general inquiries.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
