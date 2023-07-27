import { ProductCard } from "src/components";
import { productsMock } from "src/dict/mock";
import { isEmpty } from "src/dict/lodash";

import "./products.scss";

export function Products() {
  return (
    <div className="products default-container">
      <h2 className="products__title">Products</h2>
      <p className="products__desc">
        Order it for you or for your beloved ones
      </p>
      <div className="products__grid">
        {!isEmpty(productsMock) &&
          productsMock.map(({ price, name, cardImg }, i) => {
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
