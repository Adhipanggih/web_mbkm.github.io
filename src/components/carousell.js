import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../assets/img/sawah.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { CardGroup, Card } from "react-bootstrap";
import ButtonGroupComponent from "./ButtonGroupComponent";
import CardBerita from "./cardberita";

const Carousell = () => {
  const [prayerTimes, setPrayerTimes] = useState([]);

  useEffect(() => {
    const apiUrl =
      "https://api.aladhan.com/v1/timingsByCity?city=Jakarta&country=Indonesia&method=2";

    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data.data.timings;
        setPrayerTimes(data);
      })
      .catch((error) => {
        console.error("Error fetching prayer times:", error);
      });

    getdata();
  }, []);
  const getdata = async () => {
    const apiUrl = "http://192.168.49.190:5000/api/post";

    const data = await axios.get(apiUrl);
    console.log(data);
  };
  const cardData = [
    {
      id: 1,
      title: "Nama",
      description: "Tugas/Jabatan",
      imageUrl: "https://placekitten.com/200/300", // Ganti dengan URL gambar yang sesuai
    },
    {
      id: 2,
      title: "Nama",
      description: "Tugas/Jabatan",
      imageUrl: "https://placekitten.com/201/301",
    },
    {
      id: 3,
      title: "Nama",
      description: "Tugas/Jabatan",
      imageUrl: "https://placekitten.com/202/302",
    },
    {
      id: 4,
      title: "Nama",
      description: "Tugas/Jabatan",
      imageUrl: "https://placekitten.com/203/303",
    },
    {
      id: 5,
      title: "Nama",
      description: "Tugas/Jabatan",
      imageUrl: "https://placekitten.com/204/304",
    },
  ];
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (buttonLabel) => {
    // Logika yang akan dijalankan saat tombol ditekan
    console.log(`Tombol "${buttonLabel}" ditekan`);
    setSelectedButton(buttonLabel);
  };

  return (
    <div className="container px-4 px-lg-5 h-100 my-5">
      <Carousel
        style={{
          border: "3px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          marginTop: "25PX",
        }}
      >
        <Carousel.Item interval={1000}>
          <img
            text="First slide"
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "50px" }}
          >
            <h3>First Slide</h3>
            <p>This is the caption for the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://placekitten.com/800/401"
            alt="Second slide"
          />
          <Carousel.Caption
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "50px" }}
          >
            <h3>Second Slide</h3>
            <p>This is the caption for the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://placekitten.com/800/402"
            alt="Third slide"
          />
          <Carousel.Caption
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "50px" }}
          >
            <h3>Third Slide</h3>
            <p>This is the caption for the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          backgroundColor: "white",
          color: "black",
          padding: "10px",
          borderRadius: "5px",
          border: "3px solid #ddd",
        }}
      >
        <div
          style={{
            padding: "8px ",
          }}
        >
          <FontAwesomeIcon
            icon={faBell}
            style={{ marginRight: "10px", color: "black" }}
          />
          <h6>Info</h6>
        </div>
        <marquee>
          <span style={{ color: "black" }}>Pengumuman</span>
        </marquee>
      </div>
      <div className="p">
        <h4
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "15px",
            marginTop: "25px",
            backgroundColor: "#0099FF",
            padding: "4px",
            borderRadius: "5px",
          }}
        >
          Jadwal Shalat
        </h4>
      </div>
      <div
        style={{
          marginTop: "8px",
          padding: "20px",
          border: "3px solid #ddd",
          borderRadius: "5px",
          backgroundColor: "white",
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li
            style={{
              borderBottom: "1px solid #ddd",
              padding: "10px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Subuh</span>
            <span>{prayerTimes.Fajr}</span>
          </li>
          <li
            style={{
              borderBottom: "1px solid #ddd",
              padding: "10px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Dhuhur</span>
            <span>{prayerTimes.Dhuhr}</span>
          </li>
          <li
            style={{
              borderBottom: "1px solid #ddd",
              padding: "10px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Ashar</span>
            <span>{prayerTimes.Asr}</span>
          </li>
          <li
            style={{
              borderBottom: "1px solid #ddd",
              padding: "10px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Maghrib</span>
            <span>{prayerTimes.Maghrib}</span>
          </li>
          <li
            style={{
              padding: "10px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Isha</span>
            <span>{prayerTimes.Isha}</span>
          </li>
        </ul>
      </div>
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "3px solid #ddd",
          borderRadius: "5px",
          backgroundColor: "white",
        }}
      >
        <h3
          style={{
            textAlign: "left",
            marginBottom: "15px",
            color: "black",
            fontWeight: "bolder",
          }}
        >
          Serba Serbi Desa
        </h3>
        <p style={{ fontSize: "small" }}>Kenali KarangAsem</p>
        <p style={{ marginTop: "2px", fontSize: "normal" }}>
          asdnlkasndlksanlaknkalwahdai dwauihdkabdwkad awihdiuawhdi
          awudhiauwhiaudhaui wadhnw,ajndwi waqhdoiqa dawhdoiahd waiduoiaf iwau
          aofiowauofia fioawufoaif aioufiao awuhdi;
        </p>
      </div>
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "3px solid #ddd",
          borderRadius: "5px",
          backgroundColor: "white",
        }}
      >
        <CardGroup>
          {cardData.map((card) => (
            <Card
              key={card.id}
              className="mb-3"
              style={{
                width: "18rem",
                marginRight: "10px",
                border: "1px solid #ddd",
              }}
            >
              <Card.Img variant="top" src={card.imageUrl} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </div>
      <div>
        <h3
          style={{
            color: "black",
            textAlign: "left",
            marginBottom: "20px",
            marginLeft: "20px",
            marginTop: "25px",
            padding: "4px",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          Berita
        </h3>
      </div>
      <div>
        <h2>{selectedButton}</h2>
        <ButtonGroupComponent onClick={handleButtonClick} />
      </div>
      <div>
        <h2></h2>
        <CardBerita />
      </div>
    </div>
  );
};

export default Carousell;
