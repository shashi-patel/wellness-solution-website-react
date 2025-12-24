import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white border-b z-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src="/logowithtext.svg"
                        alt="Wellness Solution"
                        className="h-8 md:h-10 w-auto"
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    <Link to="/about" className="hover:text-blue-600">About</Link>
                    <Link to="/contact" className="hover:text-blue-600">Contact</Link>
                    <Link to="/privacy-policy" className="hover:text-blue-600">Privacy</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-600 text-xl"
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white border-t px-4 pb-4 space-y-3 text-sm text-gray-600">
                    <Link to="/" className="block" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/about" className="block" onClick={() => setOpen(false)}>About</Link>
                    <Link to="/contact" className="block" onClick={() => setOpen(false)}>Contact</Link>
                    <Link to="/privacy-policy" className="block" onClick={() => setOpen(false)}>Privacy</Link>
                </div>
            )}
        </header>
    );
}
