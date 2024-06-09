import React from "react";
import image from "../Assets/svgs/compareImage.svg";
import classes from "./Compare.module.css";
import Compare3 from "../Assets/svgs/Compare3.svg";

const Compare = () => {
  return (
    <div className={`${classes.main}`}>
      <div>
        <h2>
          WHY CHOOSE AC BUS OR AC TRAIN FOR YOUR{" "}
          <span className={`${classes.highlight}`}>One-way Journey?</span>
        </h2>
        <p>
          Our oneway cab service is cheaper than AC bus and 2 tier AC train
          ticket fares, it reduces your travel time and you travel at your own
          private space also to enjoy your journey. Our one way taxi will come
          at your doorstep and take you to your desired destination. So book you
          oneway cab from Lucknow to Gorakhpur or Varanasi to Bareilly.
          <br />
          <span style={{ fontWeight: 800 }}>Read More....</span>
        </p>
      </div>
      <div>
        <img src={image} alt="image.svg" />
      </div>
      <div className={`${classes.second}`}>
        <h1 className={`${classes.highlight}`}>Why Choose One way Cab?</h1>
        <div
          //   style={{ border: "2px solid black" }}
          className={`${classes.reason}  `}
        >
          <div>
            <ul className={`${classes.list}`}>
              <li>Instant Booking & Confirmation</li>
              <li>Confirmed Booking Immediately</li>
              <li>No Return Fare for One-Way Trip</li>
              <li>Clean & Professional Cab Services</li>
              <li>Transparent Billing with GPS based billing system</li>
            </ul>
          </div>
          <div>
            <img src={Compare3} alt="driving.svg" />
          </div>
          <div>
            <ul className={`${classes.list}`}>
              <li>Pick-up from your house</li>
              <li>Dedicated Cab just for you</li>
              <li>Drop to your desired destination</li>
              <li>Completed more than 20,000+ One-Way Trips</li>
              <li>Multiple Payment Option including Credit Card.</li>
            </ul>
          </div>
        </div>
        <p className={`${classes.note}`}>
          Discover affordable travel with our seamless
          <span className={`${classes.highlight}`}>
            {" "}
            Intercity car rentals{" "}
          </span>
          in India – where excellence meets affordability with standardized
          rates in every city. Unleash your journey!`
        </p>
      </div>
    </div>
  );
};

export default Compare;
