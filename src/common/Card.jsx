import React from "react";
import { NavLink } from "react-router-dom";


export function Card(props) {
    const {data} = props;
    console.log(data)
  return (
    <>
      {/* <div className="col p-3">
        <div class="card" style={{ width: "18rem" }}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div> */}
      {/* <div className="row"> */}
          <div className="col-md-4 col-10 mx-auto">
          <div className="card">
          <img src={data.imgsrc} height={250} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="" className="btn btn-outline-primary my-1">
              Go somewhere
            </NavLink>
          </div>
        </div>
          </div>
      {/* </div> */}
    </>
  );
}
