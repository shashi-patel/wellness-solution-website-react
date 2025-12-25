import MainLayout from "../layouts/MainLayout";

export default function Contact() {
    return (
        <MainLayout>
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-6">

                    {/* Title */}
                    <h1 className="pt-10 text-3xl md:text-4xl font-bold mb-6">
                        Contact Us
                    </h1>

                    <p className="text-gray-600 mb-10">
                        We’re here to help. If you have any questions, feedback or concerns
                        about Wellness Solution, feel free to reach out to us.
                    </p>

                    {/* Contact Info */}
                    <Section title="Get in Touch">
                        <p>
                            For any inquiries related to the app, health assessments or general
                            support, please contact us via email. Our team will review your
                            message and get back to you as soon as possible.
                        </p>

                        <div className="mt-6">
                            <a
                                href="mailto:wellnesssolution.app@gmail.com"
                                className="
                  inline-flex items-center
                  text-blue-600 font-medium
                  hover:underline
                "
                            >
                                wellnesssolution.app@gmail.com
                            </a>
                        </div>
                    </Section>

                    {/* Support Note */}
                    <Section title="Support & Assistance">
                        <p>
                            Please include relevant details in your email so we can assist you
                            efficiently. If your query is related to your account, kindly use
                            the email address associated with your Wellness Solution account.
                        </p>

                        <p>
                            We aim to respond to all inquiries within a reasonable timeframe.
                            Thank you for your patience and for choosing Wellness Solution.
                        </p>
                    </Section>

                </div>
            </section>
        </MainLayout>
    );
}

/* ------------------ Helper Component ------------------ */

function Section({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
                {title}
            </h2>
            <div className="text-gray-600 space-y-4">
                {children}
            </div>
        </div>
    );
}
