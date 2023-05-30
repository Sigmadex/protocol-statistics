import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { StakeModal } from "../StakeModal";
import { PositionTable } from "../PositionTable";
import { SigmadexButton } from "../SigmadexButton";
import { Link } from "react-router-dom";

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
            <Link to="/positions/earn">
              <button className="sigmadex-button" style={{ marginRight: 10 }}>
                <span>Earn APY</span>
                <img
                  alt="Earn APY"
                  src="/images/earn_icon_symbol.svg"
                  style={{ width: 20, height: 20 }}
                />
              </button>
            </Link>
            <Link to="/positions/mine">
              <button className="sigmadex-button">
                <span>
                  Mine APY
                  <img
                    alt="Earn APY"
                    src="/images/mine_icon_symbol.svg"
                    style={{ width: 20, height: 20 }}
                  />
                </span>
              </button>
            </Link>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <StakeModal />
            <PositionTable positionData={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
