import React from "react";
import ReactDOM from "react-dom";
import { Range, getTrackBackground } from "react-range";

const STEP = 0.1;
const MIN = 0;
const MAX = 100;

class SuperRange extends React.Component {
  state = {
    values: [50],
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   flexWrap: "wrap",
          //   margin: "2em"
        }}
      >
        <Range
        disabled
          values={this.state.values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => this.setState({ values })}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                
                width: "75%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "25px",
                  width: "80%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: this.state.values,
                    colors: ["black", "black"],
                    min: MIN,
                    max: MAX,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
            className="cus_r"
              {...props}
              style={{
                ...props.style,
                height: "22px",
                width: "3px",
                borderRadius: "2px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // boxShadow: "0px 2px 6px #AAA",
                transform: `translate("14.8494px, -8.5px")`,
              }}
            >
              <div
                style={{
                  height: "33px",
                  width: "5px",
                  backgroundColor: isDragged ? "#548BF4" : "#CCC",
                }}
              />
            </div>
          )}
        />
        <output style={{ color: "#d3d4d4" }} id="output">
          {this.state.values[0].toFixed(0)}%
        </output>
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<SuperRange />, rootElement);

export default SuperRange;
