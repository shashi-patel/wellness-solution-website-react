import MainLayout from "../layouts/MainLayout";

export default function MedicalSources() {
    return (
        <MainLayout>
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-6">

                    {/* Title */}
                    <h1 className="pt-10 text-3xl md:text-4xl font-bold mb-6">
                        Medical Sources & Oversight
                    </h1>

                    <p className="text-gray-600 mb-10">
                        Wellness Solution is built on reliable medical knowledge. Our health
                        assessments, questions, and guidance are derived from trusted
                        medical sources and reviewed under professional medical oversight
                        to ensure accuracy and reliability.
                    </p>

                    {/* Overview */}
                    <Section title="Medical Foundation">
                        <p>
                            The health assessments within this application are based on
                            established medical literature and peer-reviewed sources.
                            Questions and responses are designed to reflect current medical
                            understanding and best practices.
                        </p>
                    </Section>

                    {/* Oversight */}
                    <Section title="Medical Oversight">
                        <p>
                            We take your health seriously. All medical content within
                            Wellness Solution — including symptom-based questions and health
                            insights — is managed and reviewed by an experienced medical
                            professional.
                        </p>

                        <p>
                            Oversight is provided by a qualified doctor holding degrees in
                            <strong> MBBS</strong> and <strong>MD Pediatrics</strong>, ensuring
                            that the information presented is accurate, reliable, and aligned
                            with current medical research.
                        </p>

                        <p>
                            This review process helps maintain a high standard of medical
                            integrity across the platform.
                        </p>
                    </Section>

                    {/* Books */}
                    <Section title="Medical Textbooks Referenced">
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
                            ]}
                        />
                    </Section>

                    {/* Journals */}
                    <Section title="Medical Journals & Articles">
                        <p className="mb-4">
                            In addition to standard medical textbooks, our content references
                            peer-reviewed medical journals and authoritative clinical
                            resources, including:
                        </p>

                        <ul className="list-disc pl-6 text-gray-600 space-y-2 break-all">
                            <li><ExternalLink url="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8727714/" /></li>
                            <li><ExternalLink url="https://www.ncbi.nlm.nih.gov/books/NBK532961/" /></li>
                            <li><ExternalLink url="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7119329/" /></li>
                            <li><ExternalLink url="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1764079/" /></li>
                            <li><ExternalLink url="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3098742/" /></li>
                            <li><ExternalLink url="https://www.ncbi.nlm.nih.gov/books/NBK470195/" /></li>
                            <li><ExternalLink url="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6751349/" /></li>
                            <li><ExternalLink url="https://www.ncbi.nlm.nih.gov/books/NBK536940/" /></li>
                            <li><ExternalLink url="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7371062/" /></li>
                            <li><ExternalLink url="https://www.aafp.org/pubs/afp/issues/2011/0215/p409.html" /></li>
                            <li><ExternalLink url="https://www.aafp.org/pubs/afp/issues/2024/0200/acute-uncomplicated-utis-adults.html" /></li>
                            <li><ExternalLink url="https://emedicine.medscape.com/article/302460-overview" /></li>
                            <li><ExternalLink url="https://emedicine.medscape.com/article/967822-overview" /></li>
                            <li><ExternalLink url="https://emedicine.medscape.com/article/234240-overview" /></li>
                            <li><ExternalLink url="https://emedicine.medscape.com/article/964131-overview" /></li>
                            <li><ExternalLink url="https://www.medscape.com/viewarticle/586757" /></li>
                            <li><ExternalLink url="https://emedicine.medscape.com/article/969643-treatment" /></li>
                            <li><ExternalLink url="https://emedicine.medscape.com/article/336054-overview" /></li>
                            <li><ExternalLink url="https://emedicine.medscape.com/article/869733-overview" /></li>
                            <li><ExternalLink url="https://emedicine.medscape.com/article/293402-overview" /></li>
                            <li><ExternalLink url="https://emedicine.medscape.com/article/985140-overview" /></li>
                            <li><ExternalLink url="https://emedicine.medscape.com/article/775277-overview" /></li>
                        </ul>
                    </Section>

                    {/* Disclaimer */}
                    <Section title="Important Notice">
                        <p>
                            While Wellness Solution is built using trusted medical sources and
                            professional oversight, the information provided is intended for
                            health awareness and educational purposes only.
                        </p>

                        <p>
                            The platform does not replace professional medical diagnosis,
                            treatment or consultation. Users are encouraged to seek advice
                            from qualified healthcare professionals when needed.
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

function ExternalLink({ url }: { url: string }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
        >
            {url}
        </a>
    );
}