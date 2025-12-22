const symptoms = [
    { title: "Select Symptoms", desc: "Choose symptoms easily", icon: "🩺" },
    { title: "Answer Questions", desc: "Quick follow-ups", icon: "📝" },
    { title: "Get Insights", desc: "Instant health guidance", icon: "📊" },
];

export default function Symptoms() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">

                <h2 className="text-2xl md:text-4xl font-bold">
                    Your Symptoms,{" "}
                    <span className="text-blue-600">Clearly Explained</span>
                </h2>

                <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                    Our smart symptom checker helps you understand your health step by step.
                </p>

                <div className="grid gap-6 mt-12 md:grid-cols-3">
                    {symptoms.map((item, i) => (
                        <div
                            key={i}
                            className="p-6 md:p-8 rounded-2xl border shadow-sm hover:shadow-md transition"
                        >
                            <div className="text-3xl mb-3">{item.icon}</div>
                            <h3 className="font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
