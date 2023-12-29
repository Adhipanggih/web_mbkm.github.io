import React from "react";
import { CardGroup, Card } from "react-bootstrap";

const Aparatur = () => {
  const cardData = [
    {
      id: 1,
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://placekitten.com/200/300", // Ganti dengan URL gambar yang sesuai
    },
    {
      id: 2,
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "https://placekitten.com/201/301",
    },
    {
      id: 3,
      title: "Card 3",
      description: "Description for Card 3",
      imageUrl: "https://placekitten.com/202/302",
    },
    {
      id: 4,
      title: "Card 4",
      description: "Description for Card 4",
      imageUrl: "https://placekitten.com/203/303",
    },
    {
      id: 5,
      title: "Card 5",
      description: "Description for Card 5",
      imageUrl: "https://placekitten.com/204/304",
    },
  ];
  return (
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
          <Card key={card.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={card.imageUrl} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};

export default Aparatur;
