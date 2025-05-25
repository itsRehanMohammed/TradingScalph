import React, { useState } from "react";
import servicesData from "../../data/ServicesData";
import { Link, useParams } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-cards";
import { useWidth } from "../../Global";
// import { Navigation } from "swiper/modules";

export const InteractivePricing = ({ selectedService, setSelectedService, selectedOption, setSelectedOption }) => {
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const service = servicesData[selectedService];

  const handleServiceChange = (e) => {
    const newService = e.target.value;
    setSelectedService(newService);

    const newServiceData = servicesData[newService];

    if (selectedOption.toLowerCase() === "premium") {
      // Clear all add-ons, then select all add-ons for the new service
      setSelectedAddOns(Object.keys(newServiceData.addOns));
    } else {
      // Clear all add-ons when switching to non-premium option
      setSelectedAddOns([]);
    }
  };
  const handleOptionChange = (e) => {
    const newOption = e.target.value;
    setSelectedOption(newOption);

    if (newOption.toLowerCase() === "premium") {
      setSelectedAddOns(Object.keys(service.addOns));
    } else {
      setSelectedAddOns([]);
    }
  };

  const handleAddOnChange = (e) => {
    const addOn = e.target.value;
    setSelectedAddOns((prevState) => (prevState.includes(addOn) ? prevState.filter((item) => item !== addOn) : [...prevState, addOn]));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    if (selectedOption === "premium") {
      totalPrice = service.basePrice + service.options[selectedOption].price;
    } else {
      totalPrice = service.basePrice + service.options[selectedOption].price;
      selectedAddOns.forEach((addOn) => {
        totalPrice += service.addOns[addOn];
      });
    }
    return parseFloat(totalPrice).toFixed(2);
  };

  function formatCamelCase(text) {
    if (text === "eCommerceSetup") {
      return "ECommerce Setup";
    }
    const result = text.replace(/([A-Z])/g, " $1"); // Insert space before capital letters
    return result.charAt(0).toUpperCase() + result.slice(1); // Capitalize first letter
  }

  return (
    <div className="p-6 w-full lg:w-1/3 transition-all duration-300">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Create Your Perfect Plan</h2>

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Select Service:</label>
        <select className="w-full p-3 border-2 bg-white text-gray-800 rounded-lg" value={selectedService} onChange={(e) => handleServiceChange(e)}>
          {Object.keys(servicesData).map((key) => (
            <option key={key} value={key}>
              {servicesData[key].name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Select Type:</label>
        <select className="w-full p-3 border-2 bg-white text-gray-800 rounded-lg" value={selectedOption} onChange={handleOptionChange}>
          {Object.keys(service.options).map((option) => (
            <option key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Select Add-Ons:</label>
        <div className="grid grid-cols-1 gap-4">
          {Object.keys(service.addOns).map((addOn) => (
            <div key={addOn} className="flex justify-between items-center p-3 rounded-lg">
              <span className={` ${selectedAddOns.includes(addOn) ? "text-blue-500 font-semibold" : "text-gray-700"}`}>{formatCamelCase(addOn)}</span>

              <button
                className={`w-10 h-6 flex items-center rounded-full p-1 transition ${selectedAddOns.includes(addOn) ? "bg-blue-500" : "bg-gray-300"}`}
                onClick={() => handleAddOnChange({ target: { value: addOn } })}
                disabled={selectedOption.toLowerCase() === "premium"} // Disable if "premium" is selected
              >
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${selectedAddOns.includes(addOn) ? "translate-x-4" : ""}`}></div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="text-2xl font-semibold pl-2 text-gray-900 mt-4">Total Price: ${calculateTotalPrice()}</div>
    </div>
  );
};

export const ServiceComparison = ({ service, selectedOption }) => {
  const { name, options, basePrice } = servicesData[service];
  const { serviceName } = useParams();
  const handleWhatsAppRedirect = (planType) => {
    const phoneNumber = "919004073766"; // Your WhatsApp number
    const message = encodeURIComponent(`Hello, I would like to inquire about the ${planType} plan for the ${name} service.`);
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };
  return (
    <div className="p-6 text-gray-900 w-full lg:w-full">
      {serviceName ? null : <h2 className="text-xl font-semibold mb-1">{name}</h2>}
      {serviceName ? null : <h4 className="text-xs text-gray-500 px-1 mb-7">Note: These are estimations. Final amount will depend on your specific requirements.</h4>}
      <div className="flex flex-wrap -m-4">
        {/* standard Plan */}
        <div className="p-4 w-full md:w-1/2 lg:w-1/2">
          <div className={`border-2 ease-in-out duration-300 shadow hover:border-gray-600 h-full p-6 rounded-lg  flex flex-col relative overflow-hidden`}>
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Standard Plan</h2>
            <h1 className="text-4xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
              <span>${parseFloat(options.standard.price + basePrice).toFixed(2)}</span>
            </h1>
            <p className="mb-2 text-gray-600 font-medium">Features:</p>
            <ul className="mb-6 list-disc  ">
              {options.standard.features.map((feature, index) => (
                <li className="flex items-center mb-2" key={index}>
                  <svg class="w-3.5 h-3.5 me-2 text-gray-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mb-2 text-gray-600 font-medium">Benefits:</p>
            <ul className="mb-6 list-disc">
              {options.standard.benefits.map((benefit, index) => (
                <li className="flex items-center mb-2" key={index}>
                  <svg class="w-3.5 h-3.5 me-2 text-gray-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
            <button onClick={() => handleWhatsAppRedirect("Standard")} className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-900 rounded">
              Choose Standard Plan
            </button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="p-4 w-full md:w-1/2 lg:w-1/2">
          <div className={`hover:border-blue-400 ease-in-out duration-300 h-full p-6 shadow border-2 rounded-lg  flex flex-col relative overflow-hidden`}>
            <span className="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">RECOMMENDED</span>
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Premium Plan</h2>
            <h1 className="text-4xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
              <span>${parseFloat(options.premium.price + basePrice).toFixed(2)}</span>
            </h1>
            <p className="mb-2 text-gray-600 font-medium">Features:</p>
            <ul className="mb-6 list-inside  ">
              {options.premium.features.map((feature, index) => (
                <li className="flex items-center mb-2" key={index}>
                  <svg class="w-3.5 h-3.5 me-2 text-gray-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mb-2 text-gray-600 font-medium">Benefits:</p>
            <ul className="mb-6 list-disc  ">
              {options.premium.benefits.map((benefit, index) => (
                <li className="flex items-center mb-2" key={index}>
                  <svg class="w-3.5 h-3.5 me-2 text-gray-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
            <button onClick={() => handleWhatsAppRedirect("Premium")} className="flex items-center mt-auto text-white bg-blue-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded">
              Choose Premium Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const ServicesWrapper = () => {
//   const width = useWidth();
//   const slidesPerView = Math.min(
//     Object.keys(servicesData).length,
//     width > 1200 ? 3.7 : width > 800 ? 3 : 1.22
//   );

//   return (
//     <div className="mt-20 py-16 bg-gray-50 rounded-md">
//       <div className="container mx-auto sm:px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">
//             Our Services
//           </h2>
//           <p className="text-lg text-gray-600">
//             Explore a variety of services we offer to help grow your business.
//           </p>
//         </div>

//         <Swiper
//           spaceBetween={2}
//           pagination={{ clickable: true }}
//           slidesPerView={slidesPerView}
//           grabCursor={true}
//           className="mySwiper ServicesWrapper w-full"
//         >
//           {Object.keys(servicesData).map((serviceKey) => {
//             const service = servicesData[serviceKey];
//             return (
//               <SwiperSlide key={serviceKey} className="swiper-slide w-full">
//                 <div className="p-4 w-full text-gray-800">
//                   <Link to={`/services/${convertToKebabCase(service.name)}`}>
//                     <div className="rounded-lg shadow overflow-hidden transition-transform transform duration-300 bg-white">
//                       <div className="h-64">
//                         <img
//                           alt={service.name}
//                           className="object-cover object-center h-full w-full"
//                           src={service.image}
//                         />
//                       </div>
//                       <div className="p-6">
//                         <h2 className="text-xl font-bold text-gray-900 mb-4">
//                           {service.name}
//                         </h2>
//                         <p className="text-gray-600 text-sm mb-2">
//                           Starting from:{" "}
//                           <span className="font-semibold text-gray-900">
//                             ${service.basePrice}
//                           </span>
//                         </p>
//                         <a
//                           href="#"
//                           className="text-blue-500 inline-flex items-center font-semibold text-lg hover:underline"
//                         >
//                           Learn More
//                           <svg
//                             fill="none"
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             className="w-4 h-4 ml-2"
//                             viewBox="0 0 24 24"
//                           >
//                             <path d="M5 12h14M12 5l7 7-7 7"></path>
//                           </svg>
//                         </a>
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

export function convertToKebabCase(str) {
  return str
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
}
