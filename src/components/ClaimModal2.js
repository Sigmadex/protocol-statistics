import { useState, useEffect } from "react";
import { ConnectButton } from "./ConnectButton";
import { thousandSeparator } from "./utilities/formatting";

let testRewards = [
  {
    tokenName: "sSDEX",
    imageUrl: "/images/sigmadex-logo-square.svg",
    amount: "0",
  },
  {
    tokenName: "AVAX",
    imageUrl: "/images/avax-logo-square.svg",
    amount: "1000",
  },
];

export function ClaimModal2() {
  const [rewards, setRewards] = useState([]);
  const [isEligible, setEligibility] = useState(false);
  const [referrer, setReferrer] = useState("");
  const [displayModal, toggleModal] = useState(true);
  const [vaultData, setVaultData] = useState({
    previousAmount: 221441.56,
    currentAmount: 249014.55,
  });
  const changePct = calculateChangePercentage(
    vaultData.currentAmount,
    vaultData.previousAmount
  );

  useEffect(() => {
    setRewards(testRewards);
  }, []);

  // function calculateAPY() {}

  function calculateChangePercentage(from, to) {
    return parseInt((from / to - 1) * 100);
  }

  return (
    <div className="col-lg-4 offset-lg-4">
      <div
        className="card"
        style={{
          border: "none",
          boxShadow: "0px 4px 25px rgba(64, 76, 85, 0.15)",
          borderRadius: 20,
          marginTop: 40,
          padding: "40px 30px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: 60 }}>Claim SDEX</h1>
        </div>
        <div style={{ fontSize: 16, textAlign: "center", marginBottom: 20 }}>
          Your vault balances are displayed below:
        </div>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <img
            src="/images/lock-icon-lg.svg"
            alt="lock"
            style={{ width: 31, height: 34 }}
          />
        </div>
        <div
          style={{
            border: "1px solid rgba(64, 76, 85, 0.15)",
            borderRadius: 10,
            padding: 15,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              margin: "10px 0px -10px 0px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span style={{ marginBottom: 20 }}>
              <img
                alt=""
                src="/images/sigmadex-logo-teal-square.svg"
                style={{
                  height: 30,
                  borderRadius: "50%",
                  marginRight: 10,
                }}
              />
              Locked:
            </span>
            <span>N/A</span>
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              margin: "10px 0px -10px 0px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span style={{ marginBottom: 20 }}>
              <img
                alt=""
                src="/images/sigmadex-logo-teal-square.svg"
                style={{
                  height: 30,
                  borderRadius: "50%",
                  marginRight: 10,
                }}
              />
              Available:
            </span>
            <span>N/A</span>
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              margin: "10px 0px -10px 0px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span style={{ marginBottom: 20 }}>
              <img
                alt=""
                src="/images/lock-icon-square.svg"
                style={{
                  backgroundColor: "rgba(64, 76, 85, 0.1)",
                  height: 30,
                  borderRadius: "50%",
                  marginRight: 10,
                }}
              />
              Vault Value:
            </span>
            <span>
              ${thousandSeparator(vaultData.currentAmount)}{" "}
              <span
                style={{
                  color:
                    changePct < 0
                      ? "#E84142"
                      : changePct > 1
                      ? "#51C64F"
                      : "#404C55",
                  fontWeight: "normal",
                }}
              >
                {changePct > 0 ? "+" : ""}
                {changePct}%
              </span>
            </span>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <ConnectButton inverse />
        </div>
      </div>
    </div>
  );
}
