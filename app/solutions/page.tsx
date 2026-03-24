import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Energy Solutions | AMEV",
    description:
        "From solar rooftops to utility-scale farms and floating solar, AMEV provides diverse clean energy solutions.",
};

export default function SolutionsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <div className="py-20 flex flex-col items-center">
                <h2 className="text-4xl font-black text-text-main mb-4 uppercase">
                    Custom Energy Solutions
                </h2>
                <p className="text-text-sub max-w-2xl text-center">
                    Providing tailored solar installations for businesses,
                    industrial sites, and communities.
                </p>
            </div>
        </main>
    );
}
