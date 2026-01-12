const AboutUs = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-violet-900 dark:text-white">
            About ContestHub
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A next-generation contest platform where talent, technology, and
            transparency come together.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="font-semibold text-gray-900 dark:text-white">
                ContestHub
              </span>{" "}
              is a modern online contest platform created to discover, nurture,
              and reward talent across diverse domains. We provide a structured
              environment where individuals can participate in skill-based
              competitions with confidence and fairness.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our platform is built on the belief that talent should be judged
              objectively. By combining{" "}
              <span className="font-semibold">
                AI-powered evaluation systems
              </span>{" "}
              with expert insights, we ensure unbiased results, accurate
              rankings, and credible outcomes.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              ContestHub is more than a competition platform — it is a growing
              community where participants learn, improve, and gain recognition
              for their abilities on a trusted digital stage.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoCard
              title="What We Offer"
              text="Skill-based contests, real rewards, fair rankings, and global visibility for participants."
            />
            <InfoCard
              title="AI & Technology"
              text="Advanced AI tools enhance judging accuracy, speed, and consistency across contests."
            />
            <InfoCard
              title="Trust & Security"
              text="Secure data handling, transparent rules, and verified results for complete user confidence."
            />
            <InfoCard
              title="Community Focus"
              text="We encourage learning, collaboration, and growth through a supportive contest ecosystem."
            />
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard
            title="Our Mission"
            text="To empower individuals by providing fair, accessible, and technology-driven contests that recognize real talent."
          />
          <ValueCard
            title="Our Vision"
            text="To become a globally trusted platform where talent meets opportunity and innovation drives success."
          />
          <ValueCard
            title="Our Values"
            text="Fairness, transparency, innovation, security, and continuous growth for our community."
          />
        </div>
      </div>
    </section>
  );
};

/* Reusable Components */

const InfoCard = ({ title, text }) => (
  <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-sm">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
      {title}
    </h3>
    <p className="mt-3 text-gray-600 dark:text-gray-400">
      {text}
    </p>
  </div>
);

const ValueCard = ({ title, text }) => (
  <div className="p-8 rounded-2xl bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-sm">
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
      {title}
    </h3>
    <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
      {text}
    </p>
  </div>
);

export default AboutUs;

