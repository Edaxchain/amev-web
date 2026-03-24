import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | AMEV Renewable Energy Infrastructure",
    description:
        "Explore our 368MW solar master plan and the Phichit City pilot installation.",
};

export default function ProjectPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <div className="py-20 flex flex-col items-center">
                <h2 className="text-4xl font-black text-text-main mb-4 uppercase">
                    Project Portfolio
                </h2>
                <p className="text-text-sub max-w-2xl text-center italic font-editorial">
                    368+ MW of Clean Energy Infrastructure
                </p>
            </div>
        </main>
    );
}
