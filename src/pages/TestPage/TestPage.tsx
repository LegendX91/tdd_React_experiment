import { Link } from "react-router-dom";
import "./style.css";
import premiumImg from "../../assets/images/premium.jpg";
interface testPageProps {
  elements: { name: string; image: string; description: string }[];
  title: string;
}

const premiumFeatures = [
  "Factorial",
  "Exponential",
  "TaylorSeries",
  "TartagliaTriangle",
  "Counter",
];

function TestPage({ elements, title }: testPageProps) {
  return (
    <div data-testid={title} className="calcDiv" style={{ marginTop: "1%" }}>
      {elements.length ? (
        <div className="grid">
          {elements.map((test, index) => (
            <Link
              key={index}
              to={`/${title}/${test.name}`}
              className="test"
              data-testid={"innerNavEl" + index}
              style={{
                borderRadius: 10,
                padding: "5%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="element">
                <div className="test-image-container" style={{ width: 250 }}>
                  {
                    <img
                      className="test-image"
                      src={test.image}
                      alt=""
                      style={{
                        height: 200,
                        width: 200,
                        borderRadius: 10,
                        boxShadow: "10px 15px 20px lightgrey",
                      }}
                    />
                  }
                </div>
                <h3 style={{ width: 250, maxHeight: 50 }}>
                  {premiumFeatures.includes(test.name) && (
                    <img style={{width: 20, height: 20, marginRight: 10}} src={premiumImg} />
                  )}
                  {test.name}
                </h3>
                <p style={{ width: 250, height: 50 }}>Description: {test.description}</p>
              </div>
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
