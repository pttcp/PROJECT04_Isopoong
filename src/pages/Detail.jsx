import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Header from "./Header";
import KakaoMap from "./map";

function Detail() {
  let allLocal = useSelector((state) => state.allLocal);
  // console.log(allLocal);
  // console.log(allLocal[0].시설명);

  let { id } = useParams();
  // console.log(id);

  // const decodedId = decodeURIComponent(id);
  // const detailItem = dataset.find((item) => {
  //   const eachId = `${item["시도 명칭"]}-${item["시설명"]}`;
  //   return eachId === decodedId;
  // });
  // console.log(detailItem);

  let detailItem = allLocal.find((item) => {
    return item.시설명 === id;
  });
  console.log(detailItem);

  return (
    <section className="detail">
      <Header />
      <div className="breadcrumb">
        <Link to="/">
          <i className="fa-solid fa-house"></i>
        </Link>
        <i className="fa-solid fa-angles-right"></i>
        <Link to="/Facility">시설소개</Link>
      </div>

      <section className="sec_detail mw2">
        <h2>{detailItem["시설명"]}</h2>
        <div className="place">
          <div className="place_map">
            <KakaoMap detailItem={detailItem} />
          </div>
          <div className="place_desc">
            <p>
              <span>시설유형</span>
              <span>{detailItem["카테고리2"]}</span>
            </p>
            <p>
              <span>홈페이지</span>
              <span>{detailItem["홈페이지"]}</span>
            </p>
            <p>
              <span>주소</span>
              <span>{detailItem["도로명주소"]}</span>
            </p>
            <p>
              <span>운영시간</span>
              <span>{detailItem["운영시간"]}</span>
            </p>
            <p>
              <span>휴무일</span>
              <span>{detailItem["휴무일"]}</span>
            </p>
            <p>
              <span>입장가능 나이</span>
              <span>{detailItem["입장 가능 나이"]}</span>
            </p>
            <p>
              <span>특이사항</span>
              <span>
                {detailItem["입장료 유무 여부"]} /{" "}
                {detailItem["무료주차 가능여부"]} / {detailItem["키즈존 여부"]}{" "}
                / {detailItem["유모차 대여 여부"]} /{" "}
                {detailItem["수유실 보유 여부"]} /{" "}
                {detailItem["가족 화장실 보유 여부"]}
              </span>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Detail;
