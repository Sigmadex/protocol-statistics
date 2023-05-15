import { useState, useEffect, useDebugValue } from "react";
import { ConnectButton } from "../ConnectButton";
import Modal from "../Modal.js";

let testRewards = [
  {
    tokenName: "sSDEX",
    imageUrl: "/images/logo-E-dark.svg",
    amount: "N/A",
  },
  {
    tokenName: "AVAX",
    imageUrl: "/images/avax-logo-inverse.svg",
    amount: "N/A",
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
    <div className="col-lg-7">
      <div
        className="card"
        style={{
          border: "none",
          boxShadow: "0px 4px 25px rgba(64, 76, 85, 0.15)",
          borderRadius: 20,
          marginTop: 40,
          padding: "30px 20px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>Claim sSDEX</h1>
        </div>
        <div style={{ textAlign: "center" }}>
          As part of our brand awareness initiative, both loyal and newcomers to
          the AVAX community are eligible to claim free sSDEX tokens relative to
          their AVAX balance.
        </div>
        <div>
          {rewards.length
            ? rewards.map((reward, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      fontWeight: 600,
                      justifyContent: "space-between",
                    }}
                  >
                    <span>
                      <img
                        alt={reward.tokenName}
                        src={reward.imageUrl}
                        style={{ height: 30 }}
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
          <ConnectButton />
        </div>

        {/* <Modal displayModal={true} toggleModal={toggleModal} /> */}
      </div>
    </div>
  );
}
