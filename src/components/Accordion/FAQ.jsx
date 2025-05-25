import React, { useState } from "react";
import FaqData from "../../data/FaqData";
import Accordion from "./Accordion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 px-2 md:px-0">
      <h2 className="text-2xl text-gray-900 font-semibold text-center mb-10">FAQ's</h2>

      {FaqData.map((faq, index) => {
        return (
          <Accordion title={faq.question} key={index} index={index} openIndex={openIndex} setOpenIndex={setOpenIndex}>
            {faq.answer}
          </Accordion>
        );
      })}
    </div>
  );
};

export default FAQ;
