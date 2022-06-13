import { useReducer } from "react";

interface CounterProps {
  fontSize?: number;
  backgroundColor?: string;
  borderRadius?: number;
  marginLeft?: number;
  borderColor?: string;
  color?: string;
  fontStyle?: string;
  fontWeight?: string;
}

enum actionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET",
  DUPLICATE = "DUPLICATE",
  TRIPLICATE = "TRIPLICATE",
  HALVE = "HALVE",
  REVERSE = "REVERSE",
}

interface countAction {
  type: actionType;
  payload?: number;
}

interface countState {
  count: number;
}

function valueReducer(state: countState, action: countAction) {
  const { type, payload } = action;
  switch (action.type) {
    case actionType.INCREMENT:
      return { ...state, count: state.count + 1 };
    case actionType.DECREMENT:
      return { ...state, count: state.count - 1 };
    case actionType.RESET:
      return { ...state, count: 0 };
    case actionType.DUPLICATE:
      return { ...state, count: state.count * 2 };
    case actionType.TRIPLICATE:
      return { ...state, count: state.count * 2 * 2 };
    case actionType.HALVE:
      return { ...state, count: state.count / 2 };
    case actionType.REVERSE:
      return { ...state, count: 0 - state.count };
    default:
      return state;
  }
}

export const Counter = (props: CounterProps) => {
  const [state, dispatch] = useReducer(valueReducer, { count: 0 });

  const buttonStyle = {
    fontSize: props.fontSize,
    backgroundColor: props.backgroundColor,
    borderRadius: props.borderRadius,
    marginLeft: props.marginLeft,
    borderColor: props.borderColor,
    color: props.color,
    fontStyle: props.fontStyle,
    fontWeight: props.fontWeight,
  };

  return (
    <div
      data-testid="counterDiv"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p data-testid="counter" style={{ fontSize: props.fontSize }}>
        Counter: {state.count}{" "}
      </p>
      <button
        data-testid="sub"
        style={buttonStyle}
        //onClick={handleClick}
        onClick={() => dispatch({ type: actionType.DECREMENT, payload: 1 })}
      >
        -
      </button>
      <button
        data-testid="add"
        style={buttonStyle}
        onClick={() => dispatch({ type: actionType.INCREMENT, payload: 1 })}
      >
        +
      </button>
      <button
        data-testid="reset"
        style={buttonStyle}
        onClick={() => dispatch({ type: actionType.RESET })}
      >
        RESET
      </button>
      <button
        data-testid="duplicate"
        style={buttonStyle}
        onClick={() => dispatch({ type: actionType.DUPLICATE })}
      >
        Duplicate!
      </button>
      <button
        data-testid="triplicate"
        style={buttonStyle}
        onClick={() => dispatch({ type: actionType.TRIPLICATE })}
      >
        Triplicate!
      </button>
      <button
        data-testid="halve"
        style={buttonStyle}
        onClick={() => dispatch({ type: actionType.HALVE })}
      >
        Halve!
      </button>
      <button
        data-testid="reverse"
        style={buttonStyle}
        onClick={() => dispatch({ type: actionType.REVERSE })}
      >
        Reverse!
      </button>
    </div>
  );
};

export default Counter;
