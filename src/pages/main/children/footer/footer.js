import { LogoSVG } from "src/images/svg";

import "./footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__limit default-container">
        <div className="footer__separator"></div>
        <div className="footer__container">
          <div>
            <LogoSVG variant="footer" />

            <div className="footer__desc">
              Your natural candle made for <br /> your home and for your
              wellness.
            </div>
          </div>

          <div className="footer__links">
            <ul>
              <li className="green-text">Discovery</li>
              <li>New season</li>
              <li>Most searched</li>
              <li>Most selled</li>
            </ul>
            <ul>
              <li className="green-text">About</li>
              <li>Help</li>
              <li>Shipping</li>
              <li>Affiliate</li>
            </ul>
            <ul>
              <li className="green-text">Info</li>
              <li>Contact us</li>
              <li>Privacy Policies</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
