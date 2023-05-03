import { useSelector } from "react-redux";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

function ReviewCard() {
  let reviewData = useSelector((state) => state.reviewData);
  console.log(reviewData[2].name);

  return (
    <section className="reviewCard">
      <Swiper
        slidesPerView={4}
        spaceBetween={32}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="slide1"
      >
        {reviewData.map((a, i) => {
          return (
            <SwiperSlide key={i} className="reviewSlide">
              <div className="rCon">
                <div className="rImg">
                  <img src={`${process.env.PUBLIC_URL}${a.img}`} alt={a.id} />
                </div>
                <div className="rSite">
                  <span>{a.site}</span>
                  <span>{a.rating}</span>
                </div>
                <p className="rTitle">{a.title}</p>
                <p className="rName">{a.name}</p>
                {/* <Link to={}>자세히</Link> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-button-next next1"></div>
      <div className="swiper-button-prev prev1"></div>
    </section>
  );
}

export default ReviewCard;
