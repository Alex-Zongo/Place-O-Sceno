import React from "react";

function GalleryItem({ src, description, name }) {
  return (
    <div className="gallery__item">
      <img src={src} alt="" />
      <div className="gallery__itemDesc">
        {name && (
          <p>
            <em>{name}</em>{" "}
          </p>
        )}
        <hr />
        {description && <p> {description} </p>}
      </div>
    </div>
  );
}

export default GalleryItem;
