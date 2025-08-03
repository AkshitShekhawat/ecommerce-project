import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-gradient-to-r from-blue-100 via-white to-pink-100">
      <div className="backdrop-blur-md bg-white/60 shadow-xl rounded-2xl p-8 w-full max-w-2xl border border-gray-200">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-8">
          We’d love to hear from you! Fill out the form below or reach out directly.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10">
  <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
    Contact Information
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
    {/* Phone */}
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-md transition">
      <div className="bg-blue-100 text-blue-600 p-3 rounded-full mb-3">
        <FaPhone className="text-xl" />
      </div>
      <p className="font-medium">Phone</p>
      <p className="text-sm mt-1">+91 9462226757</p>
    </div>

    {/* Email */}
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-md transition">
      <div className="bg-blue-100 text-blue-600 p-3 rounded-full mb-3">
        <FaEnvelope className="text-xl" />
      </div>
      <p className="font-medium">Email</p>
      <p className="text-sm mt-1">akw17439@gmail.com</p>
    </div>

    {/* Location */}
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-md transition">
      <div className="bg-blue-100 text-blue-600 p-3 rounded-full mb-3">
        <FaMapMarkedAlt className="text-xl" />
      </div>
      <p className="font-medium">Address</p>
      <p className="text-sm mt-1 text-center">
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

//plz reduce overall size of this contact box 