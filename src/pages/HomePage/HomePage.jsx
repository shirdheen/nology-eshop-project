import { useState, useEffect } from "react";
import {
  fetchAllDesserts,
  fetchFeaturedDesserts,
} from "../../services/firebase-functions.js";
import classes from "./HomePage.module.scss";
import Carousel from "../../components/Carousel/Carousel.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";

const HomePage = () => {
  const [desserts, setDesserts] = useState([]);
  const [featuredDesserts, setFeaturedDesserts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const allDesserts = await fetchAllDesserts();
      const featured = await fetchFeaturedDesserts();
      console.log("Featured Desserts:", featured);
      setDesserts(allDesserts);
      setFeaturedDesserts(featured);
      setIsLoaded(true);
    };

    fetchData();
  }, []);

  return (
    <div className={`${classes.homePage} ${isLoaded ? classes.loaded : ""}`}>
      {/* NavBar */}
      <header className={classes.headerWrapper}>
        <NavBar />
      </header>

      {/* Carousel */}
      <section>
        <h2 className={classes.sectionHeading}>
          <i className="fa-solid fa-star"></i>
          Chef's Favouites
          <i className="fa-solid fa-star"></i>
        </h2>
        <Carousel desserts={featuredDesserts} />
      </section>
    </div>
  );
};

export default HomePage;
