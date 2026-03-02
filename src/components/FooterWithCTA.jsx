import { Link } from "react-router-dom";

export default function FooterWithCTA() {
  return (
    <>
      <footer className="bg-black text-gray-300 py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-white mb-3">
              Digital Music Distribution
            </h3>
            <p className="text-xs md:text-sm max-w-sm">
              Digital Music Distribution Provides Music Distribution And Artist
              Management Services.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-white mb-3">Platform</h3>
            <ul className="text-xs md:text-sm space-y-1">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-white mb-3">Support</h3>
            <ul className="text-xs md:text-sm space-y-1">
              <li>
                <Link to="/faqs" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-white transition">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-600">
          <p>© 2026 Digital Music Distribution. All Rights Reserved.</p>
          <div className="space-x-4 mt-2 md:mt-0">
            <Link to="/terms" className="hover:text-white transition">
              Terms And Conditions
            </Link>
            <Link to="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
