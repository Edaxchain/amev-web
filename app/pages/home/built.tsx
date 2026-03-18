import { Building, Settings, Medal, Zap, Link } from "lucide-react";

const Card = ({
    title,
    subtitle,
    icon: Icon,
}: {
    title: string;
    subtitle: string;
    icon: React.ElementType;
}) => {
    return (
        <div className="p-10 rounded-2xl transition-all duration-300 border border-amber-deep/60 text-center flex flex-col items-center gap-6 group hover:bg-panel-dark-muted/5 hover:border-amber-deep/30">
            <div className="p-4 bg-panel-dark-muted/10 rounded-full group-hover:bg-amber-deep/10 transition-colors">
                <Icon className="w-10 h-10 text-amber-deep" strokeWidth={1.2} />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold leading-snug">{title}</h3>
                <p className="text-xs uppercase tracking-widest text-text-sub font-medium">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default function Built() {
    const cards = [
        {
            title: "Ample Rich Investors Corp.",
            subtitle: "Lead developer · Thailand",
            icon: Building,
        },
        {
            title: "BS Industry Service Co., Ltd.",
            subtitle: "Grid & engineering partner",
            icon: Settings,
        },
        {
            title: "ISO 9001 Certified",
            subtitle: "Quality management system",
            icon: Medal,
        },
        {
            title: "IEC 61215 Compliant",
            subtitle: "International solar standard",
            icon: Zap,
        },
        {
            title: "Solana Blockchain",
            subtitle: "SPL token infrastructure",
            icon: Link,
        },
    ];

    return (
        <section
            id="built"
            className="p-10 lg:p-20 flex flex-col gap-12 lg:gap-16"
        >
            <div className="flex flex-col lg:flex-row justify-between gap-10-0">
                <div>
                    <span className="text-amber-deep tracking-widest text-xs uppercase mb-4">
                        Partner & Compliance
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                        Built with trusted
                    </h1>
                    <p className="text-amber-deep text-3xl sm:text-4xl md:text-6xl mt-6 italic">
                        Industry Leaders.
                    </p>
                </div>
                <div>
                    <p className="text-text-sub mt-6 max-w-xl text-right">
                        Developed under Thailand's national renewable energy
                        framework in partnership with leading engineering and
                        investment groups.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 px-[10vw] lg:px-0 lg:grid-cols-5 gap-6">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        subtitle={card.subtitle}
                        icon={card.icon}
                    />
                ))}
            </div>
        </section>
    );
}
