import React, { useState } from "react";
import GalleryLightbox from "./GalleryLightbox";
import { Helmet } from "react-helmet";
import { PageTitle } from "../../../GlobalTheme/globalStyles";
import galleryImgs from "./galleryImageImport";
import { Image, Transformation } from "cloudinary-react";
import styled from "styled-components/macro";
import { globalColors } from "../../../GlobalTheme/globalStyles";
import { FaSearchPlus } from "react-icons/fa";

const Gallery = props => {
  const [galleryLbToggle, setGalleryLbToggle] = useState(false);
  const [curImgSlug, setCurImgSlug] = useState("");
  const [curImgName, setCurImgName] = useState("");

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
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
    img {
      width: 100%;
      display: block;
    }
  `;

  const GalleryImgUtilStyles = styled.div`
    position: absolute;
    bottom: 0;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 4px;
    width: 100%;
  `;

  const GalleryNameStyles = styled.h2`
    padding: 7px 13px;
    background-color: rgba(0, 0, 0, 0.65);
    text-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.75);
    font-size: 20px;
    font-weight: 300;
    margin: 0;
    color: white;
  `;

  const GalleryLbBtnStyles = styled.button`
    color: ${globalColors.yellow};
    text-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.75);
    background-color: rgba(0, 0, 0, 0.65);
    transition: 0.5s;
    font-size: 20px;
    &,
    &:hover,
    &:focus {
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: none;
      padding: 0 10px;
    }
    &:hover,
    &:focus {
      color: ${globalColors.yellowLT};
      text-shadow: 0px 0.25px 2px rgba(0, 0, 0, 0.75);
      background-color: rgba(0, 0, 0, 0.75);
      font-size: 23px;
    }
    &:active {
      text-shadow: 0px 0.1px 1px rgba(0, 0, 0, 0.75);
    }
  `;

  const GalleryDescStyles = styled.div`
    font-size: 12px;
    font-weight: 100;
  `;

  const galleryList = galleryImgs.map((img, index) => {
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
          <GalleryImgUtilStyles>
            <GalleryNameStyles>{img.name}</GalleryNameStyles>
            <GalleryLbBtnStyles
              onClick={() => {
                setGalleryLbToggle(true);
                setCurImgName(img.name);
                setCurImgSlug(img.slug);
              }}
            >
              <FaSearchPlus />
            </GalleryLbBtnStyles>
          </GalleryImgUtilStyles>
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
      <GalleryLightbox
        galleryLbToggle={galleryLbToggle}
        setGalleryLbToggle={setGalleryLbToggle}
        curImgName={curImgName}
        curImgSlug={curImgSlug}
      />
    </>
  );
};

export default Gallery;
