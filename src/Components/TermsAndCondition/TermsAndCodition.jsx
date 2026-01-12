const TermsAndConditions = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            These terms govern your use of ContestHub. By accessing our platform,
            you agree to comply with them.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">

          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              1. Introduction
            </h2>
            <p>
              Welcome to <span className="font-semibold">ContestHub</span>.
              ContestHub is an online platform that hosts skill-based contests.
              By using our website or services, you agree to be bound by these
              Terms & Conditions.
            </p>
          </div>

          {/* Eligibility */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              2. Eligibility
            </h2>
            <p>
              Users must provide accurate and complete information during
              registration. You are responsible for ensuring that your
              participation complies with all applicable laws and regulations.
            </p>
          </div>

          {/* User Responsibilities */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              3. User Responsibilities
            </h2>
            <p>
              Users must follow all contest rules, submit original work, and
              behave respectfully within the community. Any form of cheating,
              plagiarism, or misuse of the platform is strictly prohibited.
            </p>
          </div>

          {/* Contests & Evaluation */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              4. Contests & Evaluation
            </h2>
            <p>
              ContestHub uses a combination of AI-powered systems and human
              review to evaluate submissions. Decisions made by ContestHub are
              final and binding to ensure fairness and transparency.
            </p>
          </div>

          {/* Rewards */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              5. Rewards & Prizes
            </h2>
            <p>
              Rewards and prizes are distributed according to the specific
              contest terms. ContestHub reserves the right to withhold rewards
              in cases of rule violations or fraudulent activity.
            </p>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              6. Intellectual Property
            </h2>
            <p>
              All content, branding, and platform features belong to ContestHub.
              Users retain ownership of their submissions but grant ContestHub
              permission to display them for contest and promotional purposes.
            </p>
          </div>

          {/* Termination */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              7. Account Termination
            </h2>
            <p>
              ContestHub may suspend or terminate accounts that violate these
              terms, misuse the platform, or engage in harmful behavior without
              prior notice.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              8. Limitation of Liability
            </h2>
            <p>
              ContestHub is not responsible for any direct or indirect losses
              resulting from participation in contests or use of the platform.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              9. Changes to Terms
            </h2>
            <p>
              We reserve the right to update these Terms & Conditions at any
              time. Continued use of ContestHub indicates acceptance of any
              changes.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              10. Contact Information
            </h2>
            <p>
              If you have any questions regarding these terms, please contact us
              at <span className="font-medium">support@contesthub.com</span>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
