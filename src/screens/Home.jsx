import React from "react";
import Common from "../common/Common";
import { Strings } from "../common/Strings";
// import "../styles/Home.css";
import web from "../images/mobile2.png";
// import man from "../images/Man.png";
// import table from "../images/table.png";
// import watch from "../images/watch.png";
// import board from "../images/notice_board.png";
// import leftWoman from "../images/left_woman.png";
// import rightWoman from "../images/right_woman.png";

function Home() {
  return (
    <>
      <Common
        bValue="Get Started"
        link='/service'
        paragraph={Strings.home_msg}
        msgOne="Grow your business with"
        msgTwo="Deskcode Solution"
        image={web}
      >
        {/* <div className="animated"> */}
        {/* <div className="animation">
          <img src={watch} className="img-fluid animate_watch" alt="Watch" />
          <img src={board} className="img-fluid animate_board" alt="Notice Board" />
          <img src={man} className="img-fluid animate_man" alt="Man" />
          <img src={rightWoman} className="img-fluid animate_right" alt="Right Woman" />
          <img src={leftWoman} className="img-fluid animate_left" alt="Left Woman" />
          <img src={table} className="img-fluid animate_table" alt="Table" />
        </div> */}
      </Common>
    </>
  );
}

export default Home;
