import React from "react";

const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber === currentPage) return; // 현재 페이지와 같은 페이지를 클릭한 경우 처리하지 않음

    onPageChange(pageNumber);
  };

  const renderPageButtons = () => {
    const buttons = [];

    // 첫 번째 페이지 번호
    const firstPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
    // 마지막 페이지 번호
    const lastPage = Math.min(firstPage + 9, totalPages);

    // 맨 앞으로 이동 버튼
    buttons.push(
      <li key="first" className="page-item">
        <button
          className="page-link"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(1)}
        >
          <i className="fa-solid fa-angles-left"></i>
        </button>
      </li>
    );

    // 이전 10개 페이지 버튼
    buttons.push(
      <li key="prev" className="page-item">
        <button
          className="page-link"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(firstPage - 1)}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      </li>
    );

    // 페이지 번호 버튼
    for (let pageNumber = firstPage; pageNumber <= lastPage; pageNumber++) {
      buttons.push(
        <li key={pageNumber} className="page-item">
          <button
            className={`page-link ${
              currentPage === pageNumber ? "active" : ""
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        </li>
      );
    }

    // 다음 10개 페이지 버튼
    buttons.push(
      <li key="next" className="page-item">
        <button
          className="page-link"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(lastPage + 1)}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </li>
    );

    // 맨 뒤로 이동 버튼
    buttons.push(
      <li key="last" className="page-item">
        <button
          className="page-link"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(totalPages)}
        >
          <i className="fa-solid fa-angles-right"></i>
        </button>
      </li>
    );

    return buttons;
  };

  return (
    <div>
      <ul className="pagination">{renderPageButtons()}</ul>
    </div>
  );
};

export default Pagination;
