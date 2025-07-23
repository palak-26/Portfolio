import React from 'react';

const Contact = () => {
  return (
    <section
      id="Contact"
      className="py-16 px-4 md:px-10 lg:px-32 flex items-center justify-center bg-gradient-to-r from-purple-950 via-indigo-700 to-purple-950"
    >
      <fieldset className="w-full max-w-3xl bg-white bg-opacity-50 shadow-lg shadow-black p-6 md:p-10 rounded-3xl">
        <legend className="text-center ">
          <label
            htmlFor="Contact"
            className="text-violet-950 text-4xl md:text-5xl font-bold sm:mt-28"
          >
            Contact
          </label>
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
    </section>
  );
};

export default Contact;
