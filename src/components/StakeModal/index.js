import { useState } from "react";
import { CircularImage } from "../CircularImage";
import { SigmadexButton } from "../SigmadexButton";
import { SigmadexInput } from "../SigmadexInput";
import { thousandSeparator } from "../utilities/Auth/formatting";

export function StakeModal() {
  const [token, setToken] = useState({
    name: "SDEX",
    price: 0,
    amount: 0,
    duration: 0,
    apy: 312,
  });

  function calculateROI(token) {
    return 12888;
  }

  function approve() {
    console.log("Approve button pressed");
  }

  function deposit() {
    console.log("Deposit button pressed");
  }

  function handleAmount(e) {
    setToken({
      ...token,
      amount: e.target.value,
    });
  }

  function handleDuration(e) {
    setToken({
      ...token,
      duration: e.target.value,
    });
  }

  return (
    <div
      className="card"
      style={{
        border: "none",
        boxShadow: "0px 4px 25px rgba(64, 76, 85, 0.15)",
        borderRadius: 10,
        padding: 35,
        marginTop: 30,
      }}
    >
      <h1 style={{ fontSize: 60, marginBottom: 25, textAlign: "center" }}>
        Stake
      </h1>
      <div className="row" style={{ marginBottom: 25, fontWeight: "bold" }}>
        <div className="col-lg-12 d-flex justify-content-between">
          <span>
            <CircularImage
              url="/images/sigmadex-logo-square.svg"
              width={35}
              height={35}
              style={{ marginRight: 15 }}
            />
            SDEX Balance:
          </span>
          <span>N/A</span>
        </div>
      </div>
      <div className="row" style={{ marginBottom: 20 }}>
        <div className="col-6">
          <strong>Set Amount</strong>
          <SigmadexInput
            type="number"
            placeholder="SDEX"
            onChange={handleAmount}
          />
        </div>
        <div className="col-6">
          <strong>Set Stake Duration</strong>
          <SigmadexInput
            type="number"
            placeholder="Days"
            onChange={handleDuration}
          />
        </div>
      </div>
      <div
        style={{
          border: "1px solid rgba(64, 76, 85, 0.15)",
          borderRadius: 10,
          fontWeight: "bold",
          padding: "25px 20px",
          marginBottom: 20,
        }}
      >
        <div className="row" style={{ marginBottom: 25 }}>
          <div className="d-flex justify-content-between">
            <span>APY</span>
            <span
              style={{
                color:
                  token.apy > 0
                    ? "#51C64F"
                    : parseInt(token.apy) === 0
                    ? "#404C55"
                    : "#E84142",
              }}
            >
              {token.apy}%
            </span>
          </div>
        </div>
        <div className="row" style={{ marginTop: 25 }}>
          <div className="d-flex justify-content-between">
            <span>Estimated ROI After Maturity</span>
            <span
              style={{
                color:
                  calculateROI(token) > 0
                    ? "#51C64F"
                    : parseInt(calculateROI(token)) === 0
                    ? "#404C55"
                    : "#E84142",
              }}
            >
              {thousandSeparator(calculateROI(token))} {token.name}
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <span style={{ marginRight: 10 }}>
            <SigmadexButton buttonText="Attach APY NFT" width={139} inverse />
          </span>
          <span style={{ marginRight: 10 }}>
            <SigmadexButton
              buttonText="Approve"
              func={() => approve()}
              width={91}
              inverse
            />
          </span>
          <SigmadexButton
            buttonText="Deposit"
            func={() => deposit()}
            width={87}
          />
        </div>
      </div>
    </div>
  );
}
