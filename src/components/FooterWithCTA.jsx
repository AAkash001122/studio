export default function FooterWithCTA() {
  return (
    <>
      

      {/* Footer Section */}
      <footer className="bg-black text-gray-300 py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-white mb-3">Digital Music Distribution</h3>
            <p className="text-xs md:text-sm max-w-sm">
              Digital Music Distribution Provides Music Distribution And Artist Management Services.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-white mb-3">Platform</h3>
            <ul className="text-xs md:text-sm space-y-1">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-white mb-3">Support</h3>
            <ul className="text-xs md:text-sm space-y-1">
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-600">
          <p>© 2026 Digital Music Distribution. All Rights Reserved.</p>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white transition">Terms And Conditions</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
