import React, { useState } from 'react';

const FilteredTable = ({ data }) => {
    const [filters, setFilters] = useState({
      name: '',
      age: '',
      city: '',
      occupation: '',
    });
    const [filteredData, setFilteredData] = useState(data);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFilters({ ...filters, [name]: value });
    };
  
    const handleFilterSubmit = (e) => {
      e.preventDefault();

      const filteredResult = data.filter((item) => {
        return (
          item.name.includes(filters.name) &&
          ( item.age === parseInt(filters.age)) &&
          ( item.city === filters.city) &&
          ( item.occupation === filters.occupation)
        );
      });
  
      setFilteredData(filteredResult);
    };
  
    return (
      <div>
        <h2></h2>
        <form onSubmit={handleFilterSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={filters.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={filters.age}
              onChange={handleInputChange}
            />
          </label>
          <label>
            City:
            <select name="city" value={filters.city} onChange={handleInputChange}>
              <option value="">All</option>
              <option value="City1">New York</option>
              <option value="City2">San Francisco</option>
              <option value="City3">Chicago</option>
              <option value="City4">Los Angeles</option>
              <option value="City5">Houston</option>
              <option value="City6">Miami</option>
              <option value="City7">Seattle</option>
              <option value="City8">Boston</option>
              <option value="City9">Denver</option>
              <option value="City10">Atlanta</option>
            </select>
          </label>
          <label>
            Occupation:
            <select
              name="occupation"
              value={filters.occupation}
              onChange={handleInputChange}
            >
              <option value="">All</option>
              <option value="Occupation1">Engineer</option>
              <option value="Occupation2">Designer</option>
              <option value="Occupation3">Accountant</option>
              <option value="Occupation4">Teacher</option>
              <option value="Occupation5">Doctor</option>
              <option value="Occupation6">Artist</option>
              <option value="Occupation7">Software Engineer</option>
              <option value="Occupation8">Lawyer</option>
              <option value="Occupation9">Marketing Manager</option>
              <option value="Occupation10">Entrepreneur</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
        <Table data={filteredData} />
      </div>
    );
  };


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

export default FilteredTable;
