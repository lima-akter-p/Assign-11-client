const PrivacyPolicy = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Your privacy matters to us. This policy explains how ContestHub
            collects, uses, and protects your information.
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
              <span className="font-semibold">ContestHub</span> is committed to
              protecting your privacy. By using our platform, you agree to the
              collection and use of information in accordance with this Privacy
              Policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              2. Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, email
              address, account details, and contest-related submissions. We may
              also collect non-personal data like browser type and usage
              statistics to improve our services.
            </p>
          </div>

          {/* How We Use Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              3. How We Use Your Information
            </h2>
            <p>
              Your information is used to manage user accounts, operate contests,
              communicate updates, distribute rewards, and enhance platform
              performance and security.
            </p>
          </div>

          {/* Data Sharing */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              4. Data Sharing & Disclosure
            </h2>
            <p>
              ContestHub does not sell or rent your personal data to third
              parties. We may share information only when required by law or
              necessary to protect the integrity and security of the platform.
            </p>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              5. Data Security
            </h2>
            <p>
              We use industry-standard security measures to protect your data
              against unauthorized access, alteration, or disclosure. However,
              no online system is completely secure.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              6. Cookies & Tracking
            </h2>
            <p>
              ContestHub may use cookies and similar technologies to enhance user
              experience, analyze usage patterns, and improve platform
              functionality.
            </p>
          </div>

          {/* User Rights */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              7. Your Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal
              information. You may also request information about how your data
              is processed by contacting us.
            </p>
          </div>

          {/* Policy Updates */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              8. Changes to This Policy
            </h2>
            <p>
              ContestHub reserves the right to update this Privacy Policy at any
              time. Continued use of the platform indicates acceptance of any
              changes.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              9. Contact Us
            </h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please
              contact us at{" "}
              <span className="font-medium">support@contesthub.com</span>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
