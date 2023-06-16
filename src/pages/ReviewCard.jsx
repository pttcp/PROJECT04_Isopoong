import { useSelector } from "react-redux";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ReviewModal from "./ReviewModal";
import { Modal, Button } from "react-bootstrap";

function ReviewCard() {
  let reviewData = useSelector((state) => state.reviewData);
  console.log(reviewData[2].name);

  let [showModal, setShowModal] = useState(false);
  let [modalData, setModalData] = useState({});

  let handleSlideClick = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  return (
    <section className="reviewCard">
      <Swiper
        slidesPerView={4}
        spaceBetween={32}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="slide1"
      >
        {reviewData.map((a, i) => {
          return (
            <SwiperSlide
              key={i}
              className="reviewSlide"
              onClick={() => handleSlideClick(a)}
            >
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
                {/* <ReviewModal /> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-button-next next1"></div>
      <div className="swiper-button-prev prev1"></div>

      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal_img">
            <img
              src={`${process.env.PUBLIC_URL}${modalData.img}`}
              alt={modalData.id}
            />
          </div>
          <div className="modal_detail">
            <div>
              <span>{modalData.site}</span>
              <span>{modalData.rating}</span>
            </div>
            <p>{modalData.title}</p>
            <p>{modalData.name}</p>
            <p>{modalData.text}</p>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default ReviewCard;
