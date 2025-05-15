import { Suspense } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import ProductDescription from "../ProductDescription/ProductDescription";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow overflow-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <ProductDescription />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
