import React, { useEffect, useRef } from "react";
import styled from "styled-components/macro";
import { FaTimes } from "react-icons/fa";
import { Image, Transformation } from "cloudinary-react";
import { globalColors } from "../../../GlobalTheme/globalStyles";

// TODO: 1. Gallery in App.js  2. Lift appropriate states

const GalleryLightbox = props => {
  const GalleryLightboxStyles = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 5000;
    background-color: rgba(0, 0, 0, 0.9);
    transition: 0.25s;
    display: none;
    padding: 20px;
    img {
      width: 100%;
      height: auto;
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
    }
    &.open {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #close-gallery-btn {
      position: absolute;
      top: 0;
      right: 0;
      color: ${globalColors.yellow};
      text-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.75);
      background-color: rgba(0, 0, 0, 0.65);
      transition: 0.5s;
      font-size: 23px;
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
      &,
      &:hover,
      &:focus {
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: none;
        padding: 5px;
      }
      &:hover,
      &:focus {
        color: ${globalColors.yellowLT};
        text-shadow: 0px 0.25px 2px rgba(0, 0, 0, 0.75);
        background-color: rgba(0, 0, 0, 0.75);
        font-size: 20px;
      }
      &:active {
        text-shadow: 0px 0.1px 1px rgba(0, 0, 0, 0.75);
      }
    }
    #gallery-img-name {
      position: absolute;
      bottom: 0;
      margin: 0;
      padding: 5px 5px 7px;
      width: 100%;
      text-align: center;
      color: white;
      font-weight: 400;
      font-size: 13px;
      background-color: rgba(0, 0, 0, 0.75);
      text-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.75);
    }
  `;

  let lbOpacity = useRef("");

  useEffect(() => {
    if (props.galleryLbToggle) {
      lbOpacity.current.classList.add("open");
    }
  }, [props.galleryLbToggle]);
  return (
    <GalleryLightboxStyles ref={lbOpacity} id="gallery-lightbox">
      <Image
        cloudName="aschoen"
        publicId={`AYS Portfolio Site Images/${props.curImgSlug}`}
        alt={props.curImgName}
      >
        <Transformation
          fetchFormat="auto"
          quality="70"
          crop="scale"
          width="1920"
        />
      </Image>
      <button
        id="close-gallery-btn"
        onClick={() => {
          props.setGalleryLbToggle(false);
        }}
      >
        <FaTimes />
      </button>
      <h2 id="gallery-img-name">{props.curImgName}</h2>
    </GalleryLightboxStyles>
  );
};

export default GalleryLightbox;
