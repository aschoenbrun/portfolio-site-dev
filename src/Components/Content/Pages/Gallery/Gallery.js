import React from "react";
import { Helmet } from "react-helmet";
import { PageTitle } from "../../../GlobalTheme/globalStyles";
import galleryImgs from "./galleryImageImport";
import { Image, Transformation } from "cloudinary-react";
import styled from "styled-components/macro";

const Gallery = props => {
  const GalleryContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    grid-gap: 50px;
    margin: 0;
    padding: 0;
    list-style-type: none;
  `;

  const GalleryImgStyles = styled.div`
    position: relative;
    img {
      width: 100%;
    }
  `;

  const GalleryNameStyles = styled.h2`
    position: absolute;
    bottom: 0;
    font-size: 20px;
    font-weight: 300;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0;
    padding: 7px 13px;
    color: white;
  `;

  const GalleryDescStyles = styled.div`
    font-size: 12px;
    font-weight: 100;
  `;

  const galleryList = galleryImgs.map(img => {
    return (
      <li key={img.slug}>
        <GalleryImgStyles>
          <Image
            cloudName="aschoen"
            publicId={`AYS Portfolio Site Images/${img.slug}`}
            alt={img.name}
          >
            <Transformation
              fetchFormat="auto"
              quality="70"
              crop="scale"
              width="600"
            />
          </Image>
          <GalleryNameStyles>{img.name}</GalleryNameStyles>
        </GalleryImgStyles>
        <GalleryDescStyles>{img.desc}</GalleryDescStyles>
      </li>
    );
  });

  return (
    <>
      <Helmet>
        <title>UI/UX Gallery - Avi Schoenbrun</title>
        <link rel="canonical" href="https://aysportfolio/contact" />
      </Helmet>
      <PageTitle>UI/UX Gallery</PageTitle>
      <GalleryContainer>{galleryList}</GalleryContainer>
    </>
  );
};

export default Gallery;
