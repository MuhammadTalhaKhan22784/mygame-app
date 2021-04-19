import React, { useState } from "react";
import PropCard1 from "./PropCard1";

const PropCard2 = () => {
  const [cardShow, setCardShow] = useState("show");

  return (
    <React.Fragment>
      {cardShow === "show" ? (
        <div className="prop_card2">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="pcard2_header">
                  <h3>BUSINESS NAME</h3> 
                  <h2>Level 1</h2>
                </div>
                <div className="pcard2_points">
                  <ul>
                    <li>Majority have suffered alteration in some</li>
                    <li>injected humour, or ran majority have</li>
                    <li>alteration in some form, by injected</li>
                    <li>majority have suffered alteration in some</li>
                    <li>5njected humour, or ran</li>
                  </ul>
                </div>
                <button
                  className="open_c"
                  onClick={() => {
                    setCardShow("false");
                  }}
                >
                  OPEN
                </button>
              </div>
              <div className="carousel-item">
                <div className="pcard2_header">
                  <h2>BUSINESS Name</h2> 
                  <h2>Level 1</h2>
                </div>
                <div className="pcard2_points">
                  <ul>
                    <li>Majority have suffered alteration in some</li>
                    <li>injected humour, or ran majority have</li>
                    <li>alteration in some form, by injected</li>
                    <li>majority have suffered alteration in some</li>
                    <li>5njected humour, or ran</li>
                  </ul>
                </div>
                <button
                  className="open_c"
                  onClick={() => {
                    setCardShow("false");
                  }}
                >
                  OPEN
                </button>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      ) : (
        <PropCard1 />
      )}
    </React.Fragment>
  );
};

export default PropCard2;
