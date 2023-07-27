import {
  Header,
  Footer,
  Welcome,
  Products,
  Info,
  Testimonials,
  Popular,
} from "./children/";

export function Main() {
  return (
    <>
      <Header />
      <Welcome />
      <Products />
      <Info />
      <Testimonials />
      <Popular />
      <Footer />
    </>
  );
}
