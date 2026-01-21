import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src="/logowithtext.svg"
                        alt="Wellness Solution"
                        className="h-8 md:h-10 w-auto"
                    />
                </Link>

                {/* Desktop Menu + Button */}
                <div className="hidden md:flex items-center gap-6">
                    <nav className="flex items-center gap-8 text-sm font-medium">
                        {[
                            { label: "Home", path: "/" },
                            { label: "About", path: "/about" },
                            { label: "Contact", path: "/contact" },
                            { label: "Privacy", path: "/privacy-policy" },
                        ].map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`
                  relative transition
                  ${isActive(item.path)
                                        ? "text-gray-900"
                                        : "text-gray-600 hover:text-gray-900"
                                    }
                `}
                            >
                                {item.label}

                                {/* Active underline */}
                                <span
                                    className={`
                    absolute left-0 -bottom-1 h-[2px] w-full
                    bg-gradient-to-r from-[#51C2BA] to-[#277FC2]
                    transition-transform origin-left
                    ${isActive(item.path) ? "scale-x-100" : "scale-x-0"}
                  `}
                                />
                            </Link>
                        ))}
                    </nav>

                    {/* ✅ Book Appointment Button */}
                    <a
                        href="https://wellnesssolution.zohobookings.in/#/367285000000042052"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              px-4 py-2 rounded-full text-sm font-semibold text-white
              bg-gradient-to-r from-[#51C2BA] to-[#277FC2]
              shadow-md hover:opacity-90 transition
            "
                    >
                        Book Appointment
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-700 text-xl"
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 space-y-3 text-sm">
                    {[
                        { label: "Home", path: "/" },
                        { label: "About", path: "/about" },
                        { label: "Contact", path: "/contact" },
                        { label: "Privacy", path: "/privacy-policy" },
                    ].map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setOpen(false)}
                            className={`
                block py-2
                ${isActive(item.path)
                                    ? "text-[#277FC2] font-semibold"
                                    : "text-gray-600"
                                }
              `}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* ✅ Book Appointment Button - Mobile */}
                    <a
                        href="https://wellnesssolution.zohobookings.in/#/367285000000042052"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="
              block text-center mt-3 px-4 py-2 rounded-full text-sm font-semibold text-white
              bg-gradient-to-r from-[#51C2BA] to-[#277FC2]
              shadow-md hover:opacity-90 transition
            "
                    >
                        Book Appointment
                    </a>
                </div>
            )}
        </header>
    );
}
