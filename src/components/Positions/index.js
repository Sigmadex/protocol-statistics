import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { StakingModal } from "../StakingModal";
import { PositionTable } from "../PositionTable";

const positionData = {
  mining: [
    {
      tokenName: "SDEX",
      activeDuration: 720,
      maturity: 82,
      unitsStaked: 45000,
      nftAPY: 112,
    },
    {
      tokenName: "SDEX",
      activeDuration: 365,
      maturity: 0, // if maturity === 0, token has matured
      unitsStaked: 10000,
      nftAPY: 42,
    },
    {
      tokenName: "SDEX LP",
      activeDuration: 365,
      maturity: 4,
      unitsStaked: 55, // spec says "55 JLP"?
      nftAPY: 200,
    },
  ],
  earning: [
    {
      tokenName: "SDEX",
      activeDuration: 720,
      maturity: 82,
      unitsStaked: 45000,
      earned: 5000,
      apy: 112,
    },
  ],
};

export function Positions() {
  const [data, setDashboardData] = useState({});

  useEffect(() => {
    setDashboardData(positionData);
  }, []); // use walletAddress as parameter

  return (
    <div className="row justify-content-center" style={{ marginBottom: 135 }}>
      <div className="col-lg-8 col-sm-12">
        <div className="row">
          <div className="col-lg-12">
            <h1 style={{ marginBottom: 30 }}>Positions</h1>
            {/* <Outlet /> */}
            <p style={{ marginBottom: 15 }}>View your active stakes.</p>
            <button className="btn-colored" style={{ marginBottom: 10 }}>
              &#8592; Earn APY
            </button>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/* <StakingModal /> */}
            <PositionTable positionData={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
