import { Button } from "src/components";
import { CheckMarkSVG } from "src/images/svg";

import "./info.scss";

export function Info() {
  return (
    <div className="infoblock default-container">
      <div className="infoblock__text">
        <h2>
          Clean and
          <br />
          fragrant soy wax
        </h2>
        <p className="infoblock__desc">
          Made for your home and for your wellness
        </p>
        <div className="infoblock__checklist">
          <p>
            <CheckMarkSVG /> <span>Eco-sustainable: </span>All recyclable
            materials, 0% CO2 emissions
          </p>
          <p>
            <CheckMarkSVG /> <span>Hyphoallergenic: </span>100% natural, human
            friendly ingredients
          </p>
          <p>
            <CheckMarkSVG /> <span>Handmade: </span>All candles are craftly made
            with love.
          </p>
          <p>
            <CheckMarkSVG /> <span>Long burning: </span>No more waste. Created
            for last long.
          </p>
        </div>
        <Button>Learn more</Button>
      </div>
      <div className="infoblock__img">
        <div className="candle_green">
          <div className="candle_yellow"></div>
        </div>
      </div>
    </div>
  );
}
