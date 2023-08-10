import { useRef } from "react";
import { Welcome, Products, Info, Testimonials, Popular } from "./children/";

export function Main() {
  const productBlock = useRef(null);

  const scrollToProductBlock = () => {
    productBlock.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Welcome scrollToProductBlock={scrollToProductBlock} />
      <Products refCustom={productBlock} />
      <Info />
      <Testimonials />
      <Popular />
    </>
  );
}
