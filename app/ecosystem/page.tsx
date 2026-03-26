import CTAEco from "./CTAEco";
import CoreEco from "./Core";
import EnergyProduction from "./Energy";
import Blockchain from "./Blockchain"
import CommunityImpact from "./Community";


export default function EcosystemPage() {
    return (
        <main className="bg-background min-h-screen text-text-main">        
            <CoreEco />
            <EnergyProduction />
            <Blockchain />
            <CommunityImpact />
            <CTAEco />
        </main>
    );
}