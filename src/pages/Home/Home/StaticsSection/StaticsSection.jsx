import { useEffect, useState } from "react";

export default function StatisticsSection() {
  const stats = [
    { label: "Total Contests", value: 120 },
    { label: "Total Participants", value: 4500 },
    { label: "Active Users", value: 3200 },
    { label: "Total Prize Distributed", value: 25000 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, idx) => {
          const increment = Math.ceil(stats[idx].value /200); // animation speed
          if (val + increment >= stats[idx].value) return stats[idx].value;
          return val + increment;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-linear-to-r from-purple-100 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-purple-800 mb-10">
          📊 Our Growth in Numbers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition"
            >
              <h3 className="text-4xl font-bold text-purple-700 mb-2">
                {counts[idx].toLocaleString()}
              </h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-gray-700 text-lg max-w-xl mx-auto">
          Join thousands of users and participate in exciting contests. We
          reward talent, creativity, and skill — your journey starts here!
        </p>
      </div>
    </section>
  );
}
