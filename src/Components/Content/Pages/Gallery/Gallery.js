import React, { useState, useEffect } from "react";
import GalleryLightbox from "./GalleryLightbox";
import GalleryUtils from "./GalleryUtils";
import { Helmet } from "react-helmet";
import { PageTitle } from "../../../GlobalTheme/globalStyles";
import SectionIntro from "../../SectionIntro";
import { Image, Transformation } from "cloudinary-react";
import styled from "styled-components/macro";
import contentfulClient from "../../../../contentfulSetup";

const Gallery = props => {
  const [sectionIntro, setSectionIntro] = useState("");
  const [galleryLbToggle, setGalleryLbToggle] = useState(false);
  const [curImgSlug, setCurImgSlug] = useState("");
  const [curImgName, setCurImgName] = useState("");
  const [imgArr, setImgArr] = useState([]);

  useEffect(() => {
    contentfulClient
      .getEntries({
        content_type: "portfolioGalleryImage"
      })
      .then(response => {
        setImgArr(response.items);
      })
      .catch(console.error);
    contentfulClient
      .getEntry("2HRG6pvWrGKrMYuZ5kjLLO")
      .then(entry => {
        setSectionIntro(entry.fields.intro);
      })
      .catch(console.error);
  }, []);

  const GalleryContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 25px;
    margin: 50px 0 0;
    padding: 0;
    list-style-type: none;
    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
    @media screen and (min-width: 1200px) {
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      grid-gap: 50px;
    }
  `;

  const GalleryImgStyles = styled.div`
    position: relative;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
    overflow-y: hidden;
    img {
      width: 100%;
      display: block;
    }
  `;

  const galleryList = imgArr.map(img => {
    const imgSlug = img.fields.image[0].public_id;
    const imgName = img.fields.name;
    const imgDesc = img.fields.testimonial;

    return (
      <li key={imgSlug}>
        <GalleryImgStyles>
          <Image cloudName="aschoen" publicId={imgSlug} alt={imgName}>
            <Transformation
              fetchFormat="auto"
              quality="70"
              crop="scale"
              width="600"
            />
          </Image>
          <GalleryUtils
            setGalleryLbToggle={setGalleryLbToggle}
            setCurImgName={setCurImgName}
            setCurImgSlug={setCurImgSlug}
            imgSlug={imgSlug}
            imgName={imgName}
            imgDesc={imgDesc}
          />
        </GalleryImgStyles>
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
      <SectionIntro>{sectionIntro}</SectionIntro>
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
