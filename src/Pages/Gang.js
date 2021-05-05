import React, { useState } from "react";
import "./style/Gang.css";
import { AiOutlineSearch } from "react-icons/ai";
import pBuildings from "../assets/p_buildings.png";
import greenArrow from "../assets/arrow1.svg";
import redArrow from "../assets/arrow2.svg";
import { useHistory } from "react-router";

const Gang = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="gang_nav">
        <h2>GANG</h2>
      </div>
      <div className="gang_main">
        <div className="gang_left">
          <h2 className="fw-bold text-white">JOIN GANG</h2>
          <div className="jg_box">
            <div className="si_box">
              <div>
                {/* <div className="search_input">
                  <button type="button" className="btn">
                    <AiOutlineSearch />
                  </button>
                  <input type="search" placeholder="Search Gang" />
                </div> */}
                <div className="search_input si_2 ">
                  <input input type="text" placeholder="Enter Gang Tag" />
                </div>
              </div>
              {show === false ? (
                <button
                  className="sr_btn"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  SEND REQUEST
                </button>
              ) : (
                <p>your request is send to x x x</p>
              )}
            </div>
            <div className="tg_box">
              <h6>TOTAL GANGS:</h6>
              <span>x x x</span>
              <h6>TOTAL GANG MEMBERS:</h6>
              <span>x x x</span>
            </div>
          </div>
          <h2 className="fs-5 fw-bold text-white">ENTER GANG</h2>
          <div className="cg_box">
            <div className="cgb_1">
              <div className="search_input si_2 ">
                <input input type="text" placeholder="Enter Gang Tag" />
              </div>
              <div className="search_input si_2 ">
                <input input type="text" placeholder="Enter Gang Name" />
              </div>
            </div>
            <div className="cg_div">
              <div className="cg_content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium quo perferendis.
                </p>
                <div className="cg_c_bottom">
                  <button
                    className="create_btn"
                    onClick={() => {
                      history.push("/gang-overview");
                    }}
                  >
                    CREATE
                  </button>
                  <h5>$500</h5>
                </div>
              </div>
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={pBuildings} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="" className="text-white d-block w-100" alt="none" />
                  </div>
                  <div className="carousel-item">
                    <img src={pBuildings} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="gang_right">
          <h2 className="fw-bold text-white">TOP 10 GANGS</h2>
          <div>
            <div className="gang10_box">
              <h4>1.</h4>
              <div className="gtext_border">
                <span>Gang Tag Gang Name</span>
              </div>
              <img src={greenArrow} alt="" />
            </div>
            <div className="gang10_box">
              <h4>2.</h4>
              <div className="gtext_border">
                <span>Gang Tag Gang Name</span>
              </div>
              <img src={redArrow} alt="" />
            </div>
            <div className="gang10_box">
              <h4>3.</h4>
              <div className="gtext_border">
                <span>Gang Tag Gang Name</span>
              </div>
              <img src={greenArrow} alt="" />
            </div>
            <div className="gang10_box">
              <h4>4.</h4>
              <div className="gtext_border">
                <span>Gang Tag Gang Name</span>
              </div>
              <img src={redArrow} alt="" />
            </div>
            <div className="gang10_box">
              <h4>5.</h4>
              <div className="gtext_border">
                <span>Gang Tag Gang Name</span>
              </div>
              <img src={greenArrow} alt="" />
            </div>
            <div className="gang10_box">
              <h4>6.</h4>
              <div className="gtext_border">
                <span>Gang Tag Gang Name</span>
              </div>
              <img src={redArrow} alt="" />
            </div>
            <div className="gang10_box">
              <h4>7.</h4>
              <div className="gtext_border">
                <span>Gang Tag Gang Name</span>
              </div>
              <img src={greenArrow} alt="" />
            </div>
            <div className="gang10_box">
              <h4>8.</h4>
              <div className="gtext_border">
                <span>Gang Tag Gang Name</span>
              </div>
              <img src={redArrow} alt="" />
            </div>
            <div className="gang10_box">
              <h4>9.</h4>
              <div className="gtext_border">
                <span>Gang Tag Gang Name</span>
              </div>
              <img src={greenArrow} alt="" />
            </div>
            <div className="gang10_box">
              <h4>10.</h4>
              <div className="gtext_border">
                <span>Gang Tag Gang Name</span>
              </div>
              <img src={redArrow} alt="" />
            </div>
            <div className="gang10_box">
              <h4>11.</h4>
              <div className="gtext_border">
                <span>Gang Tag Gang Name</span>
              </div>
              <img src={greenArrow} alt="" />
            </div>
            <div className="gang10_box">
              <h4>12.</h4>
              <div className="gtext_border">
                <span>Gang Tag Gang Name</span>
              </div>
              <img src={redArrow} alt="" />
            </div>
            <div className="gang10_box">
              <h4>13.</h4>
              <div className="gtext_border">
                <span>Gang Tag Gang Name</span>
              </div>
              <img src={greenArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Gang;
