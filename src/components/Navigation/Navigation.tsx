import { NavLink } from "react-router-dom";
import "./style.css";

interface navProps {
  elements: string[],
}

const Navigation = ({elements}: navProps) => {

  return (
    <nav data-testid="navigation">
      <ul className="nav-links">
        {elements
          ? elements.map((type, index) => (
              <li key={index} data-testid={"navEl"+index}>
                {/* These links should have an activeClassName prop */}
                <NavLink
                  to={`/${type}`}
                  key={index}
                  className="nav-link"
                  data-testid={"navTo" + index}
                >
                  {type}
                </NavLink>{" "}
              </li>
            ))
          : "Loading..."}
      </ul>
    </nav>
  );
};

export default Navigation;
