import React from "react";

const BoardPagination = ({ currentPage, hasNext, onPrev, onNext }) => {
  return (
    <div className="pagination-wrapper">
      <button
        className="pagination-button"
        onClick={onPrev}
        disabled={currentPage === 0}
      >
        이전
      </button>
      <span className="pagination-info">{currentPage + 1} 페이지</span>
      <button
        className="pagination-button"
        onClick={onNext}
        disabled={!hasNext}
      >
        다음
      </button>
    </div>
  );
};

export default BoardPagination;
