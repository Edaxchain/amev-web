import { Metadata } from "next";
import HeaderT from "./HeaderT"
import TokenUtility from "./Utility";
import TokenAllocation from "./Allocation";
import MintingModel from "./Minting";
import ConnectWalletSection from "./WalletT";


export const metadata: Metadata = {
    title: "Energy Solutions | AMEV",
    description:
        "From solar rooftops to utility-scale farms and floating solar, AMEV provides diverse clean energy solutions.",
};
export default function TokenomicPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <HeaderT />
            <TokenUtility />
            <MintingModel />
            <TokenAllocation/>
            <ConnectWalletSection />
        </main>
    );
}