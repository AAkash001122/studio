
import React, { useState } from "react";
import { X, Play } from "lucide-react";

const SelectedWorkSection = () => {
  // State to manage video modal
  const [selectedVideo, setSelectedVideo] = useState(null);

  // --- UPDATED DATA: Instagram Embed Links ---
  // Note: Links are converted to /embed format for iframes
  const projects = [
    {
      id: 1,
      title: "Hyundai Father’s Day",
      thumbnail: "https://picsum.photos/seed/hyundai/800/450", // Replace with reel screenshot
      videoUrl: "https://www.instagram.com/reel/DUAObJ3gWoI/embed",
    },
    {
      id: 2,
      title: "Samsung Commercial",
      thumbnail: "https://picsum.photos/seed/samsung/800/450",
      videoUrl: "https://www.instagram.com/reel/DVf0KI-gQrI/embed",
    },
    {
      id: 3,
      title: "HDFC Life",
      thumbnail: "https://picsum.photos/seed/hdfc/800/450",
      // Using distinct link here (Skipping duplicate from your list)
      videoUrl: "https://www.instagram.com/reel/DUxPCXzAYHU/embed",
    },
    {
      id: 4,
      title: "Vivo Campaign",
      thumbnail: "https://picsum.photos/seed/vivo/800/450",
      // Using distinct link here
      videoUrl: "https://www.instagram.com/reel/DUAPd7xAUmn/embed",
    },
    {
      id: 5,
      title: "Zovo Film",
      thumbnail: "https://picsum.photos/seed/zovo/800/450",
      videoUrl: "https://www.instagram.com/reel/DUAO3cXAR0U/embed",
    },
    {
      id: 6,
      title: "Little Campaign",
      thumbnail: "https://picsum.photos/seed/little/800/450",
      // Reusing first link as the 6th slot
      videoUrl: "https://www.instagram.com/reel/DUAObJ3gWoI/embed",
    },
  ];

  return (
    <>
      {/* --- MAIN SECTION START --- */}
      <section className="w-full bg-[#0a0a0a] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          {/* Heading */}
          <div className="mb-16">
            <h2 className="font-serif text-white text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              SELECTED WORK
              <span className="block w-16 h-1.5 bg-[#00E676] mt-4"></span>
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedVideo(project)}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-[#141414]"
              >
                {/* Image Area */}
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#00E676] flex items-center justify-center shadow-[0_0_20px_rgba(0,230,118,0.6)] transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play className="text-black fill-black ml-1" size={24} />
                  </div>
                </div>

                {/* Project Title */}
                <div className="p-4 md:p-6">
                  <h3 className="font-serif text-xl text-white group-hover:text-[#00E676] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- MAIN SECTION END --- */}

      {/* --- VIDEO MODAL (UPDATED FOR INSTAGRAM IFRAME) --- */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-[#141414] w-full max-w-5xl rounded-2xl overflow-hidden relative shadow-2xl border border-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-[#00E676] hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            {/* Video Player Container - Updated to Iframe for Instagram */}
            <div className="w-full bg-black h-[70vh] md:h-[600px]">
              <iframe
                src={selectedVideo.videoUrl}
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
            <div className="p-6 md:p-8">
              <h3 className="font-serif text-3xl text-white mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-gray-400 font-sans">
                Full Campaign Production by White Marble.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectedWorkSection;
