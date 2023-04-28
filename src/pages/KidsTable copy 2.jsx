import { useEffect } from "react";
import { useState } from "react";

import Pagination from "./Pagination";

function KidsTable({ local, tab }) {
  // pg 추가
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(20);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = local.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [tab]);

  // sorting
  console.log(local);
  let [newlist, setNewlist] = useState(local);
  // console.log(newlist);
  let gallery = local.filter((a) => a.카테고리2 === "전시/기념관");
  let movie = local.filter((a) => a.카테고리2 === "영화/연극/공연");
  let tour = local.filter((a) => a.카테고리2 === "관광지");
  let famous = local.filter((a) => a.카테고리2 === "명승지");
  // console.log(famous);

  return (
    <>
      <nav>
        <button
          onClick={() => {
            setNewlist(local);
          }}
        >
          전체
        </button>
        <button
          onClick={() => {
            setNewlist(gallery);
          }}
        >
          전시/기념관
        </button>
        <button
          onClick={() => {
            setNewlist(movie);
          }}
        >
          영화/연극/공연
        </button>
        <button
          onClick={() => {
            setNewlist(tour);
          }}
        >
          관광지
        </button>
        <button
          onClick={() => {
            setNewlist(famous);
          }}
        >
          명승지
        </button>
      </nav>
      <table className="facility_table">
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
          {currentData.map((item, i) => {
            return (
              <tr key={i}>
                <td className="fac_local">{item["시도 명칭"]}</td>
                <td className="fac_name">{item["시설명"]}</td>
                <td className="fac_address">{item["도로명주소"]}</td>
                <td className="fac_phone">{item["전화번호"]}</td>
                <td className="fac_kids">{item["키즈존 여부"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={local.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {local.length}
    </>
  );
}

export default KidsTable;
