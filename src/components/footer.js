import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ minHeight: "20vh", Width: "auto", position: "relative" }}
      className="bg-dark text-light text-center py-3"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>&copy; 2023 Your Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
