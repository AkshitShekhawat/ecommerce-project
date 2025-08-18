import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCcStripe } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmazonPay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">E-Shop</h2>
          <p className="text-sm leading-6">
            Your one-stop destination for quality products at the best prices. 
            Shop with confidence and enjoy seamless delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Support</h3>
          <ul className="space-y-2">
            <li><a href="/shipping" className="hover:text-white">Shipping & Returns</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="/support" className="hover:text-white">Help Center</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
          <p className="text-sm mb-3">Subscribe to get updates on new arrivals & special offers.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-1 py-2 rounded-l-md focus:outline-none text-white-800"
            />
            <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-r-md text-white font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center text-sm">
        
        {/* Copyright */}
        <p className="text-gray-400">© {new Date().getFullYear()} E-Shop. All rights reserved.</p>
        
        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-white"><FaFacebookF /></a>
          <a href="https://x.com/DevNLearn" target="_blank" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/akshit-singh-shekhawat/" target="_blank" className="hover:text-white"><FaLinkedinIn /></a>
        </div>

        {/* Payment Icons */}
        <div className="flex space-x-3 mt-4 sm:mt-0">  
          <FaCcVisa size={28} />
          <FaCcStripe size={28} />
          <FaCcMastercard size={28} />
          <FaCcPaypal size={28} />
          <FaCcAmazonPay size={28} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
