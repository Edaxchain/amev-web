import Hero from "./Hero";
import Rating from "./Rating";
import Stats from "./Stats";
import ProjectBackground from "./Background";
import Solution from "./Solution";
import HowItWorks from "./Works";
import CommunityImpact from "./Impact";
import BlockchainSection from "./Blockchain";
import Plan from "./Plan";
import Built from "./Built";

export default function LandingPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Hero />
            <Rating />
            <Stats />
            <ProjectBackground />
            <Solution />
            <HowItWorks />
            <CommunityImpact />
            <BlockchainSection />
            <Plan />
            <Built />
        </main>
    );
}
