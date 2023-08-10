import { Routes, Route } from "react-router-dom";
import { Main, About, ProductPage, CartPage } from "src/pages";
import { Layout } from "src/components/layout/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="productpage/:id/" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;
