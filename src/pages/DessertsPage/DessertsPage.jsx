import { useState, useEffect } from "react";
import { fetchAllDesserts } from "../../services/firebase-functions";
import classes from "./DessertsPage.module.scss";
import DessertCard from "../../components/DessertCard/DessertCard";
import NavBar from "../../components/NavBar/NavBar";

const DessertsPage = () => {
  const [desserts, setDesserts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getDesserts = async () => {
      const allDesserts = await fetchAllDesserts();
      setDesserts(allDesserts);
      setIsLoaded(true);
    };

    getDesserts();
  }, []);

  return (
    <>
      <NavBar />
      <div
        className={`${classes.dessertsPage} ${isLoaded ? classes.loaded : ""}`}
      >
        <h1
          className={`${classes.pageTitle} ${isLoaded ? classes.loaded : ""}`}
        >
          <i className="fa-solid fa-star"></i>Desserts Showcase
          <i className="fa-solid fa-star"></i>
        </h1>

        <div className={classes.dessertsGrid}>
          {desserts.map((dessert, index) => (
            <DessertCard
              key={dessert.id}
              dessert={dessert}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DessertsPage;
