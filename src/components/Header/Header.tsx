import React from "react";
import "./style.css";

export default function Header() {
  return (
    <div
      className="header"
      data-testid="header"
      style={{
        fontSize: 50,
        color: "white",
        textAlign: "center",
        fontStyle: "italic",
        textShadow: "1px 2px 9px black",
      }}
    >
      Testing Jest-React
    </div>
  );
}
