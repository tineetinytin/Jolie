import React from 'react';
import img2 from "../assets/watch4.jpg";
import img3 from "../assets/watch5.jpg";
import img4 from "../assets/watch2.jpg";
import img5 from "../assets/9.jpeg";
import img6 from "../assets/white1.jpg";
import img7 from "../assets/white2.jpg";
import img8 from "../assets/white3.jpg";



function Homepage() {
    return (
        <div>
        <div classNameName="imageBoxTwo">
        <div className="imageBoxTwoContainer">
          <img className="image2" src={img2} alt="cant load"></img>
          <img className="image2" src={img3} alt="cant load"></img>
          <img className="image2" src={img4} alt="cant load"></img>
        </div>
      </div>

      <div className="imageBoxThree">
        <div className="imageBoxThreeContainer">
          <img className="image3" src={img5} alt="cant load"></img>
        </div>
      </div>

      <div className="imageBoxFour">
        <div className="imageBoxFourContainer">
          <img className="image2" src={img6} alt="cant load"></img>
          <img className="image2" src={img7} alt="cant load"></img>
          <img className="image2" src={img8} alt="cant load"></img>
        </div>
      </div>
      </div>
  )
}

export default Homepage;

