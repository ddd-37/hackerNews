import React, { Component } from "react";
import { useHistory } from "react-router-dom";

const Dropdown = () => {
  const history = useHistory();
  const handleChange = e => {
    history.push(`/${e.target.value}`);
  };

  return (
    <>
      <select name="" className="Dropdown" onChange={handleChange}>
        <option value="top">Top</option>
        <option value="new">New</option>

        <option value="best">Best</option>
      </select>
    </>
  );
};

export default Dropdown;
