const symptoms = [
    {
        title: "Understand Your Symptoms",
        desc: "Easily describe what you’re feeling without medical jargon.",
        icon: "🩺",
    },
    {
        title: "Clarity, Not Confusion",
        desc: "We break down symptoms into simple, easy-to-understand insights.",
        icon: "💡",
    },
    {
        title: "Know What Matters",
        desc: "Learn which symptoms need attention and which are usually mild.",
        icon: "📊",
    },
];


export default function Symptoms() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">

                {/* Heading */}
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                    Make Sense of Your{" "}
                    <span className="bg-gradient-to-r from-[#51C2BA] to-[#277FC2] bg-clip-text text-transparent">
                        Symptoms
                    </span>
                </h2>

                <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                    Get clear, calm explanations that help you understand what your body is telling you.
                </p>

                {/* Cards */}
                <div className="grid gap-6 mt-14 md:grid-cols-3">
                    {symptoms.map((item, i) => (
                        <div
                            key={i}
                            className="
                p-6 md:p-8
                rounded-2xl
                border border-gray-100
                bg-white
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-1
                transition-all duration-300
              "
                        >
                            {/* Icon */}
                            <div
                                className="
                  w-14 h-14 mx-auto mb-4
                  rounded-xl
                  bg-gradient-to-br from-[#51C2BA]/15 to-[#277FC2]/15
                  flex items-center justify-center
                  text-2xl
                "
                            >
                                {item.icon}
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
