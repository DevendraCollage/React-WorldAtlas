import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink className="nav-link" to={"/"}>
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink className="nav-link" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to={"/about"}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to={"/country"}>
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to={"/contact"}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
