import { useState } from "react";

const modalStyles = {
  position: "fixed",
  padding: 0,
  margin: 0,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(64, 76, 85, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1,
};

const modalContentStyles = {
  backgroundColor: "#ffffff",
  borderRadius: 10,
  boxShadow: "0px 4px 25px rgba(64, 76, 85, 0.15)",
  width: 520,
  height: 356,
  padding: "30px 22px 20px 22px",
  textAlign: "center",
};

function Modal({
  displayModal,
  handleToggleModal,
  txConfirmed,
  tokensClaimed,
}) {
  return (
    <div
      style={{
        ...modalStyles,
        visibility: displayModal ? "visible" : "hidden",
      }}
      onClick={
        tokensClaimed !== null
          ? handleToggleModal
          : () =>
              console.log("cannot click outside of modal until TX is resolved")
      }
    >
      <div style={modalContentStyles}>
        {!txConfirmed ? (
          <>
            <h4 style={{ fontSize: 34, fontWeight: "bold" }}>
              Confirming transaction...
            </h4>
            <p style={{ fontWeight: "bold", fontSize: 16 }}>Please wait</p>
          </>
        ) : tokensClaimed === null ? (
          <>
            <h4 style={{ fontSize: 34, fontWeight: "bold" }}>
              Transaction Confirmed
            </h4>
            <p style={{ fontWeight: "bold", fontSize: 14 }}>
              Please wait for the claimbot to process your claim.
            </p>
            <img
              src="/images/gift.png"
              alt="gift"
              style={{ width: 197, height: 197 }}
            />
          </>
        ) : tokensClaimed ? (
          <>
            <img
              src="/images/warning-icon.svg"
              style={{ width: 36, height: 36 }}
            />
            <h4 style={{ fontSize: 34, fontWeight: "bold" }}>Oops!</h4>
            <p style={{ fontWeight: "bold", fontSize: 14 }}>
              Something went wrong. This wallet has already claimed sSDEX.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="sigmadex-button" onClick={handleToggleModal}>
                Close
              </button>
            </div>
          </>
        ) : (
          <>
            <img
              src="/images/checkmark.svg"
              style={{ width: 36, height: 27 }}
            />
            <h4 style={{ fontSize: 34, fontWeight: "bold" }}>Success!</h4>
            <p style={{ fontWeight: "bold", fontSize: 14 }}>
              10,000 sSDEX has been added to your wallet.
            </p>
            <div
              style={{
                border: "1px solid rgba(64, 76, 85, 0.15)",
                borderRadius: 10,
                padding: "20px 0px 0px 0px",
                marginBottom: 20,
              }}
            >
              <p style={{ fontSize: 14 }}>
                Make sure to follow the Sigmadex socials below:
              </p>
              <p>
                <img
                  src="/images/icon-twitter_1 1.svg"
                  style={{ width: 23, height: 18 }}
                />
                <img
                  src="/images/Telegram-icon.svg"
                  style={{ width: 22, height: 18 }}
                />
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="sigmadex-button" onClick={handleToggleModal}>
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
