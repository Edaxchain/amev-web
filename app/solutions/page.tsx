import { Metadata } from "next";
import Hero from "./Hero";
import Works from "./Works";
import Tabs from "./Tabs";
import Calculate from "./Calculate";
import YourSite from "./YourSite";

export const metadata: Metadata = {
    title: "Energy Solutions | AMEV",
    description:
        "From solar rooftops to utility-scale farms and floating solar, AMEV provides diverse clean energy solutions.",
};

export default function SolutionsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Hero />
            <Tabs />
            <Works />
            <Calculate/>
            <YourSite/>
        </main>
    );
}
