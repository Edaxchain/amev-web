export default function Footer() {
    return (
        <footer className="w-full bg-panel-dark text-panel-dark-text border-t border-panel-dark-border py-6 px-6 md:px-12 transition-colors z-50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 font-brand font-brand text-sm tracking-tighter shrink-0">
                {/* Logo */}
                <div className="w-5 h-5 rounded-full bg-amber flex items-center justify-center">
                    <svg viewBox="0 0 13 13" className="w-2.5 h-2.5 fill-panel-dark">
                        <circle cx="6.5" cy="6.5" r="2.5" />
                    </svg>
                </div>
                <span className="text-panel-dark-text">AMEV</span>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 font-brand text-[11px] font-brand tracking-widest">
                <span className="text-panel-dark-muted cursor-pointer hover:text-panel-dark-text transition-colors">About</span>
                <span className="text-panel-dark-muted cursor-pointer hover:text-panel-dark-text transition-colors">Project</span>
                <span className="text-panel-dark-muted cursor-pointer hover:text-panel-dark-text transition-colors">Solutions</span>
                <span className="text-panel-dark-muted cursor-pointer hover:text-panel-dark-text transition-colors">Community</span>
                <span className="text-panel-dark-muted cursor-pointer hover:text-panel-dark-text transition-colors">Partners</span>
                <span className="text-panel-dark-muted cursor-pointer hover:text-panel-dark-text transition-colors">Contact</span>
            </div>

            {/* Copyright Note */}
            <div className="text-[11px] font-brand text-panel-dark-muted opacity-80 tracking-tighter text-center md:text-right">
                © 2026 Ample Rich Investors Corp. <br className="md:hidden" /> All rights reserved
            </div>

        </div>
        </footer>
    );
}