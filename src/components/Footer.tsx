export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">

                {/* Top */}
                <div className="grid gap-8 md:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">
                            Wellness Solution
                        </h3>
                        <p className="text-sm text-gray-400">
                            Helping you understand your health with clarity, confidence,
                            and simplicity.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-3">
                            Company
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">How It Works</a></li>
                            <li><a href="#" className="hover:text-white">Features</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-3">
                            Support
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-3">
                            Get Started
                        </h4>
                        <p className="text-sm text-gray-400 mb-4">
                            Start checking your symptoms today.
                        </p>
                        <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition">
                            Start Health Check
                        </button>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Wellness Solution. All rights reserved.
                </div>

            </div>
        </footer>
    );
}
