import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import Symptoms from "../components/Symptoms";
import HowItWorks from "../components/HowItWorks";
import SeverityLevels from "../components/SeverityLevels";
import AppPreview from "../components/AppPreview";
import Testimonials from "../components/Testimonials";

export default function Home() {
    return (
        <MainLayout>
            <Hero />
            <Symptoms />
            <HowItWorks />
            <SeverityLevels />
            <AppPreview />
            <Testimonials />
        </MainLayout>
    );
}
