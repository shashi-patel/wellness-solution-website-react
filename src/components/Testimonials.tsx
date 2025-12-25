import { useEffect, useRef, useState } from "react";

const testimonials = [
    {
        name: "Shashikant Patel",
        role: "Startup Founder",
        text: "The structured questions and clarity of insights make this app genuinely useful.",
    },
    {
        name: "Amit Sharma",
        role: "Professional",
        text: "Clear, calm and very easy to use.",
    },
    {
        name: "Priya Verma",
        role: "Fitness Enthusiast",
        text: "The step-by-step guidance is excellent.",
    },
    {
        name: "Rahul Mehta",
        role: "Entrepreneur",
        text: "Simple UI with meaningful insights.",
    },
    {
        name: "Sneha Patel",
        role: "Student",
        text: "Explains health conditions very clearly.",
    },
    {
        name: "Vikas Singh",
        role: "Consultant",
        text: "Smooth experience and reassuring design.",
    },
    {
        name: "Neha Kapoor",
        role: "Working Professional",
        text: "Very intuitive and easy to follow. It helps you understand symptoms without feeling overwhelmed.",
    },
    {
        name: "Anjali Desai",
        role: "Healthcare Student",
        text: "Well-presented information with a clean design. Feels trustworthy and thoughtfully built.",
    },
];

export default function Testimonials() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<number | null>(null);
    const [paused, setPaused] = useState(false);

    // 🔹 Smooth auto-scroll
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider || paused) return;

        intervalRef.current = window.setInterval(() => {
            slider.scrollLeft += 0.6;

            if (slider.scrollLeft >= slider.scrollWidth / 2) {
                slider.scrollLeft = 0;
            }
        }, 16);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [paused]);

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-14">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                    What Users{" "}
                    <span className="bg-gradient-to-r from-[#51C2BA] to-[#277FC2] bg-clip-text text-transparent">
                        Say
                    </span>
                </h2>

                <p className="text-gray-500 mt-3">
                    Trusted by people who value clarity and confidence.
                </p>
            </div>

            {/* Full-width auto-scroll */}
            <div
                ref={sliderRef}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                className="
          flex gap-6
          overflow-x-auto
          pb-10
          w-full
          scrollbar-hide
          scroll-smooth
          [perspective:1200px]
        "
            >
                {[...testimonials, ...testimonials].map((item, index) => {
                    const initials = item.name
                        .split(" ")
                        .map(word => word[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase();

                    return (
                        <div
                            key={index}
                            className="
                min-w-[280px] md:min-w-[340px]
                p-7 rounded-2xl
                bg-gradient-to-b from-white to-[#51C2BA]/10
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                transition-all duration-300 ease-out
                transform-gpu
                hover:-translate-y-1.5
                hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]
                hover:rotateX-[2deg]
                hover:rotateY-[-1deg]
                flex flex-col
              "
                        >
                            {/* Quote */}
                            <p className="text-gray-700 text-sm leading-relaxed mb-6 relative">
                                <span className="absolute -top-4 -left-2 text-4xl text-[#51C2BA]/20 select-none">
                                    “
                                </span>
                                {item.text}
                            </p>

                            {/* User */}
                            <div className="mt-auto flex items-center gap-4 border-t border-[#51C2BA]/20 pt-4">
                                {/* Avatar */}
                                <div
                                    className="
                    w-11 h-11 rounded-full
                    bg-gradient-to-br from-[#51C2BA] to-[#277FC2]
                    text-white
                    flex items-center justify-center
                    font-semibold tracking-wide
                  "
                                >
                                    {initials}
                                </div>

                                {/* Name */}
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
