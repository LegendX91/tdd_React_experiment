import { NavLink } from "react-router-dom";
import "./style.css";

const Navigation = () => {
  const testType: string[] = ["Calculator", "Problems", "API", "Complex"];

  return (
    <nav data-testid="navigation">
      <ul className="nav-links">
        {testType
          ? testType.map((type, index) => (
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
