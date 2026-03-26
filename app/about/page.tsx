import HeaderAbout from "./HeaderAbout";
import TabsAbout from "./TabsAbout";
import MissonVision from "./MissionVision";
import Timeline from "./Timeline";
import CompanyBackground from "./Background";
import CoreValues from "./CoreValues";
import Trust from "./Trust";
import AboutCTA from "./CTAAbout";

export default function AboutPage() {
    return (
        <main className="bg-background min-h-screen text-text-main">
            <HeaderAbout />
            <TabsAbout />
            <MissonVision />
            <CompanyBackground />
            <Timeline />
            <CoreValues />
            <Trust />
            <AboutCTA />


        </main>
    );
}
