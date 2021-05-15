import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <img
          src="https://api.nasa.gov/assets/footer/img/favicon-192.png"
          //   height="20px"
          width="5%"
        />
        <Link to="/">Enjoy NASA API </Link>
      </h1>
      <ul>
        <li>
          <Link to="/photo">Picture Of The Day</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
