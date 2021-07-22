import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Common.css";
// import man from "../images/Man.png";
// import table from "../images/table.png";
// import watch from "../images/watch.png";
// import board from "../images/notice_board.png";
// import leftWoman from "../images/left_woman.png";
// import rightWoman from "../images/right_woman.png";

const Common = (props) => {
  const { msgOne, msgTwo, paragraph, bValue, link, image } = props;
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {msgOne} <strong>{msgTwo}</strong>
                  </h1>
                  <p className="my-3">{paragraph}</p>
                  <div>
                    <NavLink
                      exact
                      // type="button"
                      className="btn btn-outline-primary my-1"
                      to={link}
                    >
                      {bValue}
                    </NavLink>
                  </div>
                  {/* <div className="mt-3">
                    <a href="" className="btn-get-started">
                        Get Started
                    </a>
                </div> */}
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={image}
                    className="img-fluid animated"
                    alt="Image not load"
                  />
                  {/* {children} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
