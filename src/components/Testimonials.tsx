import { useEffect, useRef, useState } from "react";

const testimonials = [
    { name: "Amit Sharma", role: "Professional", text: "Clear, calm, and very easy to use." },
    { name: "Priya Verma", role: "Fitness Enthusiast", text: "The step-by-step guidance is excellent." },
    { name: "Rahul Mehta", role: "Entrepreneur", text: "Simple UI with meaningful insights." },
    { name: "Sneha Patel", role: "Student", text: "Explains health conditions very clearly." },
    { name: "Vikas Singh", role: "Consultant", text: "Smooth experience and reassuring design." },
];

export default function Testimonials() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<number | null>(null);
    const [paused, setPaused] = useState(false);

    // 🔹 AUTO SCROLL (SMOOTH & RELIABLE)
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider || paused) return;

        intervalRef.current = window.setInterval(() => {
            slider.scrollLeft += 0.6; // ← breeze speed

            // Infinite loop reset
            if (slider.scrollLeft >= slider.scrollWidth / 2) {
                slider.scrollLeft = 0;
            }
        }, 16); // ~60fps

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [paused]);

    // 🔹 MANUAL SCROLL (BUTTONS)
    const scrollByAmount = (amount: number) => {
        if (!sliderRef.current) return;

        setPaused(true);
        sliderRef.current.scrollBy({
            left: amount,
            behavior: "smooth",
        });

        // Resume auto-scroll after interaction
        setTimeout(() => setPaused(false), 2500);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-bold">
                        What Users <span className="text-blue-600">Say</span>
                    </h2>
                    <p className="text-gray-500 mt-3">
                        Trusted by people who value clarity and confidence.
                    </p>
                </div>

                {/* Slider Wrapper */}
                <div className="relative">

                    {/* PREV BUTTON */}
                    <button
                        onClick={() => scrollByAmount(-320)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                       w-8 h-8 md:w-10 md:h-10
                       bg-white rounded-full shadow
                       flex items-center justify-center"
                    >
                        ‹
                    </button>

                    {/* NEXT BUTTON */}
                    <button
                        onClick={() => scrollByAmount(320)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                       w-8 h-8 md:w-10 md:h-10
                       bg-white rounded-full shadow
                       flex items-center justify-center"
                    >
                        ›
                    </button>

                    {/* SLIDER */}
                    <div
                        ref={sliderRef}
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                        className="
              flex gap-6 overflow-x-auto scrollbar-hide
              px-10 pb-4 w-full
              scroll-smooth
            "
                    >
                        {[...testimonials, ...testimonials].map((item, index) => (
                            <div
                                key={index}
                                className="min-w-[260px] md:min-w-[320px]
                           bg-white p-6 rounded-2xl
                           shadow-sm hover:shadow-md transition"
                            >
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    “{item.text}”
                                </p>
                                <div className="border-t pt-4">
                                    <p className="font-semibold text-sm">{item.name}</p>
                                    <p className="text-xs text-gray-500">{item.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
