
import React, { useState } from "react";
import { Play, ArrowUpRight, X } from "lucide-react";
import FooterWithCTA from "../components/FooterWithCTA";

const WorkPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // --- UPDATED DATA: INSTAGRAM EMBED LINKS ---
  const projectsData = [
    {
      id: 1,
      brand: "Hyundai",
      campaign: "Father’s Day Campaign",
      role: "Production Execution",
      thumbnail: "image.png", // Replace with reel screenshot
      videoUrl: "https://www.instagram.com/reel/DUAObJ3gWoI/embed",
    },
    {
      id: 2,
      brand: "Samsung",
      campaign: "Commercial Campaign",
      role: "Production",
      thumbnail: "https://picsum.photos/seed/samsung/800/500",
      videoUrl: "https://www.instagram.com/reel/DVf0KI-gQrI/embed",
    },
    {
      id: 3,
      brand: "Zovio",
      campaign: "Brand Reel 2024",
      role: "Creative Direction",
      thumbnail: "https://picsum.photos/seed/zovo/800/500",
      videoUrl: "https://www.instagram.com/reel/DUAO3cXAR0U/embed",
    },
    {
      id: 4,
      brand: "Oppo",
      campaign: "Diwali Festival",
      role: "End-to-End Production",
      thumbnail: "https://picsum.photos/seed/oppo/800/500",
      // Using a distinct available link here
      videoUrl: "https://www.instagram.com/reel/DUxPCXzAYHU/embed",
    },
    {
      id: 5,
      brand: "Vivo",
      campaign: "V-Series Launch",
      role: "Production House",
      thumbnail: "https://picsum.photos/seed/vivo/800/500",
      videoUrl: "https://www.instagram.com/reel/DUAPd7xAUmn/embed",
    },
    {
      id: 6,
      brand: "Backbenchers",
      campaign: "Indie Film Project",
      role: "Co-Production",
      thumbnail: "https://picsum.photos/seed/indie/800/500",
      // Reusing first link
      videoUrl: "https://www.instagram.com/reel/DUAObJ3gWoI/embed",
    },
  ];

  return (
    <>
      {/* --- PAGE HEADER --- */}
      <section className="w-full bg-[#0a0a0a] pt-32 pb-16 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-white text-5xl md:text-8xl font-bold tracking-tight mb-4">
            OUR WORK
          </h1>
          <p className="font-sans text-gray-400 text-lg max-w-2xl">
            Showcasing cinematic excellence and disciplined production execution
            for brands that dare to stand out.
          </p>
        </div>
      </section>

      {/* --- PROJECTS GRID --- */}
      <section className="w-full bg-[#0a0a0a] py-16 px-6 md:px-16 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projectsData.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                {/* 1. THUMBNAIL FRAME */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-[#141414] mb-5">
                  <img
                    src={project.thumbnail}
                    alt={project.campaign}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />

                  {/* Hover Overlay: Green Tint + Play Button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-14 h-14 rounded-full bg-[#00E676] flex items-center justify-center shadow-[0_0_25px_rgba(0,230,118,0.6)] transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                      <Play className="text-black fill-black ml-1" size={20} />
                    </div>
                  </div>
                </div>

                {/* 2. PROJECT DETAILS */}
                <div className="flex flex-col">
                  {/* Brand Name (Serif, Big, Elegant) */}
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mb-1 group-hover:text-[#00E676] transition-colors">
                    {project.brand}
                  </h3>

                  {/* Campaign Name (Sans, Gray) */}
                  <p className="font-sans text-gray-400 text-base mb-3">
                    {project.campaign}
                  </p>

                  {/* Role (Small, Green Accent, Uppercase) */}
                  <div className="flex items-center gap-2">
                    <span className="text-[#00E676] text-xs font-bold uppercase tracking-widest border border-[#00E676]/30 px-2 py-1 rounded">
                      {project.role}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VIDEO MODAL (UPDATED FOR INSTAGRAM IFRAME) --- */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#141414] w-full max-w-5xl rounded-2xl overflow-hidden relative shadow-2xl border border-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-[#00E676] hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            {/* Video Player - Changed to Iframe for Instagram */}
            <div className="w-full bg-black h-[70vh] md:h-[600px]">
              <iframe
                src={selectedProject.videoUrl}
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowtransparency="true"
                allow="encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                title="Instagram Reel"
              ></iframe>
            </div>

            {/* Modal Footer */}
            <div className="p-6 md:p-8 bg-[#141414]">
              <h2 className="font-serif text-3xl text-white mb-1">
                {selectedProject.brand}
              </h2>
              <p className="text-[#00E676] font-sans font-semibold text-sm uppercase tracking-wider mb-3">
                {selectedProject.role}
              </p>
              <p className="text-gray-400 font-sans">
                {selectedProject.campaign}
              </p>
            </div>
          </div>
        </div>
      )}
      <FooterWithCTA />
    </>
  );
};

export default WorkPage;
