import React from "react";
import classes from "./Sectiongrid.module.css";
import Hand from "../Assets/svgs/Hand.svg";
import Driving from "../Assets/svgs/driving.svg";
import Location from "../Assets/svgs/location.svg";

const Sectiongrid = () => {
  return (
    <div className={`${classes.main}`}>
      <table className={`${classes.table}`}>
        <thead className={`${classes.thead}`}>
          <tr>
            <td>CAR TYPE</td>
            <td>MODEL INCLUDES</td>
            <td>PASSENGER</td>
            <td>IDEAL FOR</td>
            <td>FARE</td>
          </tr>
        </thead>
        <tbody className={`${classes.tbody}`}>
          <tr>
            <td>AC Hatchbacks</td>
            <td>Wagon R, Celerio, Micra etc.</td>
            <td>4 Pax</td>
            <td>Budget trips over short distances</td>
            <td>Rs.11/KM</td>
          </tr>
          <tr>
            <td>AC SUV </td>
            <td>Ertiga, Xylo etc. </td>
            <td>6 - 7 Pax</td>
            <td>Premium trips with large families</td>
            <td>Rs.13/KM</td>
          </tr>
          <tr>
            <td>AC Sedans</td>
            <td>Etios, Amaze, Dzire etc.</td>
            <td>4 Pax</td>
            <td>Comfortable trips with small families</td>
            <td>Rs.11/KM</td>
          </tr>
        </tbody>
      </table>
      <div className={`${classes.features}`}>
        <div className={`${classes.feature_div}`}>
          <img src={Hand} alt="Hand.svg" />
          <h4 className={`${classes.featureHeading}`}>
            Return Fare, Not Fair!
          </h4>
          <p>
            Why Pay for Return Journey when you are travelling one-way? Now get
            discounted AC Taxi at just half of the round trip cost for your
            one-way travel.
          </p>
        </div>
        <div
          style={{ borderRight: "1px solid", borderLeft: "1px solid" }}
          className={`${classes.feature_div}`}
        >
          <img src={Location} alt="location.svg" />
          <h4 className={`${classes.featureHeading}`}>
            Return Fare, Not Fair!
          </h4>
          <p>
            Since the GPS data captures the actual distance and time traveled,
            it reduce the chance of Kilometer tampering or discrepancies in
            billing.
          </p>
        </div>
        <div className={`${classes.feature_div}`}>
          <img src={Driving} alt="driving.svg" />
          <h4 className={`${classes.featureHeading}`}>
            Return Fare, Not Fair!
          </h4>
          <p>
            Lucknow | Gorakhpur | Varanasi <br />| Allahabad | Bareilly
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sectiongrid;
