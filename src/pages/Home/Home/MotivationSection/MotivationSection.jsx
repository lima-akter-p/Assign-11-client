import { useEffect, useState } from "react";

export default function MotivationSection() {
  const quotes = [
    { text: "Every champion was once a beginner.", author: "ContestHub" },
    {
      text: "Participate, believe, and achieve your dreams!",
      author: "ContestHub",
    },
    {
      text: "Winners never quit, and quitters never win.",
      author: "ContestHub",
    },
    {
      text: "Your talent is your superpower — unleash it.",
      author: "ContestHub",
    },
    {
      text: "Every contest is a new opportunity to shine.",
      author: "ContestHub",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-change quote every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section
      className="
  py-16 
  bg-linear-to-r 
  from-purple-100 to-indigo-100 
  dark:from-gray-900 dark:to-gray-800
  text-center px-4
"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="
      text-4xl font-extrabold 
      text-purple-800 
      dark:text-purple-300 
      mb-8
    "
        >
          💡 Inspiration
        </h2>

        <div className="relative h-40">
          {quotes.map((quote, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <p
                className="
            text-xl md:text-2xl font-semibold 
            text-gray-800 
            dark:text-gray-100
          "
              >
                "{quote.text}"
              </p>
              <p
                className="
            mt-4 
            text-gray-600 
            dark:text-gray-400 
            font-medium
          "
              >
                — {quote.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* <section className="py-16 bg-liner-to-r from-purple-100 to-indigo-100 text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-purple-800 mb-8">
          💡 Inspiration
        </h2>

        <div className="relative h-40">
          {quotes.map((quote, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-xl md:text-2xl font-semibold text-gray-800">
                "{quote.text}"
              </p>
              <p className="mt-4 text-gray-600 font-medium">
                — {quote.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section> */
}
