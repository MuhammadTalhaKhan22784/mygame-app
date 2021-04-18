import React from "react";
import SuperRange from "../Utills/Range";
import pBuildingL from "../assets/p_buildingL.png";
import pBuildingS from "../assets/p_buildings.png";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

import "./style/Properties.css";
const Properties = () => {
  return (
    <React.Fragment>
      <div className="properties_nav">
        <h2>PROPERTIES</h2>
      </div>
      <div className="properties_main">
        <div className="properties_content">
          <div className="prop_card1">
            <img src={pBuildingL} alt="building" />
            <button>close</button>
          </div>
          <div className="prop_card2">
            <div className="pcard2_header">
              <BiChevronLeft />
              <h2>BUSINESS</h2>
              <BiChevronRight />
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
            <button>OPEN</button>
          </div>
          <div className="prop_card3">
            <div className="pcard3_header">
              <img src={pBuildingS} alt="building" />
              <button>VIEW</button>
            </div>
            <div className="pcard3_middle">
              <p>
                Majority have suffered alteration in some form, by injected
                humour, or ran majority
              </p>
              <button>OPEN</button>
            </div>
            <SuperRange />
          </div>
        </div>
        <div className="prop_main_bottom">
       
          <div className="pmain_left">
            <h2>PROPERTIES AVAILABLE</h2>
            <div>
              <div className="pm_l_head">
                <h2>Buy properties to increase networth & inventory space</h2>
              </div>

              <div className="pm_l_content">
                <ul>
                  <li>
                    There are many variations of passages of Lorem Ipsum
                    
                    <button>BUY</button>
                  </li>
                  <li>
                    There are many variations of passages of Lorem Ipsum
                    
                    <button>BUY</button>
                  </li>
                  <li>
                    There are many variations of passages of Lorem Ipsum
                    
                    <button>BUY</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
       
      
          <div className="pmain_left">
            <h2>PROPERTIES On</h2>
            <div>
              <div className="pm_l_head">
                <h2>Current inventory space: xx, xx,xx</h2>
              </div>

              <div className="pm_l_content">
                <ul>
                  <li>
                    There are many variations of passages of Lorem Ipsum
                    
                    <button>VIEW</button>
                  </li>
                  <li>
                    There are many variations of passages of Lorem Ipsum
                    
                    <button>VIEW</button>
                  </li>
                  <li>
                    There are many variations of passages of Lorem Ipsum
                    
                    <button>VIEW</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </React.Fragment>
  );
};

export default Properties;
