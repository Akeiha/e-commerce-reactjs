import { ProductCard } from "src/components";
import { productsMock } from "src/dict/mock";
import { isEmpty } from "src/dict/lodash";

import "./popular.scss";

export function Popular() {
  return (
    <div className="popular default-container">
      <h2>Popular</h2>
      <p className="popular__desc">Our top selling product that you may like</p>
      <div className="popular__grid">
        {!isEmpty(productsMock) &&
          productsMock.slice(0, 4).map(({ price, name, cardImg }, i) => {
            return (
              <ProductCard
                key={i}
                price={price}
                name={name}
                cardImg={cardImg}
              />
            );
          })}
      </div>
    </div>
  );
}
