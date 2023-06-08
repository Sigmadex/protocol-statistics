import { useState } from "react";
import { SigmadexInput } from "../SigmadexInput";
import { sigmadexInputStyles } from "../utilities/formatting";
import { ConnectButton } from "../ConnectButton";

export const SwapModal = () => {
  const [sDexToSwap, setSDex] = useState(1);
  const [gasFee, setGasFee] = useState(2.54);
  const [rewards, setRewards] = useState(100);

  function calculateSDEXtoETH(sDex) {
    return sDex * 0.0001;
  }

  return (
    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
      <div
        className="card"
        style={{
          border: "none",
          boxShadow: "0px 4px 25px rgba(64, 76, 85, 0.15)",
          borderRadius: 10,
          marginTop: 40,
          padding: "30px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: 60 }}>Swap</h1>
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>
            <img
              alt=""
              src="/images/sigmadex-logo-square.svg"
              style={{
                height: 35,
                borderRadius: "50%",
                marginRight: 15,
                marginBottom: 20,
              }}
            />
            sSDEX Balance:
          </span>
          <span>N/A</span>
        </div>
        <div
          style={{
            border: "1px solid rgba(64, 76, 85, 0.15)",
            borderRadius: 10,
            padding: 20,
            marginBottom: 20,
          }}
        >
          <div className="row g-0">
            <span
              style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
            >
              Set Input Amount
            </span>
            <div className="col-6 g-0" style={{ paddingRight: 5 }}>
              <select style={sigmadexInputStyles}>
                <option>Select token</option>
              </select>
            </div>
            <div className="col-6 g-0" style={{ paddingLeft: 5 }}>
              <SigmadexInput type="number" placeholder="Amount" />
            </div>
          </div>
        </div>
        <div
          style={{
            border: "1px solid rgba(64, 76, 85, 0.15)",
            borderRadius: 10,
            padding: 20,
            marginBottom: 20,
          }}
        >
          <div className="row g-0">
            <span
              style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
            >
              Estimated Output
            </span>
            <div className="col-6 g-0" style={{ paddingRight: 5 }}>
              <select style={sigmadexInputStyles}>
                <option>Select token</option>
              </select>
            </div>
            <div className="col-6 g-0" style={{ paddingLeft: 5 }}>
              <SigmadexInput type="number" placeholder="Amount" />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#F7FAFC",
            border: "1px solid rgba(64, 76, 85, 0.15)",
            borderRadius: 10,
            padding: 20,
            marginBottom: 20,
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <span>
              {sDexToSwap} SDEX = {calculateSDEXtoETH(sDexToSwap)} ETH
            </span>
            <span>Gas Fee ~${gasFee}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>sSDEX Rewards:</span>
            <span>{rewards} sSDEX</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <ConnectButton buttonText="Connect To Swap" />
        </div>
      </div>
    </div>
  );
};
