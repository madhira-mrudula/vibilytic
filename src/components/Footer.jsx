import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => {
 
  return (
    <footer className="bg-gray-200 text-purple-500 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About</h3>
          <p className="text-sm">
            We connect influencers with brands to create meaningful collaborations that drive results and engagement.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@yourbrand.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Creator St, Los Angeles, CA</li>
          </ul>
        </div>

        {/* Privacy */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Privacy</h3>
          <ul className="space-y-2 text-sm">
            <li> <Link to="/privacy" ><p className="hover:underline cursor-pointer">Privacy Policy</p></Link></li>
            <li><Link to="/Terms-conditions"><p>Terms of Service</p></Link></li>
            <li><Link to="/refund-policy"><p>Refund Policy</p></Link></li>
            <li><Link to="/Faq"><p>FAQ</p></Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div> */}
    </footer>
  );
};

export default Footer;
