import React from "react";
import "./style.css";
import headerImg from "../../assets/images/header_img.jpg";

export default function Header() {
  return (
    <div
      className="header"
      data-testid="header"
      style={{ fontSize: 40, color: "white", textAlign: 'center', fontStyle: 'italic' }}
    >
      Testing Jest-React
    </div>
  );
}
