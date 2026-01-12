import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is ContestHub?",
      answer:
        "ContestHub is a digital contest platform where individuals can participate in skill-based competitions, showcase their talent, and earn recognition through fair and transparent evaluation."
    },
    {
      question: "How do I join a contest?",
      answer:
        "You can join a contest by creating an account, browsing available contests, and registering for the contest that matches your interests and skills."
    },
    {
      question: "Are contests free to join?",
      answer:
        "Some contests are free, while others may require an entry fee depending on the prize pool and contest structure. All details are clearly mentioned before registration."
    },
    {
      question: "How are winners selected?",
      answer:
        "Winners are selected using a combination of AI-powered evaluation and expert review to ensure accuracy, fairness, and unbiased results."
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes. ContestHub follows industry-standard security practices to protect user data and does not share personal information without consent."
    },
    {
      question: "Can I participate in multiple contests?",
      answer:
        "Absolutely. Users can participate in multiple contests as long as they follow the rules and guidelines for each competition."
    },
    {
      question: "How do I receive prizes or rewards?",
      answer:
        "Prizes and rewards are distributed according to the contest terms. Winners are notified via email and through their dashboard with detailed instructions."
    },
    {
      question: "Who can I contact for support?",
      answer:
        "You can reach our support team through the Contact Us page for any questions, technical issues, or partnership inquiries."
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-violet-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Find answers to common questions about ContestHub and how our
            platform works.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ faq }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {faq.question}
        </h3>
        <span className="text-2xl text-indigo-600 dark:text-indigo-400">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-6 pb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

export default FAQ;
