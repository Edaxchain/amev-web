import Hero from './Hero'
import Rating from './Rating'
import Stats from './Stats'
import ProjectBackground from './Background'

export default function LandingPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
        <Hero />
        <Rating />
        <Stats />
        <ProjectBackground />
        </main>


    )

}