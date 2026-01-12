import React from "react";

const PersonalizedExperience = () => {
  const features = [
    {
      title: "Personalized Recommendations",
      description:
        "Get contests tailored to your skills, interests, and previous participation.",
      icon: "🤖",
    },
    {
      title: "AI-Powered Suggestions",
      description:
        "Our AI analyzes your activity to suggest contests where you can excel.",
      icon: "🧠",
    },
    {
      title: "Skill-Based Feed",
      description:
        "Your dashboard displays contests that match your level and skill progression.",
      icon: "📈",
    },
  ];

  return (
    <section className="mt-30 p-8 bg-linear-to-r from-purple-100 to-indigo-100">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className=" text-violet-900 text-3xl md:text-4xl font-bold mb-4">
          Personalized Experience
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          ContestHub uses smart AI features to help you discover contests that fit your skills and goals.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-gray-900 text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="mt-16">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold">
            Explore Your Personalized Contests
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default PersonalizedExperience;

