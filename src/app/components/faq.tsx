interface FAQItem {
  question: string;
  answer: string;
}

const items: FAQItem[] = [
  {
    question: "Why is not open source?",
    answer:
      "If we make it open source other modders could try to bypass protections and potentially harm users.",
  },
  {
    question: "What is this?",
    answer:
      "A fork of HorseMenu with improvements and customizations tailored for stability and protections.",
  },
  {
    question: "Why use this Mod?",
    answer:
      "Enhanced crash protections and refinements give you a smoother, safer gameplay experience.",
  },
  {
    question: "Is this Mod paid?",
    answer:
      "We offer a free version with the same crash protections plus paid tiers that unlock extra features.",
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
