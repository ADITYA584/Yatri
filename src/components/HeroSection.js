import React, { useState } from "react";
import classes from "./HeroSection.module.css";
import DownG from "../Assets/svgs/DownG.svg";
import DownA from "../Assets/svgs/DownA.svg";

const HeroSection = () => {
  const [rentFor, setRentFor] = useState("Out Station");
  const [travelType, setTravelType] = useState("Round Trip");

  const FormOutatation = () => {
    return (
      <div className={`${classes.inputs}`}>
        <div className={`${classes.input_div}`}>
          <label className={`${classes.label}`} htmlFor="cityA">
            FROM
          </label>
          <input
            className={`${classes.input}`}
            type="text"
            placeholder="Enter City A"
            id="cityA"
          />
        </div>
        <div className={`${classes.input_div}`}>
          <label className={`${classes.label}`} htmlFor="cityB">
            TO
          </label>
          <input
            className={`${classes.input}`}
            type="text"
            id="cityB"
            placeholder="Enter City B"
          />
        </div>
        <div className={`${classes.special}`}>
          <div className={`${classes.input_div}`}>
            <label className={`${classes.label}`} htmlFor="date">
              PICK UP DATE
            </label>
            <input
              className={`${classes.input}`}
              id="date"
              defaultValue={new Date().toDateString()}
              type="date"
              placeholder="Pick up Date"
            />
          </div>

          <div className={`${classes.input_div}`}>
            <label className={`${classes.label}`} htmlFor="rdate">
              RETURN DATE
            </label>
            <input
              className={`${classes.input}`}
              type="date"
              id="rdate"
              placeholder="Enter Date"
            />
          </div>

          <div className={`${classes.input_div}`}>
            <label className={`${classes.label}`} htmlFor="time">
              PICK UP AT
            </label>
            <input
              className={`${classes.input}`}
              type="time"
              id="time"
              placeholder="Pick up At"
            />
          </div>
        </div>
      </div>
    );
  };

  const FormOutatationB = () => {
    return (
      <div className={`${classes.inputs}`}>
        <div className={`${classes.input_div}`}>
          <label className={`${classes.label}`} htmlFor="cityA">
            FROM
          </label>
          <input
            className={`${classes.input}`}
            type="text"
            placeholder="Enter City A"
            id="cityA"
          />
        </div>
        <div className={`${classes.input_div}`}>
          <label className={`${classes.label}`} htmlFor="cityB">
            TO
          </label>
          <input
            className={`${classes.input}`}
            type="text"
            id="cityB"
            placeholder="Enter City B"
          />
        </div>

        <div className={`${classes.input_div}`}>
          <label className={`${classes.label}`} htmlFor="date">
            PICK UP DATE
          </label>
          <input
            className={`${classes.input}`}
            id="date"
            defaultValue={new Date().toDateString()}
            type="date"
            placeholder="Pick up Date"
          />
        </div>

        <div className={`${classes.input_div}`}>
          <label className={`${classes.label}`} htmlFor="time">
            PICK UP AT
          </label>
          <input
            className={`${classes.input}`}
            type="time"
            id="time"
            placeholder="Pick up At"
          />
        </div>
      </div>
    );
  };

  const clickHandlerA = (e) => {
    e.preventDefault();
    setRentFor(e.target.value);
  };
  const clickHandlerB = (e) => {
    e.preventDefault();
    setTravelType(e.target.value);
  };

  return (
    <div className={`${classes.hero}`}>
      <div className={`${classes.main}`}>
        <div className={`${classes.typography}`}>
          <p>
            ​India's{" "}
            <span className={`${classes.highlight}`}>
              Leading
              <br /> One-Way Inter-City
              <br />
            </span>{" "}
            Cab Service Provider
          </p>
        </div>
        <div className={`${classes.form}`}>
          <div className={`${classes.traveldetail}`}>
            <div className={`${classes.location}`}>
              <button
                value="Out Station"
                onClick={(e) => clickHandlerA(e)}
                className={`${classes.button_G_1}`}
              >
                Out Station
              </button>
              <button
                onClick={(e) => clickHandlerA(e)}
                value="Local"
                className={`${classes.button_G_1}`}
              >
                Local
              </button>
              <button
                onClick={(e) => clickHandlerA(e)}
                value="Airport"
                className={`${classes.button_G_1}`}
              >
                Airport
              </button>
            </div>
            {rentFor !== "Airport" && (
              <div className={`${classes.traveltype}`}>
                <button
                  onClick={(e) => clickHandlerB(e)}
                  value="One Way"
                  className={`${classes.button_G_2}`}
                >
                  One Way
                </button>
                <button
                  onClick={(e) => clickHandlerB(e)}
                  value="Round Trip"
                  className={`${classes.button_G_2}`}
                >
                  Round Trip
                </button>
              </div>
            )}
          </div>
          <div>
            {rentFor === "Out Station" &&
              travelType === "Round Trip" &&
              FormOutatation()}
            {((rentFor === "Out Station" && travelType === "One Way") ||
              rentFor === "Airport") &&
              FormOutatationB()}
          </div>
          <button className={`${classes.button_Submit}`}>EXPLORE CABS</button>
        </div>
      </div>
      <div className={`${classes.free}`}>
        <div className={`${classes.free_l_r}`}>
          <p className={`${classes.free_text_1}`}>No over-pricing</p>
          <p>Cheapest costs | Competitive prices</p>
        </div>
        <div
          style={{
            textAlign: "center",
            borderRight: "1px solid black",
            borderLeft: "1px solid black",
          }}
        >
          <p>Download Now!</p>
          <div className={`${classes.free_images}`}>
            <p>
              <img width="204px" src={DownG} alt="play Store" />
            </p>
            <p>
              <img width="204px" src={DownA} alt="App Store" />
            </p>
          </div>
        </div>
        <div>
          <p className={`${classes.free_text_1}`}>No return fare</p>
          <p>One-Way cab fare | No hidden charges</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
