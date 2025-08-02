import React from 'react';
import Footer from '../Footer';

const Contact = () => {
  return (
    <section
      id="Contact"
      className="min-h-screen w-full gap-20 flex flex-col items-center justify-center dark:bg-gradient-to-l dark:from-[#780206] dark:to-[#061161] text-white from-[#ef32d9] bg-gradient-to-r to-teal-500  dark:transition-all dark:duration-100"
    >
      <div className=' w-full py-16 px-4 md:px-10 lg:px-32 flex flex-col items-center justify-center'>
        <fieldset className="w-full max-w-4xl bg-white bg-opacity-50 shadow-lg shadow-black p-6 md:p-10 rounded-3xl">
        <legend className="text-center ">
          <div className="text-center mb-6 p-0 ">
            <h2 className="text-violet-950 text-4xl md:text-5xl mt-28 font-bold">
               Contact
            </h2>
          </div>
        </legend>

        <form className="flex flex-col gap-6">
          {/* Name Field */}
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <label
              htmlFor="name"
              className="w-full md:w-1/3 text-purple-950 text-lg md:text-xl font-bold"
            >
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full md:w-2/3 h-10 bg-purple-950 bg-opacity-50 text-white font-semibold rounded-full px-4 text-center placeholder-white"
              placeholder="Alex"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <label
              htmlFor="Email"
              className="w-full md:w-1/3 text-purple-950 text-lg md:text-xl font-bold"
            >
              Email ID:
            </label>
            <input
              type="email"
              id="Email"
              name="Email"
              className="w-full md:w-2/3 h-10 bg-purple-950 bg-opacity-50 text-white font-semibold rounded-full px-4 text-center placeholder-white"
              placeholder="alex@gmail.com"
            />
          </div>

          {/* Phone Field */}
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <label
              htmlFor="phone"
              className="w-full md:w-1/3 text-purple-950 text-lg md:text-xl font-bold"
            >
              Phone Number:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full md:w-2/3 h-10 bg-purple-950 bg-opacity-50 text-white font-semibold rounded-full px-4 text-center placeholder-white"
              placeholder="+91 74711XXXXX"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="text-white text-lg bg-purple-950 shadow-lg font-bold rounded-full py-2 px-6 hover:scale-105 transition-transform duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </fieldset>
      </div>
      <div className='w-full relative bottom-0 '>
        <Footer/>
      </div>
    </section>
    
  );
};

export default Contact;
