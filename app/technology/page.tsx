import Hero from "./Hero";
import Architecture from "./Architecture";
import Blockchain from "./Blockchain";
import Iot from "./Iot";

export default function TechnologyPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Hero />
            <Architecture />
            <Blockchain />
            <Iot/>
        </main>
    );
}
