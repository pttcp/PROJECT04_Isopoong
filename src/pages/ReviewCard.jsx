import { useSelector } from "react-redux";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

function ReviewCard() {
  let reviewData = useSelector((state) => state.reviewData);
  console.log(reviewData[2].name);

  return (
    <section className="reviewCard">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviewData.map((a, i) => {
          return (
            <SwiperSlide key={i} className="reviewSlide">
              <div className="rCon">
                <div className="rImg">
                  <img
                    src={`${process.env.PUBLIC_URL}${a.img}`}
                    alt="review1"
                  />
                </div>
                <div className="rSite">
                  <span>{a.site}</span>
                  <span>{a.rating}</span>
                </div>
                <p className="rTitle">{a.title}</p>
                <p className="rName">{a.name}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default ReviewCard;
