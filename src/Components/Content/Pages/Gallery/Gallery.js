import React from "react";
import { Helmet } from "react-helmet";
import { PageTitle } from "../../../GlobalTheme/globalStyles";
// import ImageGallery from "react-image-gallery";
// import galleryImgs from "./galleryImageImport";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = props => {
  const galleryImgs = [
    {
      name: "20s and 30s",
      img: "gImg-20s-and-30s_ghj9zc"
    },
    {
      name: "Absolute Earth",
      img: "gImg-Absolute-Earth_fluao8"
    }
  ];

  galleryImgs.map(img => {
    
  });

  return (
    <>
      <Helmet>
        <title>UI/UX Gallery - Avi Schoenbrun</title>
        <link rel="canonical" href="https://aysportfolio/contact" />
      </Helmet>
      <PageTitle>UI/UX Gallery</PageTitle>
      <CloudinaryContext cloudName="aschoen"></CloudinaryContext>
    </>
  );
};

  // const galleryImageArr = [];

  // const galleryState = useState({
  //   showPlayButton: false,
  //   showGalleryPlayButton: false
  // });

  // galleryImgs.map(img => {
  //   galleryImageArr.push({
  //     original: img.original,
  //     thumbnail: img.size150,
  //     originalAlt: `Portfolio sample: ${img.name}`,
  //     description: img.name,
  //     imageSet: [
  //       {
  //         srcSet: `${img.size1150} 1150w`,
  //         media: "(max-width: 1200px)"
  //       },
  //       {
  //         srcSet: `${img.size800} 750w`,
  //         media: "(max-width: 768px)"
  //       },
  //       {
  //         srcSet: `${img.size450} 300w`,
  //         media: "(max-width: 450px)"
  //       }
  //     ]
  //   });
  //   return galleryImageArr;
  // });

  // galleryImgs.map(img => {
  //   galleryImageArr.push({
  //     original: img.original,
  //     thumbnail: img.size150,
  //     originalAlt: `Portfolio sample: ${img.name}`,
  //     description: img.name,
  //     imageSet: [
  //       {
  //         srcSet: `${img.size1150} 1150w`,
  //         media: "(max-width: 1200px)"
  //       },
  //       {
  //         srcSet: `${img.size800} 750w`,
  //         media: "(max-width: 768px)"
  //       },
  //       {
  //         srcSet: `${img.size450} 300w`,
  //         media: "(max-width: 450px)"
  //       }
  //     ]
  //   });
  //   return galleryImageArr;
  // });

export default Gallery;
