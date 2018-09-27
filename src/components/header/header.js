import React from "react";

import "./header.css";

const Header = () => (
  <div className="header">
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search your saved stackoverflow answers 🤓"
      />
    </div>
  </div>
);

export default Header;
