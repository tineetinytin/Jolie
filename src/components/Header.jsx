import React from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import LocalPhoneRoundedIcon from '@material-ui/icons/LocalPhoneRounded';




function Header() {
    return (
      <div className="header">
      <div className="top">
        <div>
        <LocationOnOutlinedIcon className="locationIcon"/> 
        United States &nbsp;
        <LocalPhoneRoundedIcon className="customerServiceIcon"/> 
        Client Services
        </div>
        <div>
        <FavoriteBorderRoundedIcon className="heartIcon"/> &nbsp; &nbsp;
        <WorkOutlineIcon  className="bagIcon"/> &nbsp;Bag
        </div>
      </div>
      <h1><a href="#">J O L I E</a></h1>
  
    </div>
    )
  }
  
  export default Header;