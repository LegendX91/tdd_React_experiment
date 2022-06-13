import React, { useContext } from "react";
import { LoginContext } from "../../Helpers/LoginContext";
import "./style.css";

interface HeaderProps {
  fontSize?: number;
  backgroundColor?: string;
  borderRadius?: number;
  borderColor?: string;
  color?: string;
  marginTop?: number;
}

export default function Header(props: HeaderProps) {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  const buttonStyle = {
    fontSize: props.fontSize,
    backgroundColor: props.backgroundColor,
    borderRadius: props.borderRadius,
    borderColor: props.borderColor,
    color: props.color,
    marginTop: props.marginTop,
  };

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
        flexDirection: "column",
      }}
    >
      Testing Jest-React
      {!loggedIn && (
        <button
          data-testid="logButton"
          style={buttonStyle}
          onClick={() => setLoggedIn(true)}
        >
          Welcome Stranger! LogIn
        </button>
      )}
      {loggedIn && (
        <button
          data-testid="logButton"
          style={buttonStyle}
          onClick={() => setLoggedIn(false)}
        >
          Welcome User! LogOut
        </button>
      )}
    </div>
  );
}
