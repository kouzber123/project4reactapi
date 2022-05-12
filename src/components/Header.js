import React from "react";

import Search from "./Search";
function Header() {
  return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="/" className="nav-link active" aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/allSports" className="nav-link">
            Discover all sports!
          </a>
        </li>
        <li className="nav-item">
          <a href="/addSport" className="nav-link">
            Add A sport!
          </a>
        </li>
        <li className="nav-item">
          <a href="/updateSport" className="nav-link">
            Update Sport
          </a>
        </li>
        <li className="nav-item">
          <a href="/deleteSport" className="nav-link">
            Delete Sport
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
