import React from "react";
import BodyStyled from "../../style/GlobalBodyStyle";
import mobileBackground from "../../assets/Mobile_Bg.png";

const HomePage = () => {
  return (
    console.log(mobileBackground) || (
      <>
        <BodyStyled backgroundImage={mobileBackground} />
        <div>Home page</div>
      </>
    )
  );
};

export default HomePage;
