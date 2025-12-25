import MainLayout from "../layouts/MainLayout";

export default function PrivacyPolicy() {
    return (
        <MainLayout>
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-6">

                    {/* Title */}
                    <h1 className="pt-10 text-3xl md:text-4xl font-bold mb-6">
                        Privacy Policy
                    </h1>

                    <p className="text-gray-600 mb-10">
                        This Privacy Policy explains what information is collected about you,
                        how we collect it and the purposes for which it is used. Wellness
                        Solution is committed to protecting your privacy and personal data.
                    </p>

                    {/* Overview */}
                    <Section title="Privacy Policy Overview">
                        <p>
                            We do not share any personal information with third parties.
                            Please take a moment to familiarize yourself with our privacy
                            practices and feel free to contact us if you have any questions
                            or concerns.
                        </p>
                    </Section>

                    {/* Personal Information */}
                    <Section title="Personal Information">
                        <SubTitle text="What We Collect and Why" />

                        <List
                            items={[
                                {
                                    title: "Account Management",
                                    desc: "We collect details such as your name, email address and mobile number to create and manage your account, including login and registration.",
                                },
                                {
                                    title: "Health Assessment",
                                    desc: "We collect health-related information such as age, weight and other relevant details to provide personalized health assessments and recommendations.",
                                },
                            ]}
                        />

                        <SubTitle text="How We Use Your Information" />

                        <List
                            items={[
                                {
                                    title: "Account Management",
                                    desc: "Used to create and manage your user profile and communicate account-related notifications, updates or security alerts.",
                                },
                                {
                                    title: "Health Assessments and Recommendations",
                                    desc: "Used exclusively to generate personalized health insights and improve your experience within the app.",
                                },
                            ]}
                        />
                    </Section>

                    {/* Non-Personal Information */}
                    <Section title="Non-Personal Information">
                        <SubTitle text="What We Collect" />

                        <List
                            items={[
                                {
                                    title: "Device ID",
                                    desc: "Collected to ensure a seamless app experience across devices.",
                                },
                                {
                                    title: "OneSignal Tokens",
                                    desc: "Used to send important notifications and alerts.",
                                },
                                {
                                    title: "Operating System Information",
                                    desc: "Collected to optimize app performance and compatibility.",
                                },
                            ]}
                        />

                        <SubTitle text="How We Use This Information" />
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>Ensure compatibility with devices and operating systems</li>
                            <li>Facilitate app notifications</li>
                            <li>Improve overall app performance</li>
                        </ul>
                    </Section>

                    {/* Permissions */}
                    <Section title="Permissions Used in This Application">
                        <Permission
                            title="Camera Permission"
                            reason="To capture or update your profile image."
                            handling="Camera access is only used when you choose to take or update your profile photo. Images are stored securely and never shared with third parties."
                        />

                        <Permission
                            title="Internet Permission"
                            reason="To fetch data from our servers and enable real-time functionality."
                            handling="All data transmitted is encrypted and used only to ensure proper app functionality."
                        />

                        <Permission
                            title="Notification Permission"
                            reason="To send important system alerts and updates."
                            handling="Notifications are not promotional and are sent only for essential updates."
                        />
                    </Section>

                    {/* Data Security */}
                    <Section title="Data Security">
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>Encrypted data transmission using strong protocols</li>
                            <li>Strict access controls for authorized personnel only</li>
                            <li>OTP-based authentication for enhanced security</li>
                            <li>Secure storage of personal data</li>
                            <li>Regular security audits</li>
                        </ul>
                    </Section>

                    {/* Delete Account */}
                    <Section title="Delete Account">
                        <p className="text-gray-600 mb-4">
                            You can permanently delete your account directly from the app.
                        </p>

                        <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                            <li>Go to the Settings page in the app</li>
                            <li>Select the Delete Account option</li>
                            <li>Provide a reason for deletion</li>
                            <li>Confirm account deletion</li>
                        </ol>

                        <p className="text-gray-600 mt-4">
                            Once deleted, all personal and non-personal data will be permanently
                            removed from our systems. This action is irreversible.
                        </p>
                    </Section>

                    {/* Updates */}
                    <Section title="Policy Updates & Contact">
                        <p className="text-gray-600">
                            We may update this Privacy Policy from time to time. When significant
                            changes occur, we will notify you via email and in-app notifications.
                        </p>

                        <p className="text-gray-600 mt-4">
                            If you have any questions or concerns regarding this Privacy Policy,
                            please contact us. Your privacy is important to us.
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

function Permission({
    title,
    reason,
    handling,
}: {
    title: string;
    reason: string;
    handling: string;
}) {
    return (
        <div className="mb-6">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-gray-600">
                <strong>Why we request:</strong> {reason}
            </p>
            <p className="text-gray-600 mt-2">
                <strong>How we handle data:</strong> {handling}
            </p>
        </div>
    );
}
