interface opProps {
  title: string;
}

const op: string[] = ["Addition", "Subtraction", "Multiplication", "Division"];

function CalcPage({ title }: opProps) {
  return (
    <>
      {op.includes(title) && (
        <div
          data-testid={title}
          className="calcDiv"
          style={{
            margin: "auto",
            width: "30%",
            border: "3px solid white",
            paddingTop: "auto",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <input
            style={{
              margin: "5px",
              borderRadius: "10px",
              textAlign: "center",
              verticalAlign: "middle",
            }}
            placeholder={"Insert first value..."}
          />
          <input
            style={{ margin: "5px", borderRadius: "10px", textAlign: "center" }}
            placeholder={"Insert second value..."}
          />
          <div
            style={{
              backgroundColor: "orange",
              margin: "auto",
              width: "20%",
              border: "3px solid white",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              borderRadius: "10px",
            }}
          >
            <text
              style={{
                textAlign: "center",
                fontSize: "20px",
                color: "white",
                fontWeight: "bolder",
              }}
            >
              {"Addition".startsWith(title) && "+"}
              {"Subtraction".startsWith(title) && "-"}
              {"Multiplication".startsWith(title) && "*"}
              {"Division".startsWith(title) && "/"}
            </text>
          </div>
        </div>
      )}
    </>
  );
}

export default CalcPage;
