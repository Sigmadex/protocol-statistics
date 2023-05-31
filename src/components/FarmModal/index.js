import { useState } from "react";
import { CircularImage } from "../CircularImage";
import { SigmadexButton } from "../SigmadexButton";

export function FarmModal() {
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

  return (
    <div
      className="card"
      style={{
        border: "none",
        boxShadow: "0px 4px 25px rgba(64, 76, 85, 0.15)",
        borderRadius: 20,
        padding: 25,
        marginTop: 30,
      }}
    >
      <h1 style={{ fontSize: 60 }}>Farm APY NFT</h1>
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-between">
          <span>
            <CircularImage
              url="/images/sigmadex-logo-square.svg"
              width={35}
              height={35}
            />
            SDEX Balance:
          </span>
          <span>N/A</span>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          Set Amount
          <input type="number" className="form-control" placeholder="SDEX" />
        </div>
        <div className="col-6">
          Set Stake Duration
          <input type="number" className="form-control" placeholder="Days" />
        </div>
      </div>

      <div style={{ border: "1px solid #404C55", fontWeight: "bold" }}>
        <div className="row">
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
        <div className="row">
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
              {calculateROI(token)} {token.name}
            </span>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-end">
        <SigmadexButton
          buttonText="Approve"
          func={() => approve()}
          width={91}
          inverse
        />
        <SigmadexButton
          buttonText="Deposit"
          func={() => deposit()}
          width={87}
        />
      </div>
    </div>
  );
}
