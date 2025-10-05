
interface PrivacyItem {
    question: string;
    answer: string;
}

const date_of_effect = new Date("Fri Oct 03 2025");
const items: PrivacyItem[] = [
    {
        question: "What information do we collect?",
        answer: "We only store publicly available information such as your Discord username and ID, and in-game username for presence tracking. If you make a donation, we also store your email for identification purposes."
    },
    {
        question: "Why do we store this information?",
        answer: "Your Discord ID and in-game username are used to provide the service and track presence. If you have made a donation, your email is stored to identify you as a donor."
    },
    {
        question: "Can I delete my data?",
        answer: "Yes! You have the right to delete all your data at any time, just open a support ticket. This will remove all information we have stored about you."
    },
    {
        question: "Is my information shared with others?",
        answer: "No. We do not share your information with third parties. Your data is only used internally to provide the services of Horse Reloaded."
    },
];

export default function Privacy() {
    return (
        <section id="faq" className="max-w-4xl mx-auto px-6 py-24">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-[20%] -translate-x-1/2 h-[50vh] w-[80vw] bg-radial from-white/10 to-transparent blur-2xl opacity-30 dark:opacity-15 animate-pulse-slow" />
            </div>

            <div className="text-center mb-14 space-y-5">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    Privacy Policy
                </h2>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    By using Horse Reloaded, you agree to our Privacy Policy.
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
