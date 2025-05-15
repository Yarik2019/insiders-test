import { Routes, Route } from "react-router-dom";

import TabsContainer from "./components/TabsContainer/TabsContainer";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import BankingPage from "./pages/BankingPage/BankingPage";
import TelefoniePage from "./pages/TelefoniePage/TelefoniePage";
import AccountingPage from "./pages/AccountingPage/AccountingPage";
import VerkaufPage from "./pages/VerkaufPage/VerkaufPage";
import StatistikPage from "./pages/StatistikPage/StatistikPage";
import PostOfficePage from "./pages/PostOfficePage/PostOfficePage";
import AdministrationPage from "./pages/AdministrationPage/AdministrationPage";
import HelpPage from "./pages/HelpPage/HelpPage";

const DummyPage = ({ title }) => (
  <div className="p-4 text-xl font-bold">{title}</div>
);
function App() {
  return (
    <>
      <TabsContainer />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/banking" element={<BankingPage />} />
        <Route path="/telefonie" element={<TelefoniePage />} />

        <Route path="/accounting" element={<AccountingPage />} />
        <Route path="/verkauf" element={<VerkaufPage />} />

        <Route path="/statistik" element={<StatistikPage />} />
        <Route path="/post-office" element={<PostOfficePage />} />
        <Route path="/admin" element={<AdministrationPage />} />
        <Route path="/help" element={<HelpPage />} />

        <Route path="*" element={<DummyPage title="Page Content" />} />
      </Routes>
    </>
  );
}

export default App;
