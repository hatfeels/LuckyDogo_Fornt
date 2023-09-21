import React from "react";

import styles from "./pagination.module.css"

const Pagination = ({ page, currentPage, dogsPerPage, total }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(total / dogsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className={styles.cont}>
        {currentPage - 1 <= 0 ? "" : <button onClick={() => page(currentPage - 1)}>prev</button>}
      {pageNumber.map((n) => (
        <button key={n} className={n === currentPage ? styles.current : ""} onClick={() => page(n)}>{n}</button>
      ))}
      {currentPage >= pageNumber.length ? "" : <button onClick={() => page(currentPage + 1)}>next</button>}
    </div>
  );
};

export default Pagination;
