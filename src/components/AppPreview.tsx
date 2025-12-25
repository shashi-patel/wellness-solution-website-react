export default function AppPreview() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">

                {/* Left Content */}
                <div className="md:w-1/2">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                        See How It{" "}
                        <span className="bg-gradient-to-r from-[#51C2BA] to-[#277FC2] bg-clip-text text-transparent">
                            Works in Action
                        </span>
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-lg">
                        Our platform makes it easy to check symptoms, understand
                        severity, and take the right next steps — all in one place.
                    </p>

                    <ul className="mt-6 space-y-3 text-gray-600 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-[#51C2BA] font-semibold">✔</span>
                            Simple and guided experience
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#51C2BA] font-semibold">✔</span>
                            Clear severity indicators
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#277FC2] font-semibold">✔</span>
                            Fast and reliable insights
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#277FC2] font-semibold">✔</span>
                            Mobile-friendly design
                        </li>
                    </ul>

                    {/* App Store CTA */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
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

                {/* Right Preview */}
                <div className="md:w-1/2 w-full">
                    <div
                        className="
              w-full h-[260px] md:h-[340px]
              rounded-2xl
              bg-gradient-to-br from-[#51C2BA]/15 to-[#277FC2]/15
              flex items-center justify-center
              text-[#277FC2] font-semibold
              shadow-md
            "
                    >
                        App / Video Preview
                    </div>
                </div>

            </div>
        </section>
    );
}
