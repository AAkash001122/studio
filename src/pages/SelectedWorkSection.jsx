import React, { useState } from "react";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";

const SelectedWorkSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const projects = [
    { id: 1, title: "Hyundai Father’s Day", videoUrl: "/1.mp4" },
    { id: 2, title: "Fiesta", videoUrl: "/2.mp4" },
    { id: 3, title: "IFP", videoUrl: "/3.mp4" },
    { id: 4, title: "Samsung Galaxy S25 Ultra", videoUrl: "/4.mp4" },
    { id: 5, title: "Vivo X3500", videoUrl: "/5.mp4" },
    { id: 6, title: "Galaxy S25 Ultra", videoUrl: "/6.mp4" },
    { id: 7, title: "Vivo X300", videoUrl: "/7.mp4" },
    { id: 8, title: "Vivo Launch", videoUrl: "/8.mp4" },
    { id: 9, title: "Vivo", videoUrl: "/9.mp4" },
    { id: 10, title: "Vovo X300", videoUrl: "/10.mp4" },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <section className="w-full bg-[#0a0a0a] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="mb-16">
            <h2 className="font-serif text-white text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              SELECTED WORK
              <span className="block w-16 h-1.5 bg-[#00E676] mt-4"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedVideo(project)}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-[#141414]"
              >
                <div className="aspect-video w-full overflow-hidden">
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
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <Play className="text-white fill-white ml-1" size={16} />
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="font-serif text-xl text-white group-hover:text-[#00E676] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

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

      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-[#141414] w-full max-w-2xl rounded-2xl overflow-hidden relative shadow-2xl border border-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 z-10 p-1 bg-black/60 rounded-full text-white hover:bg-[#00E676] hover:text-black transition-colors"
            >
              <X size={20} />
            </button>

            <div className="w-full bg-black h-[25vh] md:h-[350px]">
              <video
                src={selectedVideo.videoUrl}
                className="w-full h-full object-contain"
                autoPlay
                controls
              />
            </div>

            <div className="p-4 md:p-5 bg-[#141414]">
              <h3 className="font-serif text-xl md:text-2xl text-white mb-2">
                {selectedVideo.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectedWorkSection;
