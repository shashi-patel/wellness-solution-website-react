export default function AppPreview() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">

                {/* Left Content */}
                <div className="md:w-1/2">
                    <h2 className="text-2xl md:text-4xl font-bold">
                        See How It{" "}
                        <span className="text-blue-600">Works in Action</span>
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-lg">
                        Our platform makes it easy to check symptoms, understand
                        severity, and take the right next steps — all in one place.
                    </p>

                    <ul className="mt-6 space-y-3 text-gray-600 text-sm">
                        <li>✔ Simple and guided experience</li>
                        <li>✔ Clear severity indicators</li>
                        <li>✔ Fast and reliable insights</li>
                        <li>✔ Mobile-friendly design</li>
                    </ul>

                    <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full text-sm hover:bg-blue-700 transition">
                        Try the Demo
                    </button>
                </div>

                {/* Right Preview */}
                <div className="md:w-1/2 w-full">
                    <div className="w-full h-[260px] md:h-[340px] bg-white rounded-2xl shadow-lg flex items-center justify-center text-gray-400">
                        App / Video Preview
                    </div>
                </div>

            </div>
        </section>
    );
}
