import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

const DashboardPage = lazy(() => import("./pages/DashboardPage/DashboardPage"));
const BankingPage = lazy(() => import("./pages/BankingPage/BankingPage"));
const TelefoniePage = lazy(() => import("./pages/TelefoniePage/TelefoniePage"));
const AccountingPage = lazy(() =>
  import("./pages/AccountingPage/AccountingPage")
);
const VerkaufPage = lazy(() => import("./pages/VerkaufPage/VerkaufPage"));
const StatistikPage = lazy(() => import("./pages/StatistikPage/StatistikPage"));
const PostOfficePage = lazy(() =>
  import("./pages/PostOfficePage/PostOfficePage")
);
const AdministrationPage = lazy(() =>
  import("./pages/AdministrationPage/AdministrationPage")
);
const HelpPage = lazy(() => import("./pages/HelpPage/HelpPage"));

const DummyPage = ({ title }) => (
  <div className="p-4 text-xl font-bold">{title}</div>
);

function App() {
  return (
    <>
      <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashboardPage />} />
            <Route path="banking" element={<BankingPage />} />
            <Route path="telefonie" element={<TelefoniePage />} />
            <Route path="accounting" element={<AccountingPage />} />
            <Route path="verkauf" element={<VerkaufPage />} />
            <Route path="statistik" element={<StatistikPage />} />
            <Route path="post-office" element={<PostOfficePage />} />
            <Route path="admin" element={<AdministrationPage />} />
            <Route path="help" element={<HelpPage />} />
          </Route>
          <Route path="*" element={<DummyPage title="Page Not Found" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
