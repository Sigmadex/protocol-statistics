import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../Navbar";
import { Dashboard } from "../Dashboard";
import { Footer } from "../Footer";
import { Positions } from "../Positions";
import { Earn } from "../Earn";
import { Mine } from "../Mine";
import { Governance } from "../Governance";
import { Test } from "../Test";
import { Breadcrumbs } from "../Breadcrumbs";
import { Admin } from "../Admin";
import { Wallet } from "../Wallet";
import "./App.css";
import { Swap } from "../Swap";
import { NFT } from "../NFT";

export function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid">
        <Breadcrumbs />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="admin" element={<Admin />} />
          <Route path="positions" element={<Positions />}>
            <Route path="earn" element={<Earn />} />
            <Route path="mine" element={<Mine />} />
          </Route>
          <Route path="governance" element={<Governance />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="nft/:nftAddress" element={<NFT />} />
          <Route path="test" element={<Test />} />
          <Route path="swap" element={<Swap />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
