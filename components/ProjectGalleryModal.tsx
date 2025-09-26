"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Image from "next/image";

interface Project {
  title: string;
  images: string[];
}

interface Props {
  project: Project;
  onClose: () => void;
}

const ProjectGalleryModal: React.FC<Props> = ({ project, onClose }) => {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    setImgIdx(0);
    // Prevent scrolling when modal open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [project]);

  const handlePrev = () => {
    setImgIdx((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleNext = () => {
    setImgIdx((prev) => (prev + 1) % project.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative bg-theme-background rounded-xl p-6 max-w-6xl w-full flex flex-col items-center">
        <button
          className="absolute top-4 right-4 text-white hover:text-theme-blue text-2xl"
          onClick={onClose}
          aria-label="Close gallery"
          style={{ outline: 'none', border: 'none', background: 'none' }}
        >
          <FaTimes />
        </button>
        <h2 className="text-2xl text-white mb-6">{project.title}</h2>
        <div className="relative w-full flex items-center justify-center mb-4">
          {project.images.length > 1 && (
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1 hover:bg-theme-blue text-white rounded-full shadow transition"
              onClick={handlePrev}
              style={{ outline: 'none', border: 'none' }}
              aria-label="Previous image"
            >
              <FaChevronLeft size={32} />
            </button>
          )}
          <Image
            src={project.images[imgIdx]}
            alt={project.title}
            width={1920}
            height={1080}
            className="rounded-xl object-cover"
            style={{
              aspectRatio: '16/9',
              width: '100%',
              maxWidth: '1368px',
              height: 'auto',
              maxHeight: '900px',
              objectFit: 'cover',
            }}
            priority
          />
          {project.images.length > 1 && (
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1 hover:bg-theme-blue text-white rounded-full shadow transition"
              onClick={handleNext}
              style={{ outline: 'none', border: 'none' }}
              aria-label="Next image"
            >
              <FaChevronRight size={32} />
            </button>
          )}
        </div>
        {/* Dots */}
        {project.images.length > 1 && (
          <div className="flex gap-2 mt-2">
            {project.images.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition bg-theme-blue ${
                  imgIdx === i ? "opacity-90 scale-125" : "opacity-30"
                }`}
                style={{ outline: 'none', border: 'none' }}
                onClick={() => setImgIdx(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGalleryModal;