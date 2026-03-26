import { Metadata } from "next";
export const metadata: Metadata = {
    title: "About AMEV | Powering ASEAN's Clean Energy Future",
    description:
        "Learn how AMEV is revolutionizing renewable energy across ASEAN with solar infrastructure and blockchain technology.",
};

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <div className="py-20 flex flex-col items-center">
                <h2 className="text-4xl font-bold text-text-main mb-4">
                    About AMEV
                </h2>
                <p className="text-text-sub max-w-2xl text-center">
                    AMEV is dedicated to revolutionizing renewable energy across
                    ASEAN by combining modern solar infrastructure with
                    blockchain transparency.
                </p>
            </div>
        </main>
    );
}
