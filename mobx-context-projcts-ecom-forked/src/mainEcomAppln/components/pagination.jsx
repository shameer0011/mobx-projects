import React from "react";
import "./pagination.css";
const pagination = ({ currentPage, setCurrentPage }) => {
  const totalPageCount = Math.ceil(20 / 5);
  const totalPage = Array.from(Array(totalPageCount).keys());
  const setPage = (page) => {
    setCurrentPage(page + 1);
  };

  return (
    <div>
      <div className="row pro-result">
        <div className="col-xl-6 col-lg-6 col-md-6 col-12 pagination-style">
          <div className="pagination">
            <ul>
              <li>
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </button>
              </li>
              {totalPage.map((page, index) => (
                <li>
                  <button
                    className={currentPage === page + 1 ? "active" : ""}
                    onClick={() => setPage(page)}
                  >
                    {page + 1}
                  </button>
                </li>
              ))}
              <li>
                <button
                  disabled={currentPage === totalPage.length - 1}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pagination;
