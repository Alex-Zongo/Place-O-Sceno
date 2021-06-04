import React from "react";
import { Link } from "react-router-dom";

function PublishItemTemplate({ path, index, coverImage, alt, title, date }) {
  return (
    <Link to={path} className="mr-8 mb-8 shadow-xl">
      <span
        className="block h-64 relative rounded shadow-xl leading-snug bg-black border-l-8 border-yellow-400"
        key={index}
      >
        <img
          src={coverImage}
          alt={alt}
          className="w-full h-full rounded-r object-cover absolute"
        />
        <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
          <h3 className="text-white text-lg font-blog px-3 py-4 bg-green-400 text-gray bg-opacity-90 rounded">
            {title} -
            <span className="font-bold text-xs space-x-4">
              {new Date(date).toLocaleDateString()}
            </span>
          </h3>
        </span>
      </span>
    </Link>
  );
}

export default PublishItemTemplate;
