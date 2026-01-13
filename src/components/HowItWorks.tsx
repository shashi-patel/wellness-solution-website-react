const steps = [
    {
        step: "01",
        title: "Input Symptoms",
        desc: "Select relevant symptoms using a guided and structured flow.",
    },
    {
        step: "02",
        title: "Dynamic Questioning",
        desc: "Adaptive questions narrow down possible conditions accurately.",
    },
    {
        step: "03",
        title: "Severity Analysis",
        desc: "Your responses are analyzed to determine symptom severity.",
    },
    {
        step: "04",
        title: "Actionable Guidance",
        desc: "Receive clear next steps, from self-care to seeking medical help.",
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
                        A simple, intelligent process designed to give you reliable health guidance.
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
