import MainLayout from "../layouts/MainLayout";

export default function DeleteAccount() {
    return (
        <MainLayout>
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-6">

                    {/* Title */}
                    <h1 className="pt-10 text-3xl md:text-4xl font-bold mb-6">
                        Delete Account
                    </h1>

                    <p className="text-gray-600 mb-10">
                        You have the right to request the closure of your account and the
                        deletion of your personal information associated with Wellness
                        Solution.
                    </p>

                    {/* How to Delete */}
                    <Section title="How to Delete Your Account">
                        <p>
                            You can permanently delete your account directly from within the
                            Wellness Solution app by following the steps below:
                        </p>

                        <ol className="list-decimal pl-6 space-y-2 mt-4">
                            <li>Sign in to the account you want to delete using the app.</li>
                            <li>Go to the <strong>Settings</strong> section.</li>
                            <li>Scroll down and select <strong>Delete Account</strong>.</li>
                            <li>Confirm your action by choosing <strong>Yes</strong>.</li>
                        </ol>
                    </Section>

                    {/* Confirmation */}
                    <Section title="Confirmation & Data Deletion">
                        <p>
                            Once you confirm the deletion, your account will be permanently
                            closed, and all associated personal information will be removed
                            from our systems.
                        </p>

                        <p>
                            This action is irreversible. After your account is deleted, it
                            cannot be recovered.
                        </p>
                    </Section>

                    {/* Important Note */}
                    <Section title="Important Note">
                        <p>
                            After your account is closed, all your personal information and
                            health-related data will be permanently deleted, including:
                        </p>

                        <ul className="list-disc pl-6 space-y-2 mt-3">
                            <li>Account details</li>
                            <li>Health assessments and tracking data</li>
                            <li>Any other information associated with your account</li>
                        </ul>
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
