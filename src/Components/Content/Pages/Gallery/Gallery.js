import React from "react";
import ImageGallery from "react-image-gallery";
import galleryImgs from "./galleryImageImport";

const Gallery = props => {
  const galleryImageArr = [];

  // TOD: Just make a grid with fullscreen zoom!!!

  galleryImgs.map(img => {
    galleryImageArr.push({
      original: img.original,
      thumbnail: img.size150,
      imageSet: [
        {
          srcset: img.size1150,
          media: "(max-width: 1200px)"
        },
        {
          srcset: img.size750,
          media: "(max-width: 768px)"
        },
        {
          srcset: img.size300,
          media: "(max-width: 450px)"
        }
      ]
    });
    return galleryImageArr;
  });

  return <ImageGallery items={galleryImageArr} />;
};

export default Gallery;
