import React, { useState, useEffect } from "react";

const USERS_URL = "https://example.com/api/users";

export default function Table() {
  const [tableData, setTableData] = useState(null);
  const [pageVal, setPageVal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(USERS_URL + "?page=" + pageVal);
      setTableData(data);
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
          {tableData &&
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
          disabled={!tableData}
        >
          first
        </button>
        <button
          className="previous-page-btn"
          disabled={!tableData || pageVal === 0}
          onClick={(pageVal) => setPageVal(pageVal - 1)}
        >
          previous
        </button>
        <button
          className="next-page-btn"
          disabled={!tableData || pageVal === 10}
        >
          next
        </button>
        <button
          className="last-page-btn"
          onClick={(pageVal) => setPageVal(pageVal + 1)}
          disabled={!tableData}
        >
          last
        </button>
      </section>
    </div>
  );
}
