
import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
        About ContestHub
      </h2>

      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
        ContestHub is an online platform built to connect contest creators and
        participants in one seamless environment. We focus on simplicity,
        transparency, and a smooth user experience for everyone.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            For Creators
          </h3>
          <p className="text-gray-600">
            Create and manage contests easily, review submissions, and declare
            winners using a powerful dashboard.
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            For Participants
          </h3>
          <p className="text-gray-600">
            Discover exciting contests, submit your work, and track contest
            results all in one place.
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Our Promise
          </h3>
          <p className="text-gray-600">
            We ensure fair review processes, secure data handling, and a clean,
            user-friendly experience for every user.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
