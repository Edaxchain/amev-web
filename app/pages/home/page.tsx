import Hero from "@/app/pages/home/hero";
import Plan from "@/app/pages/home/plan";

export default function LandingPage() {
    return (
        <main className="flex min-h-screen flex-col py-12 bg-background">
            <Hero />
            <Plan />
        </main>
    );
}
