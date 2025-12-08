import { useState, useRef } from "react";
import { STRAPI_BASE_URL } from "@/lib/strapi";

export function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const newIndex = Math.round(scrollLeft / clientWidth);
      setCurrentIndex(newIndex);
    }
  };

  const scrollToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Slider Container */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex w-full overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
      >
        {images.map((image, index) => {
          const imgUrl = image.url.startsWith("http")
            ? image.url
            : `${STRAPI_BASE_URL}${image.url}`;

          return (
            <div
              key={image.documentId}
              className="w-full shrink-0 snap-center flex items-center justify-center"
            >
              <img
                src={imgUrl}
                alt={`Slide ${index + 1}`}
                className="w-3/4 object-contain"
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`size-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
