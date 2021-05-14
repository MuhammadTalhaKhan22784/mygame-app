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
         
          <div className="h_form">
            <form>
              <h2>
                {show === false
                  ? "Register your new account"
                  : show === true
                  ? "Login to your account"
                  : "Forgot Password"}
              </h2>
              {show === false ? (
                <>
                  <div className="mb-2">
                    <label htmlFor="exampleInputName1" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName1"
                      placeholder="Enter full name"
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
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter your password"
                    />
                  </div>
                </>
              ) : show === true ? (
                <>
                  <div className="mb-2">
                    <label htmlFor="exampleInputEmail2" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail2"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter your password"
                    />
                  </div>
                </>
              ) : (
                <div className="mb-2">
                  <label htmlFor="exampleInputEmail2" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail2"
                    placeholder="Enter your email"
                    />
                </div>
              )}
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
                  {show === false ? "Register" : show === true ? "Login" : "submit"}
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
              <img
              
              style={{height: show === false ? "167px" : show === true ? "173px" : "244px"}}
              src={hImg1} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
