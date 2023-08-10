import { useState } from "react";
import { useParams } from "react-router-dom";
import { productsMock } from "src/dict/mock";
import { Button, Quantity } from "src/components";
import { CartSVG } from "src/images/svg";
import { isEmpty } from "src/dict/lodash";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, selectCount } from "src/store/product/products.slice";

import "./product-page.scss";

export function ProductPage() {
  const { id } = useParams();
  const item = productsMock.find((product) => product.id === id);

  const [counter, setCounter] = useState(1);
  const productsStore = useSelector(selectCount);
  const dispatch = useDispatch();

  if (isEmpty(item)) {
    return <div>404</div>;
  }

  console.log(productsStore);

  return (
    <div className="productpage default-container">
      <div>
        <div
          className="productpage__bg"
          style={{ backgroundImage: `url(${item.cardImg})`, height: 396 }}
        ></div>
        <p className="productpage__desc">
          All hand-made with natural soy wax, Candleaf is made for your pleasure
          moments. <br /> <br />
          🚚 <span className="free">FREE SHIPPING</span>
        </p>
      </div>
      <div>
        <p className="productpage__name">{item.name} Candleaf®</p>

        <div className="productpage__body">
          <div>
            <p className="productpage__price">$ {item.price}</p>
            <Quantity state={counter} setState={setCounter}>
              Quantity
            </Quantity>
          </div>

          <div>
            <RadioButtons />
            <Button
              variant="bigButton"
              onClick={() => dispatch(addProduct({ id: id, count: counter }))}
              disabled={productsStore.findIndex((val) => val.id === id) !== -1}
            >
              <CartSVG /> + Add to cart
            </Button>
          </div>
        </div>

        <div className="productpage__characteristics">
          <p>
            <span className="productpage__characteristics__name">Wax:</span> Top
            grade Soy wax that delivers a smoke less, consistent burn
          </p>
          <p>
            <span className="productpage__characteristics__name">
              Fragrance:
            </span>{" "}
            Premium quality ingredients with natural essential oils
          </p>
          <div className="three">
            <p>
              <span className="productpage__characteristics__name">
                Burning Time:
              </span>{" "}
              70-75 hours
            </p>
            <p>
              <span className="productpage__characteristics__name">
                Dimension:
              </span>{" "}
              10cm x 5cm
            </p>
            <p>
              <span className="productpage__characteristics__name">
                Weight:
              </span>{" "}
              400g
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RadioButtons() {
  const [value, setValue] = useState("1");

  function chengeValue(event) {
    setValue(event.target.value);
  }

  return (
    <div className="subscription">
      <div className="subscription__off subscription__text">
        <input
          type="radio"
          id="radio"
          name="radio"
          value="1"
          checked={value === "1" ? true : false}
          onChange={chengeValue}
        />
        <label htmlFor="radio">One time purchase</label>
      </div>

      <div className="subscription__on subscription__text">
        <input
          type="radio"
          id="radio"
          name="radio"
          value="2"
          checked={value === "2" ? true : false}
          onChange={chengeValue}
        />
        <label htmlFor="radio">Subscribe and delivery every </label>
        <select name="weeks">
          <option value={1}>week</option>
          <option value={2}>2 weeks</option>
          <option value={3}>3 weeks</option>
          <option value={4}>4 weeks</option>
        </select>
        <p className="subscription__desc">
          Subscribe now and get the 10% of discount on every recurring order.
          The discount will be applied at checkout. <a>See details</a>
        </p>
      </div>
    </div>
  );
}
