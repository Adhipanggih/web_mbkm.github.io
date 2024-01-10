import React from "react";
import icon from "../assets/img/favicon.png";
import maps from "../assets/img/map.png";
import informasipublik from "../assets/img/document.png";
import albumgaleri from "../assets/img/image-gallery.png";
import pengaduan from "../assets/img/announcement.png";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, img }) => {
  return (
    <a class="card text-center sm:text-center" id="card">
      <div class="card-body">
        <img class="card-title" id="img" src={img} />
        <p class="card-text" id="title">
          {title}
        </p>
      </div>
    </a>
  );
};

const Hero = () => {
  const card = [
    {
      title: "Peta Desa",
      icon: maps,
    },
    {
      title: "Informasi Publik",
      icon: informasipublik,
    },
    {
      title: "Album Galeri",
      icon: albumgaleri,
    },
    {
      title: "Pengaduan",
      icon: pengaduan,
    },
  ];
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <h1 className="text-white font-weight-bold">
              Sistem Informasi Karang Asem
            </h1>
            <hr className="divider" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
            </div>
            <a className="btn btn-primary btn-xl mt-4" href="#about">
              Find Out More
            </a>
          </div>
          <div id="flex-con" className="mt-2">
            {card.map((i) => {
              return <Card title={i.title} img={i.icon} />;
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
