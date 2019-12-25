import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import galleryImgs from "./galleryImageImport";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = props => {
  const galleryImageArr = [];

  const [galleryState, setGalleryState] = useState({
    showPlayButton: false,
    showGalleryPlayButton: false
  });

  galleryImgs.map(img => {
    galleryImageArr.push({
      original: img.original,
      thumbnail: img.size150,
      imageSet: [
        {
          srcSet: `${img.size1150} 1150w`,
          media: "(max-width: 1200px)"
        },
        {
          srcSet: `${img.size750} 750w`,
          media: "(max-width: 768px)"
        },
        {
          srcSet: `${img.size300} 300w`,
          media: "(max-width: 450px)"
        }
      ]
    });
    return galleryImageArr;
  });

  return (
    <ImageGallery
      showPlayButton={
        galleryState.showPlayButton && galleryState.showGalleryPlayButton
      }
      items={galleryImageArr}
    />
  );
};

export default Gallery;
