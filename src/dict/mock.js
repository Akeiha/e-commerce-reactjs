import {
  mint,
  strawberry,
  blueberries,
  lemon,
  orange,
  cinammon,
  cherries,
  lavander,
} from "src/images/png/products";

import { edorado, luisa, mart } from "src/images/png/testimonials";

import { Stars4, Stars5 } from "src/images/svg/";

export const productsMock = [
  {
    name: "Spiced Mint",
    price: 9.99,
    cardImg: mint,
  },
  {
    name: "Sweet Straweberry",
    price: 9.99,
    cardImg: strawberry,
  },
  {
    name: "Cool Blueberries",
    price: 9.99,
    cardImg: blueberries,
  },
  {
    name: "Juicy Lemon",
    price: 9.99,
    cardImg: lemon,
  },
  {
    name: "Fresh Orange",
    price: 9.99,
    cardImg: orange,
  },
  {
    name: "Fragrant Cinnamon",
    price: 9.99,
    cardImg: cinammon,
  },
  {
    name: "Summer Cherries",
    price: 9.99,
    cardImg: cherries,
  },
  {
    name: "Clean Lavander",
    price: 9.99,
    cardImg: lavander,
  },
];

export const testimonialsMock = [
  {
    buyerPhoto: luisa,
    stars: <Stars4 />,
    buyerReview: "I love it! No more air fresheners",
    buyerName: "Luisa",
  },
  {
    buyerPhoto: edorado,
    stars: <Stars5 />,
    buyerReview: "Raccomended for everyone",
    buyerName: "Edorado",
  },
  {
    buyerPhoto: mart,
    stars: <Stars4 />,
    buyerReview: "Looks very natural, the smell is awesome",
    buyerName: "Mart",
  },
];
