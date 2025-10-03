interface FAQItem {
  question: string;
  answer: string;
}

const items: FAQItem[] = [
  {
    question: "Why cant i see the source code?",
    answer:
      "The underground modding community is a bit toxic, and leaving the source code open, would allow P2C mod menus to easily bypass the protections just to stay on top.",
  },
  {
    question: "What is this?",
    answer:
      "Horse Reloaded is a fork of YimMenu/HorseMenu with added features and bug fixes, but most importantly, greater protections against P2C (paid to cheat) mod menus.",
  },
  {
    question: "Why use this Mod?",
    answer:
      "Because the original project is no longer maintained, and I wanted to share my work with the community.",
  },
  {
    question: "Is this Mod paid?",
    answer:
      "Partially. This project includes cloud features that requires a server to run, it also motivates development and the donations help cover costs. No important features are locked behind a paywall and you can still use the menu for free with all the original features and more.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="max-w-4xl mx-auto px-6 py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-[20%] -translate-x-1/2 h-[50vh] w-[80vw] bg-radial from-white/10 to-transparent blur-2xl opacity-30 dark:opacity-15 animate-pulse-slow" />
      </div>

      <div className="text-center mb-14 space-y-5">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Common Questions & Answers
        </h2>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Find the essential details about the project, how it works, and why
          you might want to use it.
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
