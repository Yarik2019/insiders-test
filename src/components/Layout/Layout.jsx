import { Suspense } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import TabsContainer from "../TabsContainer/TabsContainer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <TabsContainer />
      <main className="flex-grow overflow-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
