import Hero from "@/app/pages/home/hero";
import Plan from "@/app/pages/home/plan";
import Built from "@/app/pages/home/built";

export default function LandingPage() {
    return (
        <main className="flex min-h-screen flex-col py-12 bg-background">
            <Hero />
            <Plan />
            <Built />
        </main>
    );
}
