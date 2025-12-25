import MainLayout from "../layouts/MainLayout";

export default function About() {
    return (
        <MainLayout>
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-6">

                    {/* Title */}
                    <h1 className="pt-10 text-3xl md:text-4xl font-bold mb-6">
                        About Wellness Solution
                    </h1>

                    <p className="text-gray-600 mb-10">
                        Wellness Solution is a health and wellness platform designed to help
                        individuals understand their symptoms and make informed decisions
                        about their health through guided, easy-to-use digital tools.
                    </p>

                    {/* Overview */}
                    <Section title="Who We Are">
                        <p>
                            Wellness Solution is your personal health guide, built to simplify
                            health awareness and support proactive wellness decisions.
                            Our platform enables users to explore symptoms, answer tailored
                            questions and receive meaningful health insights in a clear and
                            user-friendly manner.
                        </p>
                    </Section>

                    {/* Mission */}
                    <Section title="Our Mission">
                        <p>
                            Our mission is to make reliable health guidance accessible to
                            everyone by combining medical expertise, structured assessments,
                            and modern technology.
                        </p>

                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>Promote early health awareness</li>
                            <li>Encourage informed decision-making</li>
                            <li>Support healthier lifestyle choices</li>
                            <li>Deliver a simple and trustworthy user experience</li>
                        </ul>
                    </Section>

                    {/* How It Works */}
                    <Section title="How Wellness Solution Works">
                        <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                            <li>Select symptoms from a structured list</li>
                            <li>Answer relevant follow-up questions</li>
                            <li>Receive predicted health insights based on responses</li>
                            <li>Access diet and wellness recommendations</li>
                        </ol>

                        <p className="text-gray-600 mt-4">
                            Wellness Solution is designed to support health awareness and does
                            not replace professional medical consultation.
                        </p>
                    </Section>

                    {/* Medical Expertise */}
                    <Section title="Medical Expertise & Trusted Sources">
                        <p>
                            The medical content within Wellness Solution is developed and
                            managed under the supervision of a qualified medical professional
                            holding <strong>MBBS</strong> and <strong>MD</strong> degrees.
                        </p>

                        <SubTitle text="Trusted Medical References" />

                        <List
                            items={[
                                {
                                    title: "Nelson Textbook of Pediatrics",
                                    desc: "First South Asia Edition",
                                },
                                {
                                    title: "Harrison’s Principles of Internal Medicine",
                                    desc: "20th Edition",
                                },
                                {
                                    title: "Peer-Reviewed Research",
                                    desc: "Medical research papers and topic-specific publications",
                                },
                            ]}
                        />

                        <p className="text-gray-600 mt-4">
                            These sources ensure that the information provided is accurate,
                            reliable and aligned with established medical knowledge.
                        </p>
                    </Section>

                    {/* Key Features */}
                    <Section title="Key Features">
                        <List
                            items={[
                                {
                                    title: "Symptom-Based Guidance",
                                    desc: "Structured symptom selection with intelligent follow-up questions.",
                                },
                                {
                                    title: "Personalized Predictions",
                                    desc: "Health insights generated based on individual responses.",
                                },
                                {
                                    title: "Diet Recommendations",
                                    desc: "Customized dietary guidance to support overall wellness.",
                                },
                                {
                                    title: "Reliable Medical Sources",
                                    desc: "Information sourced from trusted medical literature.",
                                },
                                {
                                    title: "User-Friendly Interface",
                                    desc: "Clean and intuitive design for use anytime, anywhere.",
                                },
                            ]}
                        />
                    </Section>

                    {/* Commitment */}
                    <Section title="Our Commitment">
                        <p>
                            At Wellness Solution, we are committed to delivering a platform
                            that prioritizes accuracy, clarity, user trust and data security.
                            We continuously improve our platform to ensure it meets the needs
                            of users seeking reliable health information.
                        </p>
                    </Section>

                    {/* Closing */}
                    <Section title="Your Health Matters">
                        <p>
                            Wellness Solution empowers you with knowledge to better understand
                            your health and take confident steps toward improved well-being.
                            Start your journey today and take control of your health with
                            clarity and confidence.
                        </p>
                    </Section>

                </div>
            </section>
        </MainLayout>
    );
}

/* ------------------ Helper Components ------------------ */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">{title}</h2>
            <div className="text-gray-600 space-y-4">{children}</div>
        </div>
    );
}

function SubTitle({ text }: { text: string }) {
    return <h3 className="font-semibold mt-6 mb-2">{text}</h3>;
}

function List({
    items,
}: {
    items: { title: string; desc: string }[];
}) {
    return (
        <ul className="space-y-3">
            {items.map((item, i) => (
                <li key={i}>
                    <strong>{item.title}:</strong> {item.desc}
                </li>
            ))}
        </ul>
    );
}
