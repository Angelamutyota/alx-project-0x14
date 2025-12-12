import React from "react";

interface MovieCardProps {
  title: string;
  image?: string;
  year?: string | number;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, image, year }) => {
  return (
    <div className="border rounded p-3 shadow-sm bg-white">
      {image && <img src={image} alt={title} className="w-full h-60 object-cover rounded" />}
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      {year && <p className="text-sm text-gray-500">{year}</p>}
    </div>
  );
};

export default MovieCard;
