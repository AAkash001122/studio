import React, { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin, Send } from "lucide-react";
import FooterWithCTA from "../components/FooterWithCTA";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
   
  };

  return (
    <>
    <section className="w-full bg-[#0a0a0a] min-h-screen py-24 px-6 md:px-16">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-16 text-center md:text-left">
          <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mb-4">
            LET'S <span className="text-[#00E676] italic">CONNECT.</span>
          </h1>
          <p className="font-sans text-gray-400 text-lg max-w-2xl">
            Ready to create something cinematic? Fill out the form below or reach us directly.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* --- LEFT COLUMN: FORM --- */}
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Name Input */}
              <div className="group">
                <label className="block font-sans text-gray-500 text-xs uppercase tracking-widest mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#00E676] transition-colors placeholder-gray-600 font-sans text-lg"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div className="group">
                <label className="block font-sans text-gray-500 text-xs uppercase tracking-widest mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#00E676] transition-colors placeholder-gray-600 font-sans text-lg"
                  placeholder="john@example.com"
                />
              </div>

              {/* Project Type Dropdown */}
              <div className="group">
                <label className="block font-sans text-gray-500 text-xs uppercase tracking-widest mb-2">Project Type</label>
                <div className="relative">
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#00E676] transition-colors appearance-none cursor-pointer font-sans text-lg"
                  >
                    <option value="" className="bg-[#141414] text-gray-400">Select a service...</option>
                    <option value="ad-film" className="bg-[#141414]">Advertising Film</option>
                    <option value="branded-content" className="bg-[#141414]">Branded Content</option>
                    <option value="original" className="bg-[#141414]">Original Content</option>
                    <option value="other" className="bg-[#141414]">Other</option>
                  </select>
                  {/* Custom Arrow */}
                  <div className="absolute right-0 top-4 text-[#00E676] pointer-events-none">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="group">
                <label className="block font-sans text-gray-500 text-xs uppercase tracking-widest mb-2">Your Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#00E676] transition-colors placeholder-gray-600 font-sans text-lg resize-none"
                  placeholder="Tell us about your vision..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full md:w-auto px-10 py-4 bg-[#00E676] text-black font-bold font-sans rounded-full hover:shadow-[0_0_20px_rgba(0,230,118,0.4)] transition-all duration-300 flex items-center justify-center gap-3 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

            </form>
          </div>

          {/* --- RIGHT COLUMN: INFO & MAP --- */}
          <div className="space-y-10">
            
            {/* Contact Info Card */}
            <div className="bg-[#141414] border border-white/5 p-8 rounded-3xl">
              <h2 className="font-serif text-3xl text-white mb-6">White Marble Production</h2>
              <p className="font-sans text-gray-400 mb-8 text-lg">
                Mumbai, India
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#00E676] group-hover:text-black transition-colors">
                    <Mail size={20} />
                  </div>
                  <a href="mailto:whitemarbleproduction@gmail.com" className="font-sans text-white text-lg group-hover:text-[#00E676] transition-colors">
                    whitemarbleproduction@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#00E676] group-hover:text-black transition-colors">
                    <Phone size={20} />
                  </div>
                  <a href="tel:+917903606342" className="font-sans text-white text-lg group-hover:text-[#00E676] transition-colors">
                    +91 7903606342
                  </a>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#00E676] group-hover:text-black transition-colors">
                    <MapPin size={20} />
                  </div>
                  <span className="font-sans text-white text-lg">
                    123, Kartik Complex, Veera Desai Road
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-6 border-t border-white/10 flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#00E676] hover:text-[#00E676] transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#00E676] hover:text-[#00E676] transition-all">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Modern Styled Map */}
            <div className="relative w-full h-[350px] rounded-2xl overflow-hidden border border-white/10 group">
              {/* Map Overlay Title */}
              <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 pointer-events-none">
                <span className="text-white text-xs font-bold uppercase tracking-wider">Our Studio</span>
              </div>
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30154.85832863687!2d72.81186593476565!3d19.13583140000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1772195079315!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(83%)" }} 
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
    <FooterWithCTA />
    </>
  );
};

export default Contact;