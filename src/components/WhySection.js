import React from "react";
import CarRental from "../Assets/svgs/carRental.svg";
import classes from "./WhySection.module.css";
import Why1 from "../Assets/svgs/Why1.svg";
import Why2 from "../Assets/svgs/Why2.svg";
import Why3 from "../Assets/svgs/Why3.svg";
import Why4 from "../Assets/svgs/Why4.svg";

const WhySection = () => {
  return (
    <div className={`${classes.main}`}>
      <div className={`${classes.griditem}`}>
        <img
          className={`${classes.image}`}
          src={CarRental}
          alt="Car Rental"
        ></img>
      </div>
      <div>
        <h1 className={`${classes.h1}`}>
          WHY <span className={`${classes.highlight}`}>YATRI</span>{" "}
        </h1>
        <div className={`${classes.text}`}>
          <ul className={`${classes.list}`}>
            <li className={`${classes.listitem}`}>
              <img width="60px" src={Why1} alt="1.svg" />
              <div className={`${classes.typography}`}>
                <h4 className={`${classes.heading}`}>Fast response time</h4>
                <p>
                  Avail Best Car Rental Service in Lucknow with driver for Local
                  or Outstation within the moment of your call for best car hire
                  experience.
                </p>
              </div>
            </li>
            <li className={`${classes.listitem}`}>
              <img width="60px" src={Why2} alt="2.svg" />
              <div>
                <h4 className={`${classes.heading}`}>Vast fleet</h4>
                <p>
                  We have all kinds of Car on Rent available like Sedan, Suv,
                  Muv, Premium Sedan, Tampo Traveller etc as per ur requirement.
                </p>
              </div>
            </li>
            <li className={`${classes.listitem}`}>
              <img width="60px" src={Why3} alt="3.svg" />
              <div>
                <h4 className={`${classes.heading}`}>Easy to order</h4>
                <p>
                  Easily Book Cab Online with our website or call our customer
                  support team.
                </p>
              </div>
            </li>
            <li className={`${classes.listitem}`}>
              <img width="60px" src={Why4} alt="4.svg" />
              <div>
                <h4 className={`${classes.heading}`}>Great tariffs</h4>
                <p>
                  Rent A Car !Our car hire tariff are very low when compare to
                  other operators in Lucknow. Book online cabs with best prices
                  in Lucknow at Yatri Car Rental.{" "}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
