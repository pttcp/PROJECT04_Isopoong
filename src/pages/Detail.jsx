import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import Header from "./Header";
import KakaoMap from "./map";
import Footer from "./Footer";
import { useState } from "react";

function Detail() {
  let allLocal = useSelector((state) => state.allLocal);
  // console.log(allLocal);
  // console.log(allLocal[0].시설명);

  let { id } = useParams();
  // console.log(id);

  let detailItem = allLocal.find((item) => {
    return item.시설명 === id;
  });
  console.log(detailItem);

  let similarItem = allLocal.filter(
    (a) => a["시도 명칭"] === detailItem["시도 명칭"]
  );
  // console.log(similarItem);

  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  // let randomItem = getRandomItem(similarItem);
  // console.log(randomItem);
  let randomItems = [];
  for (let i = 0; i < 3; i++) {
    randomItems.push(getRandomItem(similarItem));
  }
  // console.log(randomItems[0].시설명);

  let [hospital, setHospital] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList?serviceKey=XY7k7XpDdE11UozKWiGruxSLQBifd%2FzwdWRHLAOKCKdLS21xOsYuKRU9hE3Gm%2FzvUp8xesNphb9zZHkOj7ul%2FA%3D%3D&pageNo=1&numOfRows=375&_type=json"
      )
      .then((res) => {
        let result = res.data.response.body.items.item;
        console.log(result);

        let localHospital = result.filter((b) => {
          return (
            detailItem["시도 명칭"] &&
            detailItem["시도 명칭"].includes(b["sidoCdNm"])
          );
        });
        console.log(localHospital);
        // let localHospital = result.filter((b)=>{})
        // setHospital(res.data.response.body.items.item);
      });
  });

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
        <Link to="/Facility" className="beforePage">
          <i className="fa-solid fa-chevron-left"></i> 목록으로
        </Link>
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

        <h3>해당지역 다른 시설</h3>
        <table className="commonTable similar_table">
          <thead>
            <tr>
              <th>지역</th>
              <th>시설명</th>
              <th>주소</th>
              <th>전화번호</th>
              <th>유아동반 가능 여부</th>
            </tr>
          </thead>
          <tbody>
            {randomItems.map((item) => {
              return (
                <tr key={item.시설명}>
                  <td className="fac_local">{item["시도 명칭"]}</td>
                  <td className="fac_name">
                    {item["시설명"]}
                    <Link to={`/Detail/${item.시설명}`}></Link>
                  </td>
                  <td className="fac_address">{item["도로명주소"]}</td>
                  <td className="fac_phone">{item["전화번호"]}</td>
                  <td className="fac_kids">{item["키즈존 여부"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* <h3>해당지역 종합 병원</h3> */}
      </section>

      <Footer></Footer>
    </section>
  );
}

export default Detail;
