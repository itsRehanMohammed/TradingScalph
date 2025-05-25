import React, { useState, useRef } from "react";

const Accordion = ({ title, children, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;
  const contentRef = useRef(null);

  const handleToggle = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div>
      <button type="button" className="w-full cursor-pointer px-3 bg-white md:px-8 py-4 text-left flex justify-between items-center focus:outline-none border-none mb-1" onClick={handleToggle}>
        <span className="text-base   font-medium text-gray-900">{title}</span>
        <svg className={`w-3 h-3 md:w-5 md:h-5 transition-all duration-400 ease-in-out ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        ref={contentRef}
        className={`transition-all overflow-hidden max-h-0 duration-400 ease-in-out ${isOpen ? "max-h-screen" : ""}`}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
      >
        <div className="p-3 md:px-8 md:pt-2 md:pb-5 text-sm text-gray-900">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
