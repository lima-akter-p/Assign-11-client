import React from "react";

const GlobalCommunity = () => {
  const stats = [
    { label: "Countries Participating", value: "42" },
    { label: "Active Participants", value: "12,450" },
    { label: "Supported Languages", value: "8" },
    { label: "Contests Hosted", value: "320" },
  ];

  return (
    <section className="mt-20 p-8 ">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className=" text-violet-900 text-3xl md:text-4xl font-bold mb-4">
          Our Global Community
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          ContestHub connects creators and participants from all over the world, fostering diversity, creativity, and collaboration.
        </p>

        {/* World Map Placeholder */}
        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-4xl h-64 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-400 text-xl font-semibold">
            🌍 World Map Placeholder
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <p className="text-3xl font-bold text-indigo-600 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="mt-16">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold">
            Join the Global Community
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default GlobalCommunity;
