import React from "react";
import icon from "../assets/img/favicon.png";
import axios from "axios";

const Card = ({ title, img }) => {
  return (
    <div class="card text-center" id="card">
      <div class="card-body">
        <img class="card-title" id="img" src={img} />
        <p class="card-text" id="title">
          {title}
        </p>
      </div>
    </div>
  );
};

const Hero = () => {
  const card = [
    {
      title: "Peta Desa",
      icon: icon,
    },
    {
      title: "Produk Hukum",
      icon: icon,
    },
    {
      title: "Informasi Publik",
      icon: icon,
    },
    {
      title: "Lapak",
      icon: icon,
    },
    {
      title: "Arsip Berita",
      icon: icon,
    },
    {
      title: "Album Galeri",
      icon: icon,
    },
    {
      title: "Pengaduan",
      icon: icon,
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
            <a className="btn btn-primary btn-xl mt-2" href="#about">
              Find Out More
            </a>
          </div>
          <div id="flex-con" className="mt-4">
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
