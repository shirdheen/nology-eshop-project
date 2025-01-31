import { Link } from "react-router";
import classes from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={classes.navBar}>
      <div>
        <img src="/src/assets/logo-no-bg.png" alt="Logo" />
        <h1>Whisk and Whimsy!</h1>
      </div>
      <ul className={classes.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/desserts">Desserts</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
