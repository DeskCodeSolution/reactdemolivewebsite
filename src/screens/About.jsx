import React from "react";
import Common from "../common/Common";
import { Strings } from "../common/Strings";
import about from '../images/about2.png';

function About() {
  return (
    <>
      <Common
        bValue="Contact Now"
        link='/contact'
        paragraph="We are team of talented developer making websites"
        msgOne="Grow your business with"
        msgTwo="Deskcode Solution"
        image={about}
      >
          {/* <img
                    src={image}
                    className="img-fluid animated"
                    alt="Home Image"
                  /> */}
      </Common>
    </>
  );
}

export default About;
