import { useState } from "react";

// import MyPagination from "./Pagination";

function KidsTable({ local }) {
  // pg 추가
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(20);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
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
          {local.map((item, i) => {
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

      {local.length}

      {/* <MyPagination /> */}
    </>
  );
}

export default KidsTable;
