import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="container">
      <footer>
        <div> Made by tom nguyen @{date}</div>
      </footer>
    </div>
  );
}

export default Footer;
