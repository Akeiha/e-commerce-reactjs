import { Outlet } from "react-router-dom";

import { Header } from "./children/header/header";
import { Footer } from "./children/footer/footer";
import { ScrollToTop } from "../scrolltotop";

export function Layout() {
  return (
    <>
      <ScrollToTop />

      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
