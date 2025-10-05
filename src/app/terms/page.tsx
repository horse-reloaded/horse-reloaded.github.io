
interface TermsItem {
    question: string;
    answer: string;
}

const date_of_effect = new Date("Fri Oct 03 2025");
const items: TermsItem[] = [
    {
        question: "Effective date",
        answer:
            "These Terms of Service (\"TOS\") are effective as of the date you start using Horse Reloaded and apply to all users of the project, website, binaries, cloud services, and any associated features. By using Horse Reloaded you agree to these Terms.",
    },
    {
        question: "Provided binaries",
        answer:
            "The source code for components that are released under an open-source license is available in the project repository. However, we distribute pre-built binaries and cloud services to make installation easier. Those distributed binaries and cloud components are covered by these Terms: you may not tamper with, modify, redistribute, or publish altered versions of the official binaries unless a specific license or distribution channel explicitly permits it.",
    },
    {
        question: "Donations and paid features",
        answer:
            "We accept donations and run optional paid/cloud features to help cover hosting and development costs. Donations may grant access to extra conveniences or cloud-hosted features for donors. Core functionality remains available in the open-source project unless otherwise stated in the repository/license.",
    },
    {
        question: "Prohibited actions — tampering, debugging, reverse engineering",
        answer:
            "You must not attempt to reverse-engineer, decompile, debug, tamper with, patch, bypass, or otherwise interfere with any protections, anti-abuse measures, or binaries we provide. This includes (but is not limited to) attaching debuggers, using binary patchers, altering runtime integrity checks, or creating tools that enable bypasses of protections. If you discover a vulnerability, please follow the responsible disclosure section below instead of attempting to exploit it.",
    },
    {
        question: "Responsible disclosure / bug reporting",
        answer:
            "If you discover a security issue, vulnerability, or bypass, do not publicize or exploit it. Instead, report it privately through the project's issue tracker, security contact, or the email address listed in the repository. Provide clear reproduction steps and any logs that help diagnose the issue. We will acknowledge reports and coordinate fixes. In some cases, we may provide a reward or recognition at our discretion; donations do not guarantee any specific reward.",
    },
    {
        question: "Enforcement — suspensions, bans, and account actions",
        answer:
            "We reserve the right to suspend, restrict, or ban any user, account, or device from using our binaries, cloud services, or community resources at any time, with or without notice, for violation of these Terms or for suspected abuse, cheating, tampering, or behavior that harms the project or its users. Donor status does not prevent enforcement actions. We are not required to provide prior notice or a detailed explanation for enforcement decisions.",
    },
    {
        question: "Redistribution & resale",
        answer:
            "You may redistribute or fork the open-source portions of the project only in accordance with the license listed in the repository. Distribution of official pre-built binaries, cloud credentials, donor-only resources, or paid components is prohibited unless we explicitly permit redistribution. Reselling access to donor/cloud features or keys is forbidden.",
    },
    {
        question: "No warranty and limitation of liability",
        answer:
            "Horse Reloaded (including source, binaries, cloud services, and any donated features) is provided \"as is\" without warranties of any kind, express or implied. Use at your own risk. Donor payments are non-refundable except approved by the project maintainers.",
    },
    {
        question: "Acceptable use",
        answer:
            "You must not use Horse Reloaded to facilitate cheating, fraud, harassment, or other abusive behavior outside of the project's documented and permitted use-cases. Do not use the project to interfere with other people's property or accounts, or to evade bans and protections on third-party services.",
    },
    {
        question: "Changes to the Terms",
        answer:
            "We may update these Terms from time to time. Updated Terms take effect immediately upon posting. Continued use of Horse Reloaded after a change constitutes acceptance of the new Terms. Where possible we will call out material changes in the project repository or release notes.",
    },
    {
        question: "Contact & additional questions",
        answer:
            "For questions about these Terms, donation refunds, responsible disclosure, or other policy issues, please contact us via the project's repository or the contact email listed in the project README.",
    },
];

export default function Terms() {
    return (
        <section id="faq" className="max-w-4xl mx-auto px-6 py-24">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-[20%] -translate-x-1/2 h-[50vh] w-[80vw] bg-radial from-white/10 to-transparent blur-2xl opacity-30 dark:opacity-15 animate-pulse-slow" />
            </div>

            <div className="text-center mb-14 space-y-5">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    Terms of Service
                </h2>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    By using Horse Reloaded, you agree to the following terms and conditions.
                </p>
            </div>
            <div className="text-center mb-14 space-y-5">
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    Last updated: {date_of_effect.toDateString()}
                </p>
            </div>
            <ol className="space-y-10 counter-reset faq">
                {items.map((item, idx) => (
                    <li key={idx} className="flex gap-5">
                        <div className="flex-none">
                            <div className="w-7 h-7 rounded-md text-[11px] font-medium grid place-items-center bg-white/8 text-white/70 ring-1 ring-white/10">
                                {idx + 1}
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-semibold mb-2 leading-snug">
                                {item.question}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-prose">
                                {item.answer}
                            </p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}
