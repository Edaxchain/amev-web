const ProgressBar = ({ progress }: { progress: string }) => {
    return (
        <div className="hidden lg:flex w-full h-3 items-center relative">
            {/* Progress Track */}
            <div className="w-full h-[4px] bg-panel-dark-muted flex justify-start overflow-hidden">
                <div
                    className="h-full bg-foreground transition-all duration-500 rounded-full"
                    style={{ width: progress }}
                />
            </div>

            {/* Left Circle (Start) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-foreground rounded-full" />

            {/* Right Circle (End) */}
            <div
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full transition-colors ${
                    progress === "100%"
                        ? "bg-foreground duration-500" // Fades to black as bar arrives
                        : "bg-panel-dark-muted duration-75" // Snaps back to grey quickly when reducing
                }`}
            />
        </div>
    );
};

const Card = ({
    title,
    subtitle,
    description,
    status,
}: {
    title: string;
    subtitle: string;
    description: string;
    status: string;
}) => {
    return (
        <div className="bg-amber-light p-6 rounded-2xl">
            <h3 className="text-2xl font-bold">{title}</h3>
            <h3 className="text-xl uppercase">{subtitle}</h3>
            <p className="text-text-sub mt-4">{description}</p>
            <div className="bg-amber-deep p-2 rounded-md">
                <span>{status}</span>
            </div>
        </div>
    );
};

export default function Plan() {
    const cards = [
        {
            title: "2021",
            subtitle: "phase 1",
            description:
                "Master plan approved. Land acquisition begins in Phichit City. Engineering design complete",
            status: "complete",
        },
        {
            title: "2023",
            subtitle: "Pilot launch",
            description:
                "Phichit pilot installation live. First SOLR tokens minted. Blockchain platform operational.",
            status: "complete",
        },
        {
            title: "2025",
            subtitle: "Expansion",
            description:
                "5-province rollout underway. EV station network begins. Hospital energy supply planning.",
            status: "In progress",
        },
        {
            title: "2027",
            subtitle: "Asean phase",
            description:
                "Regional grid connectivity. Cross-border energy trading enabled. ASEAN hub development.",
            status: "Upcoming",
        },
        {
            title: "2029",
            subtitle: "Full 368 MW",
            description:
                "Complete 368MW capacity. Full hybrid fossil-to-solar transition. Community power plant model replicated nationally.",
            status: "Target",
        },
    ];

    return (
        <section className="bg-amber p-10 lg:p-20 flex flex-col gap-12 lg:gap-16">
            <div className="flex flex-col lg:flex-row justify-between gap-10">
                <div>
                    <span className="text-amber-deep tracking-widest text-xs uppercase mb-4">
                        Project Timeline
                    </span>
                    <h1 className="text-text-main text-4xl sm:text-5xl md:text-6xl font-bold">
                        Implementation plan
                    </h1>
                    <p className="text-text-main text-3xl sm:text-4xl md:text-6xl mt-6 max-w-xl">
                        2021-2029
                    </p>
                </div>
                <div>
                    <p className="text-text-sub mt-6 max-w-xl">
                        Sustainable urban development in the future under the
                        development framework of the Renewable Energy Power
                        Plant Industry.
                    </p>
                </div>
            </div>

            <ProgressBar progress="50%" />
            <div className="grid grid-cols-1 px-[15vw] lg:px-0 lg:grid-cols-5 gap-6">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        subtitle={card.subtitle}
                        description={card.description}
                        status={card.status}
                    />
                ))}
            </div>
        </section>
    );
}
