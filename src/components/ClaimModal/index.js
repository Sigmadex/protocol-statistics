import { useState, useEffect } from "react";
import { ConnectButton } from "../ConnectButton";
import Modal from "../Modal.js";
import { thousandSeparator } from "../utilities/formatting";

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

export function ClaimModal({ claimTokens }) {
  const [rewards, setRewards] = useState([]);
  const [isEligible, setEligibility] = useState(false);
  const [referrerAddress, setReferrerAddress] = useState(
    // "0x0000000000000000000000000000000"
    null
  );
  const [displayModal, toggleModal] = useState(true);
  const [displayEligibilityDiv, setDisplayEligibilityDiv] = useState(true);
  const eligibilityMessage =
    "You may be eligible to claim with a Referral Link.";

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
                          marginRight: 15,
                        }}
                      />
                      {reward.tokenName} Balance:
                    </span>
                    <span>
                      {Number(reward.amount)
                        .toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                        .replace("$", "")}
                    </span>
                  </div>
                );
              })
            : null}
        </div>
        {displayEligibilityDiv ? (
          <div style={{ textAlign: "center" }}>
            <p>This wallet is eligble to claim:</p>
            <p style={{ marginTop: -10, fontWeight: "bold" }}>10,000 sSDEX</p>
          </div>
        ) : null}
        <div
          style={{
            textAlign: "center",
            borderTop: "1px solid rgba(64, 76, 85, 0.15)",
            padding: "15px 0px 5px 0px",
            marginBottom: 20,
          }}
        >
          {referrerAddress ? (
            <>
              <p>Your referrer is</p>
              <p style={{ marginTop: -10 }}>{referrerAddress}.</p>
            </>
          ) : (
            <span>
              <img
                src="/images/info-icon.svg"
                alt="info-icon"
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
              />{" "}
              {eligibilityMessage}
            </span>
          )}
        </div>
        <div style={{ textAlign: "center" }}>
          <ConnectButton
            buttonText={
              displayEligibilityDiv ? "Claim Tokens" : "Connect Wallet"
            }
            inverse
            func={claimTokens}
          />
        </div>
        {/* <Modal displayModal={true} toggleModal={toggleModal} /> */}
      </div>
    </div>
  );
}
