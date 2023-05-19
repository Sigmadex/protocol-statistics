import { useState, useEffect } from "react";
import millify from "millify";

const dashboardData = {
  totalSDEXStaked: 62500,
  totalCirculatingNFTs: 44,
  totalAPYNFTsMinted: 10400,
  nftAPYMinters: 101,
  totalAPYNFTsBeingFarmed: 109,
  SDEXBurnedFromPenalties: 45900,
  maximumInflation: 594,
  lpTokensForfeited: 5500000,
};

const fieldTextDictionary = {
  totalSDEXStaked: "Total SDEX Staked",
  totalCirculatingNFTs: "Total Circulating NFTs",
  totalAPYNFTsMinted: "Total APY NFTs Minted",
  nftAPYMinters: "NFT APY Minters",
  totalAPYNFTsBeingFarmed: "Total APY NFTs Being Farmed",
  SDEXBurnedFromPenalties: "SDEX Burned From Penalties",
  maximumInflation: "Maximum Inflation",
  lpTokensForfeited: "LP Tokens Forfeited",
};

const fieldIconDictionary = {
  totalSDEXStaked: "sigmadex-logo-square",
  totalCirculatingNFTs: "icon-circulating 1",
  totalAPYNFTsMinted: "hSDEX 1",
  nftAPYMinters: "icon-circulating 1 (1)",
  totalAPYNFTsBeingFarmed: "icon-circulating 1 (2)",
  SDEXBurnedFromPenalties: "icon-circulating 1 (3)",
  maximumInflation: "hSDEX 1 (1)",
  lpTokensForfeited: "icon-circulating 1 (4)",
};

export function Dashboard({ match }) {
  const [data, setDashboardData] = useState({});

  useEffect(() => {
    setDashboardData(dashboardData);
  }, []); // use walletAddress as parameter

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8 col-sm-12" style={{ marginBottom: 135 }}>
        <h1 style={{ marginBottom: 30 }}>Dashboard</h1>
        <p style={{ marginBottom: 40 }}>
          View a global overview of the protocol statistics.
        </p>
        <hr style={{ marginBottom: 40 }} />
        <div className="row">
          {Object.entries(dashboardData).map((item, i) => {
            return (
              <div className="col-sm-6 col-lg-3" key={i}>
                <div
                  className="card"
                  style={{
                    border: "none",
                    boxShadow: "0px 4px 25px rgba(64, 76, 85, 0.15)",
                    borderRadius: 20,
                    marginTop: 10,
                    marginBottom: 10,
                    padding: 10,
                    height: 165,
                  }}
                >
                  <div
                    className="card-body"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 32,
                        fontWeight: "bold",
                        marginTop: -5,
                      }}
                    >
                      {millify(item[1])}
                    </div>
                    <div style={{ fontSize: 14 }}>
                      <img
                        alt="AVAX"
                        src={`/images/${fieldIconDictionary[item[0]]}.svg`}
                        style={{
                          height: 20,
                          borderRadius: "50%",
                          marginRight: 5,
                        }}
                      />{" "}
                      {fieldTextDictionary[item[0]]}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
