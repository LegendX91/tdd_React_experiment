import { Link, Route, Routes } from "react-router-dom";
import CalcPage from "../CalcPage/CalcPage";
import "./style.css";
interface testPageProps {
  elements: { name: string; image: string; description: string }[];
  title: string;
}

function TestPage({ elements, title }: testPageProps) {
  return (
    <div data-testid={title} className="calcDiv">
      {elements.length ? (
        <div className="grid">
          {elements.map((test, index) => (
            <Link
              key={index}
              to={`/${title}/${test.name}`}
              className="test"
              data-testid={"innerNavEl" + index}
            >
              <article>
                <div className="test-image-container">
                  {<img className="test-image" src={test.image} alt="" />}
                </div>
                <h3>{test.name}</h3>
                <p>Description: {test.description}</p>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default TestPage;
