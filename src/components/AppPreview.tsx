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
                <div className="md:w-1/2 w-full flex justify-center">
                    {/* Phone shell */}
                    <div
                        className="
      relative
      w-[250px] sm:w-[270px] md:w-[290px]   /* 👈 reduced */
      aspect-[9/19.5]
      rounded-[32px]                        /* 👈 slightly tighter */
      bg-neutral-900
      shadow-xl
      ring-1 ring-white/10
      flex items-center justify-center
    "
                    >
                        {/* Side buttons */}
                        <span className="absolute -left-[3px] top-[105px] h-8 w-[3px] rounded bg-neutral-700" />
                        <span className="absolute -left-[3px] top-[145px] h-14 w-[3px] rounded bg-neutral-700" />
                        <span className="absolute -right-[3px] top-[135px] h-16 w-[3px] rounded bg-neutral-700" />

                        {/* Screen */}
                        <div
                            className="
        relative
        w-[92%]
        h-[94%]
        rounded-[24px]                      /* 👈 adjusted */
        overflow-hidden
        bg-black
      "
                        >
                            {/* Status bar */}
                            <div className="absolute top-0 left-0 right-0 h-5 bg-black/40 z-10" />

                            {/* Video */}
                            <video
                                src="/wellness.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
}
