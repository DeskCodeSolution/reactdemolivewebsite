import React from "react";
import { Card } from "../common/Card";
import { Data } from "../common/Data";

function Service() {
    const data = Data;
  return (
    <>
      <div className="my-5">
        <h1 style={{width: '100%',textAlign: 'center'}}>Our Services</h1>
        <div className="container-fluid mb-5 mt-4">
          {/* <div className="row row-cols-3s align-items-center bg-info justify-content-center"> */}
            <div className="col-10 mx-auto">
            <div className="row gy-4">
            {data.map((item,index) => {
                return(
                    <Card key={index} data={item} />
                )
            })}
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
