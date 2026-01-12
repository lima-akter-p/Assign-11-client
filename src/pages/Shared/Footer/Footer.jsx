
import Logo from "../../../Components/Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div>
          <Logo></Logo>
        </div>

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            
            <p className="mt-4 text-gray-400 leading-relaxed">
              ContestHub is a modern contest platform designed to empower talent
              through fair, transparent, and AI-powered competitions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="all-contests" className="hover:text-white transition">
                  Contests
                </a>
              </li>
              <li>
                <a href="about-us" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="contac-us" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="terms-condition" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="privecy-policy" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="faq" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>Email: support@contesthub.com</li>
              <li>Business: business@contesthub.com</li>
              <li>Support: Sun Thu, 10 AM  6 PM</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ContestHub. All rights reserved.
          </p>

          {/* Footer Links */}
          <div className="flex gap-6 text-sm">
            <a href="terms-condition" className="hover:text-white transition">
              Terms
            </a>
            <a href="privecy-policy" className="hover:text-white transition">
              Privacy
            </a>
            <a href="support" className="hover:text-white transition">
              Support
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

