import React from "react";
import FAQ from "../components/Accordion/FAQ";
import { useWidth } from "../Global";

const Contact = () => {
  const width = useWidth();

  const handleStartChat = () => {
    const phoneNumber = "919004073766"; // Your WhatsApp business number
    const message = encodeURIComponent("Hello, I need help.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="max-w-screen-xl   mx-auto">
        <section className="text-gray-600 body-font  px-5 md:px-10">
          <div className="flex  py-16 md:py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <p className="mb-8 md:text-xl font-medium leading-relaxed">Get answers to common questions and access service support</p>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field" // Anti-spam measure
                className="flex flex-wrap -m-2"
              >
                {/* Hidden input for Netlify form handling */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Honeypot field for bots */}
                <input type="hidden" name="bot-field" />

                <div className="p-2 w-1/2 form-control">
                  <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>

                <div className="p-2 w-1/2 form-control">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>

                <div className="p-2 w-full form-control">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    required
                  ></textarea>
                </div>

                <div className="p-2 w-full">
                  <button type="submit" className="cursor-pointer hover:opacity-95 flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none rounded text-lg">
                    Send
                  </button>
                </div>
              </form>
            </div>
            {width > 1000 && (
              <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="Contact" src="/contact.png" />
              </div>
            )}
          </div>
        </section>

        <section className="text-gray-600 body-font px-4 sm:px-10">
          <div className="container md:px-4 md:pt-14 pb-24 mx-auto">
            <div className="flex flex-col w-full mb-14 text-center md:text-left">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Get in touch with a member of our friendly Service team</h1>
              <p className="lg:w-2/3 leading-relaxed text-base">We’re available 365 days a year! Monday – Friday from 8am-8pm EST, and weekends and holidays from 9am-6pm EST.</p>
            </div>
            <div className="flex  flex-wrap justify-center md:justify-between items-center mt-8 gap-16 md:gap-4 mx-2">
              <div className="flex flex-col md:flex-row items-center md:gap-10 md:items-start">
                <div className="w-20 h-20 sm:w-32 sm:h-32 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 sm:w-16 sm:h-16" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="mt-6 sm:mt-1 text-center md:text-left">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Start a chat</h2>
                  <p className="leading-relaxed text-base">We respond right away during normal business hours*</p>
                  <a href="#" onClick={handleStartChat} className="cursor-pointer inline-flex mt-4 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:opacity-95 rounded text-lg">
                    Start Chat
                  </a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:gap-10 md:items-start">
                <div className="w-20 h-20 sm:w-32 sm:h-32 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 sm:w-16 sm:h-16" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="mt-6 sm:mt-1 text-center md:text-left">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Send an email</h2>
                  <p className="leading-relaxed text-base">We’ll get back to you within a day</p>
                  <a href="mailto:help@happysolutionss.com" className="cursor-pointer inline-flex mt-4 text-blue-500 hover:text-blue-700 font-semibold py-2 rounded text-lg">
                    help@tradingscalp.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQ />
      </div>
    </>
  );
};

export default Contact;
