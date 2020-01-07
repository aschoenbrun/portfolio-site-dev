import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/macro";
import { globalColors } from "../../../GlobalTheme/globalStyles";
import { FaSearchPlus, FaCommentMedical, FaCommentSlash } from "react-icons/fa";

// use props to have cond styling bet 1 & 2 buttons
const GalleryImgUtilStyles = styled.div`
  position: absolute;
  bottom: 0;
  display: grid;
  grid-template-columns: ${props =>
    props.imgDesc ? "1fr auto auto" : "1fr auto"};
  grid-gap: 4px;
  width: calc(100% - 8px);
  margin: 0 4px;
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

const GalleryUtilBtnStyles = styled.button`
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
  &:focus,
  &.open {
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
  ${props => (props.imgDesc ? "grid-column: 1 / 4" : "grid-column: 1 / 3")};
  background-color: rgba(0, 0, 0, 0.75);
  max-height: 0;
  &.open {
    max-height: 100%;
    margin-bottom: 4px;
  }
  p {
    margin: 7px 13px;
    font-size: 13px;
    line-height: 1.65rem;
    font-weight: 300;
    font-style: italic;
    color: white !important;
    text-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.75);
  }
`;

const GalleryUtils = props => {
  const [galleryDescToggle, setGalleryDescToggle] = useState(false);
  const descClass = useRef("");
  const descToggleClass = useRef("");

  useEffect(() => {
    if (galleryDescToggle) {
      descClass.current.classList.add("open");
      if (props.imgDesc) {
        descToggleClass.current.classList.add("open");
      }
    } else {
      descClass.current.classList.remove("open");
      if (props.imgDesc) {
        descToggleClass.current.classList.remove("open");
      }
    }
  }, [galleryDescToggle, props.imgDesc]);

  const GalleryTestimonialBtn = () => {
    if (props.imgDesc) {
      const GalleryTestimonialIcon = () => {
        if (!galleryDescToggle) {
          return <FaCommentMedical />;
        } else {
          return <FaCommentSlash />;
        }
      };
      return (
        <GalleryUtilBtnStyles
          ref={descToggleClass}
          onClick={() => {
            setGalleryDescToggle(!galleryDescToggle);
          }}
        >
          <GalleryTestimonialIcon />
        </GalleryUtilBtnStyles>
      );
    } else {
      return "";
    }
  };
  const GalleryDesc = () => {
    if (props.imgDesc) {
      return (
        <GalleryDescStyles ref={descClass} imgDesc={props.imgDesc}>
          <p>{props.imgDesc}</p>
        </GalleryDescStyles>
      );
    } else {
      return <GalleryDescStyles ref={descClass} />;
    }
  };

  return (
    <GalleryImgUtilStyles>
      <GalleryNameStyles>{props.imgName}</GalleryNameStyles>
      <GalleryTestimonialBtn />
      <GalleryUtilBtnStyles
        onClick={() => {
          props.setGalleryLbToggle(true);
          props.setCurImgName(props.imgName);
          props.setCurImgSlug(props.imgSlug);
        }}
      >
        <FaSearchPlus />
      </GalleryUtilBtnStyles>
      <GalleryDesc
        imgDesc={props.imgDesc}
        galleryDescToggle={galleryDescToggle}
      />
    </GalleryImgUtilStyles>
  );
};

export default GalleryUtils;
