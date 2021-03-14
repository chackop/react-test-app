import React, { useState, useEffect } from "react";

const USERS_URL = "https://example.com/api/users";

export default function Table() {
  const [tableData, setTableData] = useState([]);
  const [pageVal, setPageVal] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setTableData([]);
      const response = await fetch(USERS_URL + "?page=" + pageVal);
      const data = await response.json();
      const calcCount =
        Math.round(data.count / 10) === 0 ? 1 : Math.round(data.count / 10);
      setCount(calcCount);
      setTableData(data.results);
    };

    fetchData();
  }, [pageVal]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 &&
            tableData.map((titem, idx) => (
              <tr key={idx}>
                <th>{titem.id}</th>
                <th>{titem.firstName}</th>
                <th>{titem.lastName}</th>
              </tr>
            ))}
        </tbody>
      </table>
      <section className="pagination">
        <button
          className="first-page-btn"
          onClick={() => setPageVal(0)}
          disabled={tableData.length === 0 || pageVal === 0 || count === 1}
        >
          first
        </button>
        <button
          className="previous-page-btn"
          onClick={() => setPageVal((prevPageVal) => prevPageVal - 1)}
          disabled={tableData.length === 0 || pageVal === 0 || count === 1}
        >
          previous
        </button>
        <button
          className="next-page-btn"
          onClick={() => setPageVal((prevPageVal) => prevPageVal + 1)}
          disabled={tableData.length === 0 || pageVal === count || count === 1}
        >
          next
        </button>
        <button
          className="last-page-btn"
          onClick={() => setPageVal(count)}
          disabled={tableData.length === 0 || pageVal === count}
        >
          last
        </button>
      </section>
    </div>
  );
}
