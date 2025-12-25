const levels = [
    {
        label: "Mild",
        desc: "Symptoms are usually manageable at home.",
        width: "w-1/4",
        gradient: "from-[#51C2BA]/70 to-[#51C2BA]",
    },
    {
        label: "Moderate",
        desc: "Monitor closely and take precautions.",
        width: "w-2/4",
        gradient: "from-[#51C2BA] to-[#277FC2]/80",
    },
    {
        label: "Concerning",
        desc: "Medical advice is recommended.",
        width: "w-3/4",
        gradient: "from-[#277FC2]/80 to-[#277FC2]",
    },
    {
        label: "Urgent",
        desc: "Seek immediate medical attention.",
        width: "w-full",
        gradient: "from-[#277FC2] to-[#1f5f96]",
    },
];

export default function SeverityLevels() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                        Understand Your Condition{" "}
                        <span className="bg-gradient-to-r from-[#51C2BA] to-[#277FC2] bg-clip-text text-transparent">
                            Without Fear
                        </span>
                    </h2>

                    <p className="text-gray-500 mt-4">
                        We categorize symptoms into clear severity levels so you know
                        what action to take.
                    </p>
                </div>

                {/* Levels */}
                <div className="space-y-8">
                    {levels.map((level, index) => (
                        <div key={index}>
                            {/* Label */}
                            <div className="flex justify-between mb-2 text-sm font-medium text-gray-700">
                                <span>{level.label}</span>
                            </div>

                            {/* Bar */}
                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className={`
                    h-full ${level.width}
                    bg-gradient-to-r ${level.gradient}
                    rounded-full
                    transition-all duration-700 ease-out
                  `}
                                />
                            </div>

                            {/* Description */}
                            <p className="text-gray-500 text-sm mt-2 max-w-md">
                                {level.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
