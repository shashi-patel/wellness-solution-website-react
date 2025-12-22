import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Symptoms from "../components/Symptoms";
import HowItWorks from "../components/HowItWorks";
import SeverityLevels from "../components/SeverityLevels";
import AppPreview from "../components/AppPreview";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="pt-20">
                <Hero />
                <Symptoms />
                <HowItWorks />
                <SeverityLevels />
                <AppPreview />
                <Testimonials />
                <Footer />
            </div>
        </>
    );
}
