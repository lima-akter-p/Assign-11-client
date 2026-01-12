import React from "react";

const FairnessTrust = () => {
  const features = [
    {
      title: "Admin Review Process",
      description:
        "All contests are carefully reviewed by our admin team to ensure quality and fairness.",
      icon: "🛡️",
    },
    {
      title: "Anti-Cheat & Plagiarism",
      description:
        "We use advanced tools to prevent cheating and plagiarism, keeping competitions honest.",
      icon: "🚫",
    },
    {
      title: "Transparent Scoring",
      description:
        "Scores and results are clearly displayed, making the evaluation process fully transparent.",
      icon: "📊",
    },
    {
      title: "Secure Role-Based Access",
      description:
        "Different dashboards for Admin, Creator, and User ensure privacy and proper access control.",
      icon: "🔒",
    },
  ];

  return (
    <section className="mt-30 p-8  bg-linear-to-r from-purple-100 to-indigo-100">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-violet-900 text-3xl md:text-4xl font-bold mb-4">
          Fairness & Trust Assurance
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          ContestHub is committed to maintaining a secure and transparent platform where everyone can compete fairly.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition"
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
            Learn More About Security
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default FairnessTrust;
