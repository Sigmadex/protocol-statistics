import { useState, useEffect, useDebugValue } from "react";
import { ConnectButton } from "../ConnectButton";
import Modal from "../Modal.js";

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

export function ClaimModal() {
  const [rewards, setRewards] = useState([]);
  const [isEligible, setEligibility] = useState(false);
  const [referrer, setReferrer] = useState("");
  const [displayModal, toggleModal] = useState(true);

  useEffect(() => {
    setRewards(testRewards);
  }, []);

  // function calculateAPY() {}

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
          <h1 style={{ fontSize: 60 }}>Claim sSDEX</h1>
        </div>
        <div style={{ fontSize: 16, textAlign: "center", marginBottom: 20 }}>
          As part of our brand awareness initiative, both loyal and newcomers to
          the AVAX community are eligible to claim free sSDEX tokens relative to
          their AVAX balance.
        </div>
        <div
          style={{
            border: "1px solid rgba(64, 76, 85, 0.15)",
            borderRadius: 10,
            padding: 15,
            marginBottom: 20,
          }}
        >
          {rewards.length
            ? rewards.map((reward, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      fontSize: 14,
                      fontWeight: 600,
                      justifyContent: "space-between",
                      margin: "10px 0px -10px 0px",
                    }}
                  >
                    <span style={{ marginBottom: 20 }}>
                      <img
                        alt={reward.tokenName}
                        src={reward.imageUrl}
                        style={{
                          height: 30,
                          borderRadius: "50%",
                          marginRight: 5,
                        }}
                      />
                      {reward.tokenName} Balance:
                    </span>
                    <span>{reward.amount}</span>
                  </div>
                );
              })
            : null}
        </div>
        <div style={{ textAlign: "center" }}>
          <ConnectButton inverse />
        </div>

        {/* <Modal displayModal={true} toggleModal={toggleModal} /> */}
      </div>
    </div>
  );
}
