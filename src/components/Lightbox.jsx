// src/components/Lightbox.jsx
import { motion as Motion } from "framer-motion";
import { useEffect, useState } from "react";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";

const BASE_SCALE = 1.18;

export default function Lightbox({ 
  src, 
  image, 
  images, 
  currentIndex = 0, 
  alt = "", 
  onClose, 
  closeLightbox,
  onNavigate 
}) {
  // Support both prop names for compatibility
  const imageSrc = src || image;
  const handleClose = onClose || closeLightbox;
  
  // If images array is provided, use it for navigation
  const hasMultipleImages = images && images.length > 1;
  const currentImage = hasMultipleImages ? images[currentIndex] : null;
  const displaySrc = hasMultipleImages ? (currentImage?.img || currentImage?.src) : imageSrc;
  const displayAlt = hasMultipleImages ? (currentImage?.alt || currentImage?.label) : alt;
  
  const [isZoomed, setIsZoomed] = useState(false);
  const [scale, setScale] = useState(BASE_SCALE);

  // Reset zoom when image changes
  useEffect(() => {
    setIsZoomed(false);
    setScale(BASE_SCALE);
  }, [currentIndex]);

  useEffect(() => {
    const onKey = (e) => { 
      if (e.key === "Escape") {
        setIsZoomed(false);
        setScale(BASE_SCALE);
        handleClose?.();
      } else if (hasMultipleImages && onNavigate) {
        if (e.key === "ArrowLeft") {
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
          onNavigate(prevIndex);
        } else if (e.key === "ArrowRight") {
          const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
          onNavigate(nextIndex);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose, hasMultipleImages, onNavigate, currentIndex, images]);

  const handleImageClick = (e) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
    setScale(isZoomed ? BASE_SCALE : 2);
  };

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setScale(prev => Math.min(prev + 0.5, 4));
    setIsZoomed(true);
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setScale(prev => {
      const newScale = Math.max(prev - 0.5, BASE_SCALE);
      if (newScale <= BASE_SCALE) {
        setIsZoomed(false);
        return BASE_SCALE;
      }
      return newScale;
    });
  };

  const handleWheel = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    setScale(prev => {
      const newScale = Math.max(BASE_SCALE, Math.min(prev + delta, 4));
      setIsZoomed(newScale > BASE_SCALE);
      return newScale;
    });
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    if (hasMultipleImages && onNavigate) {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
      onNavigate(prevIndex);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (hasMultipleImages && onNavigate) {
      const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
      onNavigate(nextIndex);
    }
  };

  if (!displaySrc) return null;
  return (
    <Motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
    >
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
        aria-label="Close"
      >
        <X size={24} className="text-white" />
      </button>

      {/* Zoom Controls */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <button
          onClick={handleZoomIn}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
          aria-label="Zoom In"
        >
          <ZoomIn size={20} className="text-white" />
        </button>
        <button
          onClick={handleZoomOut}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
          aria-label="Zoom Out"
        >
          <ZoomOut size={20} className="text-white" />
        </button>
      </div>

      {/* Navigation Buttons */}
      {hasMultipleImages && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft size={28} className="text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight size={28} className="text-white" />
          </button>
        </>
      )}

      {/* Image Counter */}
      {hasMultipleImages && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      <Motion.img
        key={currentIndex}
        src={displaySrc}
        alt={displayAlt}
        onClick={handleImageClick}
        onWheel={handleWheel}
        initial={{ scale: BASE_SCALE, opacity: 0 }}
        animate={{ scale: scale, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`max-h-[90vh] rounded-lg shadow-2xl select-none ${isZoomed ? 'cursor-grab' : 'cursor-zoom-in'}`}
        style={{ transformOrigin: 'center center', maxWidth: 'min(92vw, 1100px)' }}
        draggable={false}
      />

      {/* Zoom Hint */}
      {!isZoomed && (
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm"
        >
          {hasMultipleImages ? (
            <>Click to zoom • ← → to navigate • ESC to close</>
          ) : (
            <>Click to zoom • Scroll to zoom • ESC to close</>
          )}
        </Motion.div>
      )}
    </Motion.div>
  );
}
