import React from "react";

interface LayoutButtonProps {
  text: string;
  onClick?: () => void;
}

const LayoutButton: React.FC<LayoutButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 border border-gray-700 text-gray-700 hover:bg-gray-100 rounded"
    >
      {text}
    </button>
  );
};

export default LayoutButton;
