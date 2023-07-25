import { LogoSVG, DropDownSVG, ProfileSVG, CartSVG } from "src/images/svg";

import "./header.scss";

export function Header() {
  return (
    <header className="header default-container">
      <LogoSVG />

      <nav className="header__nav Roboto-font">
        <ul>
          <li>
            Discovery <DropDownSVG />
          </li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </nav>

      <div className="header__pc">
        <ProfileSVG />
        <CartSVG />
      </div>
    </header>
  );
}
