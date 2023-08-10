import { ProductCard } from "src/components";
import { productsMock } from "src/dict/mock";
import { isEmpty } from "src/dict/lodash";

import "./products.scss";

export function Products({ refCustom }) {
  return (
    <div className="products default-container" ref={refCustom}>
      <h2 className="products__title">Products</h2>
      <p className="products__desc">
        Order it for you or for your beloved ones
      </p>
      <div className="products__grid">
        {!isEmpty(productsMock) &&
          productsMock.map(({ price, name, cardImg, id }, i) => {
            return (
              <ProductCard
                key={i}
                price={price}
                id={id}
                name={name}
                cardImg={cardImg}
              />
            );
          })}
      </div>
    </div>
  );
}
