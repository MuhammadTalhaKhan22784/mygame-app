import React, { useState } from "react";
import "./style/Home.css";

import betaLogo from "../assets/Beta Logo.png";
import hImg1 from "../assets/h_img1.jpg";
import hImg2 from "../assets/h_img2.jpg";

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
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus facere ipsum molestias architecto quae at, minima
              exercitationem eius voluptates totam ipsam sapiente accusantium?
              Hic excepturi blanditiis quis adipisci et laudantium.
            </p>
          </div>
          <iframe
            src="https://discord.com/widget?id=804478573778829313&theme=dark"
            width="100%"
            height="410px"
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
            <img src={hImg1} alt="..." />
          </div>
        </div>
        <div className="h_box3">
          <div className="h_table">
            <h2>The Crime Top Players</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="h_form">
            <form>
              <h2>{show === false ? "Sign up" : "Login"}</h2>
              <div className={show === false ? "mb-3" : "d-none"}>
                <label htmlFor="exampleInputName1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="h_tlabel d-flex align-items-center justify-content-between w-100">
               { 
               show === false ?
               <span>
                  already an account?{" "}
                  <strong className="text-primary"
                  onClick={()=>{setShow(true)}}
                  >Login</strong>
                </span>
                :
                <span>
                  don't have an account?{" "}
                  <strong className="text-primary"
                  onClick={()=>{setShow(false)}}
                  >Sign up</strong>
                </span>
                }

                <button type="button" className="btn btn-primary">
                  Submit
                </button>
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
