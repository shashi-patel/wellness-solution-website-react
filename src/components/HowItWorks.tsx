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
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                        How It{" "}
                        <span className="bg-gradient-to-r from-[#51C2BA] to-[#277FC2] bg-clip-text text-transparent">
                            Works
                        </span>
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
                            className="
                bg-white p-6 rounded-2xl
                border border-gray-100
                text-center
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-1
                transition-all duration-300
              "
                        >
                            {/* Step Number */}
                            <div
                                className="
                  w-14 h-14 mx-auto mb-4
                  rounded-full
                  bg-gradient-to-br from-[#51C2BA]/15 to-[#277FC2]/15
                  flex items-center justify-center
                  font-bold text-lg
                  text-[#277FC2]
                "
                            >
                                {item.step}
                            </div>

                            <h3 className="font-semibold text-gray-900 mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
