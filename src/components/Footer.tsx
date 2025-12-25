import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-gray-300 relative">
            {/* Top gradient accent */}
            <div className="h-[2px] w-full bg-gradient-to-r from-[#51C2BA] to-[#277FC2]" />

            <div className="max-w-7xl mx-auto px-6 py-14">

                {/* Top */}
                <div className="grid gap-10 md:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <img
                            src="/logowithtext.svg"
                            alt="Wellness Solution"
                            className="h-9 mb-4"
                        />
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Helping you understand your health with clarity,
                            confidence and simplicity.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4 relative inline-block">
                            Company
                            <span className="absolute left-0 -bottom-1 w-8 h-[2px] bg-gradient-to-r from-[#51C2BA] to-[#277FC2]" />
                        </h4>

                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4 relative inline-block">
                            Support
                            <span className="absolute left-0 -bottom-1 w-8 h-[2px] bg-gradient-to-r from-[#51C2BA] to-[#277FC2]" />
                        </h4>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/privacy-policy" className="hover:text-white transition">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms-and-conditions" className="hover:text-white transition">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link to="/medical-sources" className="hover:text-white transition">
                                    Medical Sources & Oversight
                                </Link>
                            </li>
                            <li>
                                <Link to="/delete-account" className="hover:text-white transition">
                                    Delete Account
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* App Store CTA */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4 relative inline-block">
                            Get the App
                            <span className="absolute left-0 -bottom-1 w-8 h-[2px] bg-gradient-to-r from-[#51C2BA] to-[#277FC2]" />
                        </h4>

                        <p className="text-sm text-gray-400 mb-4">
                            Download Wellness Solution on your device.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="https://apps.apple.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/appstore-badge.svg"
                                    alt="Download on the App Store"
                                    className="h-11 w-auto hover:opacity-90 transition"
                                />
                            </a>

                            <a
                                href="https://play.google.com/store"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/playstore-badge.svg"
                                    alt="Get it on Google Play"
                                    className="h-11 w-auto hover:opacity-90 transition"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Wellness Solution. All rights reserved.
                </div>

            </div>
        </footer>
    );
}
