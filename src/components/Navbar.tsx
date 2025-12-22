import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white border-b z-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="text-lg md:text-xl font-bold text-blue-600">
                    Wellness Solution
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
                    <a href="#" className="hover:text-blue-600">About</a>
                    <a href="#" className="hover:text-blue-600">How it Works</a>
                    <a href="#" className="hover:text-blue-600">Features</a>
                    <a href="#" className="hover:text-blue-600">Contact</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-600"
                >
                    ☰
                </button>

                {/* Desktop CTA */}
                <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full text-sm">
                    Start Check
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white border-t px-4 pb-4 space-y-3 text-sm text-gray-600">
                    <a href="#" className="block">About</a>
                    <a href="#" className="block">How it Works</a>
                    <a href="#" className="block">Features</a>
                    <a href="#" className="block">Contact</a>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-full">
                        Start Check
                    </button>
                </div>
            )}
        </header>
    );
}
