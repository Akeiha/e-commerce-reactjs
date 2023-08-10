import { NavLink, Link } from "react-router-dom";
import { Button, Quantity } from "src/components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, delProduct } from "src/store/product/products.slice";
import { isEmpty } from "src/dict/lodash";
import { productsMock } from "src/dict/mock";

import "./cart.scss";

export function CartPage() {
  const productsStore = useSelector(selectCount);
  const dispatch = useDispatch();

  const totalAmount = !isEmpty(productsStore)
    ? productsStore
        .map(
          ({ count, id }) =>
            count * productsMock.find((product) => product.id === id).price
        )
        .reduce((acc, number) => acc + number)
    : 0;

  return (
    <div className="cart default-container">
      <h1 className="cart__title ">Your cart items</h1>
      <NavLink to="/">
        <p className="back">Back to shopping</p>
      </NavLink>

      <div className="divTable">
        <div className="divTable__Body">
          <div className="divTable__Row">
            <div className="divTable__Cell products-cell">Product</div>
            <div className="divTable__Cell price-cell">Price</div>
            <div className="divTable__Cell">Quantity</div>
            <div className="divTable__Cell total-cell">Total</div>
          </div>

          {!isEmpty(productsStore) &&
            productsStore.map((item, i) => {
              const product = productsMock.find(
                (product) => product.id === item.id
              );

              return (
                <div className="divTable__Row" key={i}>
                  <div className="divTable__Cell products-cell">
                    <div
                      style={{
                        display: "flex",
                        marginTop: "37px",
                        marginBottom: "13px",
                        gap: "30px",
                      }}
                    >
                      <Link key={product.id} to={`/productpage/${product.id}`}>
                        <div
                          className="divTable__photo"
                          style={{
                            backgroundImage: `url(${product.cardImg})`,
                            height: 130,
                          }}
                        ></div>
                      </Link>
                      <div>
                        <p className="product-name">{product.name} Candleaf®</p>
                        <div
                          onClick={() => dispatch(delProduct(product.id))}
                          className="remove"
                        >
                          Remove
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="divTable__Cell price-cell">
                    <p className="cell-container">$ {product.price}</p>
                  </div>

                  <div className="divTable__Cell">
                    <div
                      className="cell-container"
                      style={{
                        justifyContent: "center",
                      }}
                    >
                      <Quantity state={item.count} id={item.id} />
                    </div>
                  </div>

                  <div className="divTable__Cell total-cell">
                    <p
                      className="cell-container"
                      style={{
                        justifyContent: "flex-end",
                      }}
                    >
                      $ {product.price * item.count}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="cart__footer">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <p className="cart__footer__total">Sub-total</p>
            <p className="cart__footer__total">$ {totalAmount}</p>
          </div>
          <p className="cart__footer__desc">
            Tax and shipping cost will be calculated later
          </p>
        </div>
        <Button>Check-out</Button>
      </div>
    </div>
  );
}
