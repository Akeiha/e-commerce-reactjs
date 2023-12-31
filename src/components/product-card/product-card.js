import { Link } from "react-router-dom";
import { CardBgSVG } from "src/images/svg";

import "./product-card.scss";

export function ProductCard({ name, price, cardImg, id }) {
  return (
    <Link key={id} to={`/productpage/${id}`}>
      <div className="product">
        <div
          className="product__img"
          style={{ backgroundImage: `url(${cardImg})`, height: 210 }}
        ></div>
        <div className="product__content">
          <p className="product__name">{name}</p>
          <p className="product__price">{price}$</p>
        </div>
        <CardBgSVG />
      </div>
    </Link>
  );
}
