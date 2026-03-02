import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import FooterWithCTA from "../components/FooterWithCTA";

const Contact = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        {/* 🔥 Banner Section */}
        <div className="relative h-[350px] md:h-[450px] w-full">
          <img
            src="/images/contact-banner.jpg"
            alt="Contact WhiteMarble"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-white text-4xl md:text-6xl font-bold tracking-widest">
              CONTACT US
            </h1>
            <div className="w-20 h-1 bg-red-600 mt-4"></div>
            <p className="text-gray-300 mt-6 text-lg">
              Let’s create something extraordinary together.
            </p>
          </div>
        </div>

        {/* 📩 Contact Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Contact Form */}
          <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Get In Touch
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-600 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="flex flex-col justify-center space-y-10">
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-4 rounded-full text-white">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Our Studio
                </h3>
                <p className="text-gray-600">
                  WhiteMarble Studios, Film City Road,
                  <br />
                  Mumbai, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-4 rounded-full text-white">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-4 rounded-full text-white">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">whitemarbleproduction@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* 🌍 Map Section */}
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30154.85832863687!2d72.81186593476565!3d19.13583140000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1772195079315!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          />
        </div>
      </div>

      {/* Footer */}
      <FooterWithCTA />
    </>
  );
};

export default Contact;
