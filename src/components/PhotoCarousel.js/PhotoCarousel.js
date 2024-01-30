import React from "react";
import PhotoAlbum from "react-photo-album";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photos from "./photo";

const CarouselComponent = ({ photos }) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {photos.map((photo, index) => (
        <div key={index}>
          <img src={photo.src} alt={photo.caption} style={{ width: "100%", height: "6rem" }} />
        </div>
      ))}
    </Slider>
  );
};

export default function PhotoCarousel() {
  return (
    <>
      <CarouselComponent photos={photos} />
      {/* <PhotoAlbum photos={photos} layout="masonry" /> */}
    </>
  );
}
