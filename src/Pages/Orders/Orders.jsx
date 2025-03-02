import React from "react";
import LayOut from "../../Compenents/LayOut/LayOut";
import { useReducer } from "react";

const Orders = () => {
  const intialState = {
    count: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return {
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          count: state.count - 1,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <LayOut>
      <div style={{ height: "200vh", padding: "20px" }}>
        <h2>Scroll Down to See the Difference</h2>

        {/* Sticky Container */}
        <div
          style={{
            background: "lightblue",
            width: "300px",
            height: "400px",
            overflowY: "auto",
            marginBottom: "50px",
            border: "2px solid blue",
          }}
        >
          <div
            style={{
              position: "sticky",
              top: "4px",
              background: "pink",
              padding: "10px",
              borderBottom: "2px solid black",
            }}
          >
            Sticky Header
          </div>
          <p>Scroll inside this box ⬇️</p>
          <p>Content 1</p>
          <p>Content 2</p>
          <p>Content 3</p>
          <p>Content 4</p>
          <p>Content 5</p>
        </div>

        {/* Fixed Box */}
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "red",
            color: "white",
            padding: "10px",
          }}
        >
          Fixed Box (Always here)
        </div>

        <p>Keep scrolling the page ⬇️ to see how the fixed box stays.</p>
      </div>
      
    </LayOut>
  );
};

export default Orders;
