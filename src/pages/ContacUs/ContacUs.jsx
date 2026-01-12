const ContactUs = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-violet-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Have questions, feedback, or partnership inquiries?  
            Our team is here to help you.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left Info */}
          <div className="space-y-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              At <span className="font-semibold text-gray-900 dark:text-white">
                ContestHub
              </span>, we value clear communication and user support. Whether
              you need help with contests, account issues, or collaboration
              opportunities, feel free to reach out to us anytime.
            </p>

            <div className="space-y-5">
              <ContactItem
                title="Email Support"
                value="support@contesthub.com"
                description="For general inquiries and assistance"
              />
              <ContactItem
                title="Business & Partnerships"
                value="business@contesthub.com"
                description="For collaborations and proposals"
              />
              <ContactItem
                title="Customer Care"
                value="+880 1XXXXXXXXX"
                description="Available Sunday–Thursday, 10 AM – 6 PM"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="mt-2 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Reusable Component */
const ContactItem = ({ title, value, description }) => (
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

export default ContactUs;


