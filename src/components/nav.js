import React from "react";
import Profildesa from "./profildesa";

const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-3"
      id="mainNav"
    >
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#page-top">
          Karang Asem
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="./profildesa">
                Profil Desa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pemerintahan Desa
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.google.co.id/maps/place/Karangasem,+Laweyan,+Surakarta+City,+Central+Java,+Indonesia/@-7.5520006,110.7704394,15.69z/data=!4m6!3m5!1s0x2e7a14423bb7a909:0xe0eb2f56f8a8e773!8m2!3d-7.5512152!4d110.776317!16s%2Fg%2F122qmg_j?entry=ttu"
              >
                Peta
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Galeri
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
