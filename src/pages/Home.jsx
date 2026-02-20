import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Hero from "../components/sections/Hero"
import LiveStats from "../components/sections/LiveStats"
import TechStack from "../components/sections/TechStack"
import Services from "../components/sections/Services"
import Projects from "../components/sections/Projects"
import HowItWorks from "../components/sections/HowItWorks"
import WhyChooseUs from "../components/sections/WhyChooseUs"
import CommitmentMissionVision from "../components/sections/CommitmentMissionVision"
import Testimonials from "../components/sections/Testimonials"
import About from "../components/sections/About"
import Contact from "../components/sections/Contact"
import ActivityFeed from "../components/sections/ActivityFeed"

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <LiveStats />
        <Services />
        <Projects />
        <HowItWorks />
        <Testimonials />
        <About />
        <WhyChooseUs />
        <CommitmentMissionVision />
        <TechStack />
        <Contact />
      </main>
      <Footer />
      <ActivityFeed />
    </div>
  )
}
