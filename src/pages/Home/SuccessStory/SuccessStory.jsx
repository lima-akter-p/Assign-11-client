import React from "react";

const CreatorSuccessStories = () => {
  const creators = [
   
  {
    name: "Rahim Uddin",
    role: "Photography Mentor",
    contests: 7,
    participants: 1120,
    quote:
      "ContestHub gave my photography contests global exposure and serious talent.",
  },
  {
    name: "Sadia Islam",
    role: "Digital Marketer",
    contests: 4,
    participants: 640,
    quote:
      "I was amazed by the quality of submissions and the smooth judging process.",
  },
  {
    name: "Arif Hasan",
    role: "Competitive Programmer",
    contests: 9,
    participants: 1500,
    quote:
      "Hosting coding contests here is effortless, and the community is highly skilled.",
  },
  {
    name: "Mahi Chowdhury",
    role: "Video Editor",
    contests: 3,
    participants: 520,
    quote:
      "My video challenges gained massive traction thanks to ContestHub’s reach.",
  },
  {
    name: "Imran Khan",
    role: "Creative Writer",
    contests: 6,
    participants: 790,
    quote:
      "ContestHub turned my writing contests into a vibrant creative community.",
  },
  {
    name: "Farzana Akter",
    role: "AI Prompt Engineer",
    contests: 5,
    participants: 910,
    quote:
      "The AI-friendly contest features made it easy to run modern challenges.",
  }

  ];

  return (
    <section className="mt-30 p-8  bg-linear-to-r from-purple-100 to-indigo-100">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className=" text-violet-900 text-3xl md:text-4xl font-bold mb-4">
            Creator Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how creators are hosting impactful contests and building
            thriving communities on ContestHub.
          </p>
        </div>

        {/* Creator Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="mb-4">
                <h3 className="text-gray-600 text-lg font-semibold">{creator.name}</h3>
                <p className="text-sm text-gray-500">{creator.role}</p>
              </div>

              <div className="flex justify-between text-sm mb-4">
                <p>
                  <span className="text-gray-600 font-semibold">{creator.contests}</span>{" "}
                 <span className="text-gray-600"> Contests</span>
                </p>
                <p>
                  <span className="text-gray-600 font-semibold">
                    {creator.participants}
                  </span>{" "}
                  <span className="text-gray-600">Participants</span>
                </p>
              </div>

              <blockquote className="text-gray-600 italic mb-6">
                “{creator.quote}”
              </blockquote>

              {/* <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium">
                View Creator Profile
              </button> */}
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">
            Want to Host Your Own Contest?
          </h3>
          <p className="text-gray-600 mb-6">
            Join hundreds of creators and start building your audience today.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold">
            Start Hosting Contests
          </button>
        </div> */}

      </div>
    </section>
  );
};

export default CreatorSuccessStories;
