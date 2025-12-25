import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Props = {
    children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
    return (
        <>
            <Navbar />
            {/* Header offset */}
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}
