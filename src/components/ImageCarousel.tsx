import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageCarouselProps {
  images: string[];
  captions?: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, captions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [validImages, setValidImages] = useState<Set<number>>(new Set(images.map((_, i) => i)));

  // 过滤掉加载失败的图片
  const displayImages = images.filter((_, i) => validImages.has(i));

  // 当图片被移除后，确保 currentIndex 不越界
  useEffect(() => {
    if (currentIndex >= displayImages.length) {
      setCurrentIndex(Math.max(0, displayImages.length - 1));
    }
  }, [displayImages.length, currentIndex]);

  // 没有有效图片就不渲染
  if (displayImages.length === 0) return null;

  const handleImageError = (index: number) => {
    setValidImages(prev => {
      const next = new Set(prev);
      next.delete(index);
      return next;
    });
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? displayImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentCaption = captions?.[currentIndex];

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center max-h-[350px]">
        <img
          src={displayImages[currentIndex]}
          className="max-w-full max-h-[350px] w-auto h-auto object-contain"
          alt={currentCaption || `Carousel Image ${currentIndex + 1}`}
          onError={() => handleImageError(currentIndex)}
        />

        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10"
        >
          <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10"
        >
          <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {displayImages.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {displayImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-neutral-800 dark:bg-neutral-200 w-6'
                    : 'bg-neutral-300 dark:bg-neutral-600 w-2 hover:bg-neutral-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {currentCaption && (
        <div className="mt-2 text-center">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
            {currentCaption}
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1 font-mono">
            {currentIndex + 1} / {displayImages.length}
          </p>
        </div>
      )}

      {!currentCaption && (
        <p className="mt-2 text-xs text-neutral-400 dark:text-neutral-500 text-center font-mono">
          {currentIndex + 1} / {displayImages.length}
        </p>
      )}
    </div>
  );
};

export default ImageCarousel;
