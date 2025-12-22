export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-20 flex flex-col md:flex-row items-center gap-12">

                {/* Text */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        A Smarter Way to{" "}
                        <span className="text-blue-600">
                            Understand Your Health
                        </span>
                    </h1>

                    <p className="text-gray-600 mt-4 max-w-lg mx-auto md:mx-0">
                        Check symptoms, get instant insights, and understand your health
                        condition in a simple and reliable way.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm">
                            Start Your Health Check
                        </button>
                        <button className="border border-gray-300 px-6 py-3 rounded-full text-sm">
                            Download the App
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="md:w-1/2 w-full">
                    <div className="w-full h-[260px] md:h-[320px] bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-semibold">
                        App Preview Image
                    </div>
                </div>
            </div>
        </section>
    );
}
