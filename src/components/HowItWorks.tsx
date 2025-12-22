const steps = [
    {
        step: "01",
        title: "Choose Your Symptoms",
        desc: "Select symptoms from a simple and guided list.",
    },
    {
        step: "02",
        title: "Answer Smart Questions",
        desc: "Short questions help us understand your condition better.",
    },
    {
        step: "03",
        title: "Get Health Insights",
        desc: "Instant insights with clear severity levels.",
    },
    {
        step: "04",
        title: "Take Next Steps",
        desc: "Get guidance on what to do next or when to seek help.",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl font-bold">
                        How It <span className="text-blue-600">Works</span>
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Understand your health in just a few simple steps.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid gap-8 mt-14 md:grid-cols-4">
                    {steps.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl border shadow-sm text-center hover:shadow-md transition"
                        >
                            <div className="text-blue-600 font-bold text-3xl mb-4">
                                {item.step}
                            </div>
                            <h3 className="font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
