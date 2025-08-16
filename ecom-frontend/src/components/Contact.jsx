import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-3 sm:px-6 py-10 sm:py-16 bg-gradient-to-r from-blue-100 via-white to-pink-100">
      <div className="backdrop-blur-md bg-white/70 shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-xl md:max-w-1xl border border-gray-200">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-3 sm:mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-6 sm:mb-8 text-sm sm:text-base">
          We’d love to hear from you! Fill out the form below or reach out directly.
        </p>

        {/* Contact Form */}
        <form className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition text-sm sm:text-base"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition text-sm sm:text-base"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="3"
              required
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition text-sm sm:text-base"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info Section */}
        <div className="mt-8 sm:mt-10">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-5 sm:mb-6">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-gray-700">
            {/* Phone */}
            <div className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-lg shadow hover:shadow-md transition">
              <div className="bg-blue-100 text-blue-600 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                <FaPhone className="text-lg sm:text-xl" />
              </div>
              <p className="font-medium text-sm sm:text-base">Phone</p>
              <p className="text-xs sm:text-sm mt-1">+91 9462226757</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-lg shadow hover:shadow-md transition">
              <div className="bg-blue-100 text-blue-600 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                <FaEnvelope className="text-lg sm:text-xl" />
              </div>
              <p className="font-medium text-sm sm:text-base">Email</p>
              <p className="text-xs sm:text-sm mt-1">akw17439@gmail.com</p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-lg shadow hover:shadow-md transition">
              <div className="bg-blue-100 text-blue-600 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                <FaMapMarkedAlt className="text-lg sm:text-xl" />
              </div>
              <p className="font-medium text-sm sm:text-base">Address</p>
              <p className="text-xs sm:text-sm mt-1 text-center">
                302016 Jaipur,<br /> Rajasthan, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
