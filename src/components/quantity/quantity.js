import { useDispatch } from "react-redux";

import "./quantity.scss";
import { newCountProduct } from "src/store/product/products.slice";
import { isEmpty } from "src/dict/lodash";

export function Quantity({ children, state, setState, id }) {
  const dispatch = useDispatch();

  const incCounter = () => {
    if (state >= 5) {
      !isEmpty(setState) && setState(state);
    } else {
      !isEmpty(setState) && setState(state + 1);
    }

    if (state < 6 && !isEmpty(id)) {
      dispatch(newCountProduct({ id, count: state + 1 }));
    }
  };

  const decCounter = () => {
    if (state > 1) {
      !isEmpty(setState) && setState(state - 1);
    } else {
      !isEmpty(setState) && setState(1);
    }

    if (state > 1 && !isEmpty(id)) {
      dispatch(newCountProduct({ id, count: state - 1 }));
    }
  };

  return (
    <div className="quantity">
      <p>{children}</p>
      <div className="quantity__counter">
        <button
          onClick={incCounter}
          className="quantity__button"
          disabled={state >= 5}
        >
          +
        </button>
        {state}
        <button
          onClick={decCounter}
          className="quantity__button"
          disabled={state === 1}
        >
          -
        </button>
      </div>
    </div>
  );
}
