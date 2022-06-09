import { Link } from "react-router-dom";
import "./style.css";

const data = [
  { name: "test1", image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/51322435/3/?bust=1619219058\u0026width=100", description: "lorem ipsum" },
  { name: "test2", image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/51322435/3/?bust=1619219058\u0026width=100", description: "lorem ipsum" },
  { name: "test3", image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/51322435/3/?bust=1619219058\u0026width=100", description: "lorem ipsum" },
];  

function Calculator() {
  return (
    <div data-testid={"Calculator"} className="calcDiv">
      {data.length ? (
        <div className="grid">
          {data.map((test, index) => (
            <Link
              key={index}
              to={`/Calculator/${test.name}`}
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

export default Calculator;
