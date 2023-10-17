import React, { useState } from 'react';

const Table = ({ data }) => {
  if (data && data.length > 0) {
    return (
      <div>
        <h2>Table</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Occupation</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
                <td>{item.occupation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div>No Record Found</div>;
  }
};

export default Table;
