import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import TestimonialsData from "../../data/TestimonialsData";
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const sliderRef = useRef(null);
  const timerRef = useRef(null);

  // Auto slide every 5 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === TestimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timerRef.current);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === TestimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  // Touch event handlers for swipe
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (diff > 5) {
      // Swipe left - go to next slide
      goToSlide(
        currentIndex === TestimonialsData.length - 1 ? 0 : currentIndex + 1
      );
      setStartX(null);
    } else if (diff < -5) {
      // Swipe right - go to previous slide
      goToSlide(
        currentIndex === 0 ? TestimonialsData.length - 1 : currentIndex - 1
      );
      setStartX(null);
    }
  };

  // Mouse event handlers for desktop drag
  const handleMouseDown = (e) => {
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!startX) return;
    const currentX = e.clientX;
    const diff = startX - currentX;

    if (diff > 10) {
      // Swipe left - go to next slide
      goToSlide(
        currentIndex === TestimonialsData.length - 1 ? 0 : currentIndex + 1
      );
      setStartX(null);
    } else if (diff < -10) {
      // Swipe right - go to previous slide
      goToSlide(
        currentIndex === 0 ? TestimonialsData.length - 1 : currentIndex - 1
      );
      setStartX(null);
    }
  };

  const handleMouseUp = () => {
    setStartX(null);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of investors and professionals worldwide
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto overflow-hidden"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Slider container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {TestimonialsData.map((testimonial) => (
              <div
                key={testimonial._id}
                className="w-full flex-shrink-0 px-4 cursor-grab active:cursor-grabbing"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-indigo-100"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic text-lg">
                    "{testimonial.testimonial}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8">
            {TestimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-indigo-600 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
