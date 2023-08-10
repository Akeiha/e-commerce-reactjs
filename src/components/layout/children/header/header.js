import { NavLink } from "react-router-dom";
import { LogoSVG, DropDownSVG, ProfileSVG, CartSVG } from "src/images/svg";

import "./header.scss";
import { isActiveLink } from "src/dict/link";

export function Header() {
  return (
    <header className="header default-container">
      <div className="centered-content">
        <NavLink
          to="/"
          onClick={() => {
            document.getElementById("root").scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <LogoSVG />
        </NavLink>

        <nav className="header__nav">
          <ul>
            <li>
              Discovery <DropDownSVG />
            </li>
            <li>
              <NavLink to="/about" className={isActiveLink}>
                About
              </NavLink>
            </li>
            <li>Contact us</li>
          </ul>
        </nav>

        <div className="header__pc">
          <ProfileSVG />
          <NavLink to="/cart" className={isActiveLink}>
            <CartSVG />
          </NavLink>
        </div>
      </div>
      <div className="header__line"></div>
    </header>
  );
}
