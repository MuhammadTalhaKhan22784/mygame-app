import React, { useState } from "react";
import "./style/Home.css";

import betaLogo from "../assets/Beta Logo.png";
import hImg1 from "../assets/h_img1.jpg";
import hImg2 from "../assets/h_img2.jpg";
import hImg3 from "../assets/h_img3.webp";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <div className="home_main">
        <div className="h_box1">
          <div className="h_logo">
            <img src={betaLogo} alt="..." />
          </div>
          <div className="h_text">
            <p className="lh-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus facere ipsum molestias architecto quae at, minima
              exercitationem eius voluptates totam ipsam sapiente accusantium?
              Hic excepturi blanditiis quis adipisci et laudantium.
            </p>
          </div>
          <iframe
            src="https://discord.com/widget?id=804478573778829313&theme=dark"
            width="100%"
            height="320px"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
        <div className="h_box2">
          <div className="h_img1">
            <img src={hImg1} alt="..." />
          </div>
          <div className="h_img2">
            <img src={hImg2} alt="..." />
          </div>
          <div className="h_img3">
            <img src={hImg3} alt="..." />
          </div>
        </div>
        <div className="h_box3">
          <div className="h_table">
            <h2>Top Players: X X X</h2>
            <h2>Players online: X X X</h2>
          </div>
          <div className="h_form">
            <form>
              <h2>{show === false ? "Sign up" : show === true ? "Login" : "Forgot Password"}</h2>
              <div className={show === false ? "mb-2" : "d-none"}>
                <label htmlFor="exampleInputName1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName1"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className={show === false || show === true ? "mb-2" : "d-none"}>
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="h_tlabel">
                {show === false ? (
                  <span>
                    Already have an account?
                    <strong
                      className="text-primary"
                      onClick={() => {
                        setShow(true);
                      }}
                    >
                      {" "}
                      Login
                    </strong>
                  </span>
                ) : (
                  <span>
                    Have you forgotten your <br />
                    <strong
                      className="text-primary"
                      onClick={() => {
                        setShow("forgot");
                      }}
                    >
                      username or password
                    </strong>
                  </span>
                )}

                <button type="button" className="btn">
                  Submit
                </button>

                {show === false ? (
                  <span></span>
                ) : (
                  <span>
                    Do you wish to register <br />
                    for a{" "}
                    <strong
                      className="text-primary"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      new account?
                    </strong>
                  </span>
                )}
              </div>
            </form>
            <div className="h_add">
              <img src={hImg1} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
