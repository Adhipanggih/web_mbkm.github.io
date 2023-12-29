import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const ButtonGroupComponent = ({ onClick }) => {
  return (
    <ButtonGroup>
      <Button
        variant="primary"
        onClick={() => onClick("Terbaru")}
        style={{ marginRight: "10px" }}
        rounded
      >
        Terbaru
      </Button>
      <Button
        variant="primary"
        onClick={() => onClick("Berita Desa")}
        style={{ marginRight: "10px" }}
        rounded
      >
        Berita Desa
      </Button>
      <Button
        variant="primary"
        onClick={() => onClick("Program Kerja")}
        style={{ marginRight: "10px" }}
      >
        Program Kerja
      </Button>
      <Button
        variant="primary"
        onClick={() => onClick("Produk Desa")}
        style={{ marginRight: "10px" }}
      >
        Produk Desa
      </Button>
      <Button
        variant="primary"
        onClick={() => onClick("Peraturan Desa")}
        style={{ marginRight: "10px" }}
      >
        Peraturan Desa
      </Button>
      <Button
        variant="primary"
        onClick={() => onClick("Berita Daerah")}
        style={{ marginRight: "10px" }}
      >
        Berita Daerah
      </Button>
    </ButtonGroup>
  );
};

export default ButtonGroupComponent;
