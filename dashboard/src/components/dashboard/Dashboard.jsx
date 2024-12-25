import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Dashboard.css";
import WatchList from "../watchlist/WatchList";
import Holdings from "../holdings/Holdings";
import Positions from "../positions/Positions";
import Funds from "../funds/Funds";
import Apps from "../app/Apps";
import Summary from "./Summary";
import Orders from "../orders/Orders";
import { GeneralContextProvider } from "../watchlist/GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
