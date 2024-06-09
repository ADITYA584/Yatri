import React from "react";
import classes from "./Textsection1.module.css";

const Textsection1 = () => {
  return (
    <div className={`${classes.main}`}>
      <div className={`${classes.heading}`}>
        <p>
          {" "}
          DISCOVERING INDIA'S DEIVERSE LANDSCAPES,
          <br />
          ONE SENIC ROAD TRIP AT A TIME.
        </p>
      </div>
      <div>
        <ul className={`${classes.list}`}>
          <li>
            Experience the thrill of road travel with our reliable car rental
            and taxi service as we explore the diverse landscapes of India
            together. We're passionate about making car hire accessible and
            enjoyable for everyone.
          </li>
          <li>
            Instead of worrying about the road, relax in our chauffeur-driven
            cabs on your next vacation. With a presence in over 2000 cities
            across India, we're here to take you wherever your heart desires
            with our car rental services.
          </li>
          <li>
            We cherish the freedom to stop, breathe in the fresh air, immerse in
            local cultures, and Savor regional cuisines along the way. These
            moments of discovery enrich your travels and create lasting memories
            through our rent a car service.
          </li>
          <li>
            No destination is too far or too close; we encourage you to explore
            the beauty around you with our car hire options. Pack your bags, set
            out on weekend adventures, and uncover the gems in your vicinity
            with our taxi service.
          </li>

          <li>
            Planning your trip is a breeze with our user-friendly website, or
            you can chat with our travel experts at 8960170877 for personalized
            guidance on car rental. Our cab booking app simplifies the process,
            ensuring a hassle-free experience when you rent a car.
          </li>
          <li>
            Our experienced drivers are your companions on the road, guiding you
            through India's best experiences with our car rental and taxi
            service. From booking to your safe return home, we're dedicated to
            ensuring you have an exceptional road trip.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Textsection1;
