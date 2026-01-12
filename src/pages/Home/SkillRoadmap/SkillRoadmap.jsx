import React from "react";

const SkillRoadmap = () => {
  const roadmap = [
    {
      level: "Beginner",
      description: "Start learning the basics and complete your first challenges.",
      badge: "🟢",
    },
    {
      level: "Intermediate",
      description:
        "Take on more complex contests and sharpen your skills for recognition.",
      badge: "🔵",
    },
    {
      level: "Pro",
      description:
        "Participate in high-level contests, earn badges, and showcase mastery.",
      badge: "🟣",
    },
  ];

  return (
    <section className="mt-30 p-8 bg-linear-to-r from-purple-100 to-indigo-100">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-violet-900 text-3xl md:text-4xl font-bold mb-4">
          Skill Roadmap & Level-Up
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Progress through levels, unlock badges, and showcase your skills
          while participating in exciting contests.
        </p>

        {/* Roadmap Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {roadmap.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{step.badge}</div>
              <h3 className=" text-gray-600 text-xl font-semibold mb-2">{step.level}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="mt-16">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold">
            Start Leveling Up
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default SkillRoadmap;
