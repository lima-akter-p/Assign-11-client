const Support = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Support Center
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Need help? Our support team is here to assist you with any issues,
            questions, or feedback related to ContestHub.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Left Info */}
          <div className="space-y-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              At <span className="font-semibold text-gray-900 dark:text-white">
                ContestHub
              </span>, we prioritize user satisfaction and platform reliability.
              Whether you are facing technical issues, contest-related questions,
              or account concerns, our dedicated support team is ready to help.
            </p>

            <div className="space-y-6">
              <SupportItem
                title="General Support"
                value="support@contesthub.com"
                description="For account, contest, or technical assistance"
              />
              <SupportItem
                title="Contest Queries"
                value="contests@contesthub.com"
                description="Questions related to rules, submissions, or results"
              />
              <SupportItem
                title="Business & Partnerships"
                value="business@contesthub.com"
                description="Collaboration and partnership inquiries"
              />
              <SupportItem
                title="Support Hours"
                value="Sunday – Thursday"
                description="10:00 AM – 6:00 PM (Local Time)"
              />
            </div>
          </div>

          {/* Right Help Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <HelpCard
              title="Account Issues"
              text="Login problems, profile updates, or account security concerns."
            />
            <HelpCard
              title="Contest Participation"
              text="Help with joining contests, submissions, and evaluation process."
            />
            <HelpCard
              title="Payments & Rewards"
              text="Questions about prizes, rewards, and distribution timelines."
            />
            <HelpCard
              title="Technical Support"
              text="Bug reports, performance issues, or feature-related feedback."
            />
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            For faster answers, you can also check our{" "}
            <a
              href="faq"
              className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            >
              Frequently Asked Questions (FAQ)
            </a>
            .
          </p>
        </div>

      </div>
    </section>
  );
};

/* Reusable Components */

const SupportItem = ({ title, value, description }) => (
  <div>
    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
      {title}
    </h4>
    <p className="text-indigo-600 dark:text-indigo-400 font-medium">
      {value}
    </p>
    <p className="text-gray-600 dark:text-gray-400 text-sm">
      {description}
    </p>
  </div>
);

const HelpCard = ({ title, text }) => (
  <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
      {title}
    </h3>
    <p className="mt-3 text-gray-600 dark:text-gray-400">
      {text}
    </p>
  </div>
);

export default Support;
