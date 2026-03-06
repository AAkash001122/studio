import React, { useState } from "react";
import { Play, ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import FooterWithCTA from "../components/FooterWithCTA";

const WorkPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // --- DATA: 10 Videos with Details ---
  const projectsData = [
    {
      id: 1,
      brand: "Hyundai",
      campaign: "Father’s Day Campaign",
      role: "Production Execution",
      videoUrl: "/1.mp4",
    },
    {
      id: 2,
      brand: "Samsung",
      campaign: "Commercial Campaign",
      role: "Production",
      videoUrl: "/2.mp4",
    },
    {
      id: 3,
      brand: "Zovio",
      campaign: "Brand Reel 2024",
      role: "Creative Direction",
      videoUrl: "/3.mp4",
    },
    {
      id: 4,
      brand: "Oppo",
      campaign: "Diwali Festival",
      role: "End-to-End Production",
      videoUrl: "/4.mp4",
    },
    {
      id: 5,
      brand: "Vivo",
      campaign: "V-Series Launch",
      role: "Production House",
      videoUrl: "/5.mp4",
    },
    {
      id: 6,
      brand: "Backbenchers",
      campaign: "Indie Film Project",
      role: "Co-Production",
      videoUrl: "/6.mp4",
    },
    {
      id: 7,
      brand: "IFP",
      campaign: "Brand Collaboration",
      role: "Execution Partner",
      videoUrl: "/7.mp4",
    },
    {
      id: 8,
      brand: "Fast Relief",
      campaign: "Digital Ad",
      role: "Production",
      videoUrl: "/8.mp4",
    },
    {
      id: 9,
      brand: "HDFC",
      campaign: "Insurance Campaign",
      role: "Production House",
      videoUrl: "/9.mp4",
    },
    {
      id: 10,
      brand: "Little",
      campaign: "Creative Story",
      role: "Direction & Production",
      videoUrl: "/10.mp4",
    },
  ];

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

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
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {currentProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                {/* 1. DIRECT VIDEO PREVIEW CARD */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-[#141414] mb-5">
                  <video
                    src={project.videoUrl}
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
                    className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-14 h-14 rounded-full bg-[#00E676] flex items-center justify-center shadow-[0_0_25px_rgba(0,230,118,0.6)] transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                      <Play className="text-black fill-black ml-1" size={20} />
                    </div>
                  </div>
                </div>

                {/* 2. PROJECT DETAILS */}
                <div className="flex flex-col">
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mb-1 group-hover:text-[#00E676] transition-colors">
                    {project.brand}
                  </h3>
                  <p className="font-sans text-gray-400 text-base mb-3">
                    {project.campaign}
                  </p>
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

          {/* --- PAGINATION --- */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all duration-300 ${
                currentPage === 1
                  ? "border-white/10 text-gray-600 cursor-not-allowed"
                  : "border-white/20 text-white hover:bg-[#00E676] hover:text-black hover:border-[#00E676]"
              }`}
            >
              <ChevronLeft size={18} /> Prev
            </button>
            <span className="font-sans text-gray-400 text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all duration-300 ${
                currentPage === totalPages
                  ? "border-white/10 text-gray-600 cursor-not-allowed"
                  : "border-white/20 text-white hover:bg-[#00E676] hover:text-black hover:border-[#00E676]"
              }`}
            >
              Next <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* --- COMPACT VIDEO MODAL (HALF SIZE & FULLY RESPONSIVE) --- */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            // Width: max-w-2xl (Compact), Height handled inside
            className="bg-[#141414] w-full max-w-2xl rounded-2xl overflow-hidden relative shadow-2xl border border-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 z-10 p-1 bg-black/60 rounded-full text-white hover:bg-[#00E676] hover:text-black transition-colors"
            >
              <X size={20} />
            </button>

            {/* Video Player - Very Compact Height */}
            <div className="w-full bg-black h-[25vh] md:h-[350px]">
              <video
                src={selectedProject.videoUrl}
                className="w-full h-full object-contain"
                autoPlay
                controls
              />
            </div>

            {/* Modal Footer - Reduced Padding */}
            <div className="p-4 md:p-5 bg-[#141414]">
              <h2 className="font-serif text-xl md:text-2xl text-white mb-1">
                {selectedProject.brand}
              </h2>
              <p className="text-[#00E676] font-sans font-semibold text-xs uppercase tracking-wider mb-2">
                {selectedProject.role}
              </p>
              <p className="text-gray-400 font-sans text-sm">
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
