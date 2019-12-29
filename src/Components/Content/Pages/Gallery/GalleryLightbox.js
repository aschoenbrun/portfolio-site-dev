import React, { useEffect, useRef } from "react";
import styled from "styled-components/macro";

const GalleryLightbox = props => {
  const GalleryLightboxStyles = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    transition: 0.25s;
    display: none;
    &.open {
      display: block;
    }
  `;

  let lbOpacity = useRef("");

  useEffect(() => {
    if (props.galleryLbToggle) {
      lbOpacity.current.classList.add("open");
    }
  }, [props.galleryLbToggle]);
  return (
    <GalleryLightboxStyles
      ref={lbOpacity}
      id="gallery-lightbox"
    ></GalleryLightboxStyles>
  );
};

export default GalleryLightbox;
