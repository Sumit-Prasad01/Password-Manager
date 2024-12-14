import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-green-600">&lt;</span>
          <span>Pass</span>
          <span className="text-green-600">OP/&gt;</span>. All rights reserved.
        </p>
        <nav className="mb-4">
          <ul className="flex justify-center space-x-6">
            <li className=" hover:text-green-400">
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className=" hover:text-green-400">
              <a href="/terms-of-service" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li className=" hover:text-green-400">
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center space-x-4">
          <a
            href="https://twitter.com/youraccount"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 flex gap-1"
          >
            <img
              className="w-6 rounded-lg"
              src="icons/twitter.png"
              alt="twitter-image"
            />
            Twitter
          </a>
          <a
            href="https://facebook.com/youraccount"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 flex gap-1"
          >
            <img
              className="w-6 rounded-lg"
              src="icons/facebook.png"
              alt="facebook-image"
            />
            Facebook
          </a>
          <a
            href="https://linkedin.com/in/youraccount"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 flex gap-1"
          >
            <img
              className="w-6 rounded-lg"
              src="icons/linkedin.png"
              alt="linkedin-image"
            />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
