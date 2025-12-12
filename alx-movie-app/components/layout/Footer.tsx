import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-4 text-center mt-10">
      <p>CineSeek © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
