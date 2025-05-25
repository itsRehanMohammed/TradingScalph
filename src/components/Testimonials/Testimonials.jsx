import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";
import TestimonialsData from "../../data/TestimonialsData";
const Testimonials = () => {
  return (
    <div className="py-24 max-w-[80vw] md:max-w-[22vw]  mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">Testimonials</h2>

      <Swiper
        effect={"cards"}
        // loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        className="mySwiper swiper"
      >
        {TestimonialsData.map((testimonial, index) => (
          <SwiperSlide key={testimonial._id} className={`swiper-slide ${getBackgroundColor(index)}`}>
            <div className="p-4  rounded-lg shadow-lg text-center">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
              <p className="mt-2 text-sm text-gray-700">{testimonial.testimonial}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const getBackgroundColor = (index) => {
  switch (index % 4) {
    case 0:
      return "bg-gray-100";
    case 1:
      return "bg-orange-100";
    case 2:
      return "bg-blue-100";
    case 3:
      return "bg-green-100";
    default:
      return "bg-pink-100";
  }
};

export default Testimonials;
