import { Seedling } from "src/images/svg";
import { Button } from "src/components";

import "./welcome.scss";

export function Welcome({ scrollToProductBlock }) {
  return (
    <div className="welcome">
      <div className="welcome__body">
        <p className="welcome__title">
          <Seedling /> The nature candle
        </p>
        <p className="welcome__desc">
          All handmade with natural soy wax, Candleaf is a companion for all{" "}
          <br /> your pleasure moments{" "}
        </p>
        <Button onClick={scrollToProductBlock}>Discovery our collection</Button>
      </div>
    </div>
  );
}
