import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Detail from "./Detail";

import Pagination from "./Pagination";

function KidsTable({ local, tab }) {
  let [newlist, setNewlist] = useState([]);
  // pg 추가
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(10);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [tab]);
  useEffect(() => {
    filterList("전체");
  }, [local]);

  function filterList(category) {
    if (category === "전체") {
      setNewlist(local);
    } else setNewlist(local.filter((a) => a.카테고리2 === category));
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = newlist.slice(indexOfFirstItem, indexOfLastItem);

  // console.log(currentData);

  return (
    <section className="KidsTable">
      <nav className="lnb">
        <button
          onClick={() => {
            filterList("전체");
          }}
        >
          전체
        </button>
        <button
          onClick={() => {
            filterList("전시/기념관");
          }}
        >
          전시/기념관
        </button>
        <button
          onClick={() => {
            filterList("영화/연극/공연");
          }}
        >
          영화/연극/공연
        </button>
        <button
          onClick={() => {
            filterList("관광지");
          }}
        >
          관광지
        </button>
        <button
          onClick={() => {
            filterList("명승지");
          }}
        >
          명승지
        </button>
      </nav>
      <div className="tableset">
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
            {currentData.map((item) => {
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
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={newlist.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      {/* {local.length} / {newlist.length} / {currentData.length} */}
    </section>
  );
}

export default KidsTable;
