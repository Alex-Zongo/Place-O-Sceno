import React, { useEffect, useState } from "react";

import "./GalleryItems.css";

import ImageGallery from "react-image-gallery";
import sanityClient from "../client.js";

function GalleryItems() {
  const [imageItems, setImageItems] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="gallery"]{
        title,
        publishedAt,
        image{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) =>
        setImageItems(
          data.map((doc) => ({
            original: doc.image.asset.url,
            originalAlt: doc.image.alt,
            thumbnail: doc.image.asset.url,
            description: doc.title,
            publishedAt: doc.publishedAt,
          }))
        )
      )
      .catch(console.error);
  }, []);

  console.log(imageItems);

  return (
    <div className="gallery">
      <h1>Phototèque</h1>
      <br />
      <hr />
      <br />
      <ImageGallery items={imageItems} autoPlay={true} showPlayButton={false} slideInterval={10000} showThumbnails={false} />
    </div>
  );
}

export default GalleryItems;
