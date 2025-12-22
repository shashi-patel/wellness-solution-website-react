const levels = [
    {
        label: "Mild",
        desc: "Symptoms are usually manageable at home.",
        color: "bg-green-500",
        width: "w-1/4",
    },
    {
        label: "Moderate",
        desc: "Monitor closely and take precautions.",
        color: "bg-yellow-400",
        width: "w-2/4",
    },
    {
        label: "Concerning",
        desc: "Medical advice is recommended.",
        color: "bg-orange-500",
        width: "w-3/4",
    },
    {
        label: "Urgent",
        desc: "Seek immediate medical attention.",
        color: "bg-red-500",
        width: "w-full",
    },
];

export default function SeverityLevels() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold">
                        Understand Your Condition{" "}
                        <span className="text-blue-600">Without Fear</span>
                    </h2>
                    <p className="text-gray-500 mt-4">
                        We categorize symptoms into clear severity levels so you know
                        what action to take.
                    </p>
                </div>

                {/* Levels */}
                <div className="space-y-6">
                    {levels.map((level, index) => (
                        <div key={index}>
                            <div className="flex justify-between mb-1 text-sm font-medium">
                                <span>{level.label}</span>
                            </div>

                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className={`h-full ${level.color} ${level.width} rounded-full`}
                                />
                            </div>

                            <p className="text-gray-500 text-sm mt-2">
                                {level.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
