import React from "react";
import { Card } from "react-bootstrap";

const CardBerita = () => {
  const CardBerita = [
    {
      id: 1,
      imageUrl: "https://placekitten.com/200/300",
      title: "Card 1",
      date: "January 1, 2023",
    },
    {
      id: 2,
      imageUrl: "https://placekitten.com/201/301",
      title: "Card 2",
      date: "February 15, 2023",
    },
    {
      id: 3,
      imageUrl: "https://placekitten.com/202/302",
      title: "Card 3",
      date: "March 30, 2023",
    },
    {
      id: 4,
      imageUrl: "https://placekitten.com/203/303",
      title: "Card 4",
      date: "April 12, 2023",
    },
    {
      id: 5,
      imageUrl: "https://placekitten.com/204/304",
      title: "Card 5",
      date: "May 22, 2023",
    },
    {
      id: 6,
      imageUrl: "https://placekitten.com/205/305",
      title: "Card 6",
      date: "June 5, 2023",
    },
  ];

  return (
    <div
      style={{
        marginTop: "25px",
        display: "grid",
        alignItems: "center",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}
    >
      {CardBerita.map((card) => (
        <Card key={card.id} style={{ width: "350px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "150px",
            }}
          >
            <Card.Img
              variant="top"
              src={card.imageUrl}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.date}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardBerita;
