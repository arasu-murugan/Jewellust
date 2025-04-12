import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t bg-sky-100 p-6">
      <div className="container mx-auto grid gap-6 text-center lg:text-left lg:grid-cols-3">
        
        {/* Contact Details */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-yellow-700">Contact</h2>
          <p>📞 +91 94431 86440</p>
          <p>📞 +91 72370 01188</p>
          <p>📧 mahajewel@gmail.com</p>
        </div>

        {/* Address and Embedded Map */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-yellow-700">Location</h2>
          <p>
            No.386, Gandhi Salai, Vettavalam,<br />
            Thiruvannamalai (DT) 638095
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3781.7296445425254!2d79.2451908660987!3d12.109469860500582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacb11e20ecb133%3A0xa3934bad7a563095!2sSri%20Mahalakshmi%20Jewellery!5e0!3m2!1sen!2sin!4v1739599779369!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sri Mahalakshmi Jewellery Map"
          ></iframe>
        </div>

        {/* Social Media */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-yellow-700">Follow Us</h2>
          <div className="flex items-center gap-4 justify-center lg:justify-start text-2xl">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-6 text-center text-sm text-gray-600">
        © All Rights Reserved 2025. Sri Mahalakshmi Jewellery
      </div>
    </footer>
  );
};

export default Footer;
