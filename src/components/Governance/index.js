import { useState } from "react";
import { ClaimModal } from "../ClaimModal";
import { ClaimModal2 } from "../ClaimModal2";
import Modal from "../Modal.js";

const ClaimBackground = () => {
  return (
    <img
      src="/images/vault2.png"
      alt="vault-background"
      style={{
        width: 958,
        height: 864,
        objectFit: "cover",
        position: "absolute",
        right: 0,
        bottom: -225,
        zIndex: -9999,
      }}
    />
  );
};

export function Governance() {
  const [confirmingTx, setConfirmingTx] = useState(false);
  const [txConfirmed, setTxConfirmed] = useState(false);
  const [tokensClaimed, setTokensClaimed] = useState(null);
  const [displayModal, toggleModal] = useState(true);

  function handleToggleModal() {
    toggleModal(!displayModal);
  }

  function claimTokens() {
    setConfirmingTx(true);
    setTimeout(() => {
      setTxConfirmed(true);
      setTimeout(() => {
        checkIfTokensClaimed();
      }, 2000);
    }, 2000);
  }

  function checkIfTokensClaimed() {
    setTokensClaimed(true);
  }

  return (
    <div className="row" style={{ marginBottom: 135 }}>
      <ClaimModal claimTokens={claimTokens} />
      {/* <ClaimModal2 /> */}
      {/* <ClaimBackground /> */}
      {confirmingTx && (
        <Modal
          displayModal={displayModal}
          handleToggleModal={handleToggleModal}
          txConfirmed={txConfirmed}
          tokensClaimed={tokensClaimed}
        />
      )}
      {/* <button onClick={handleToggleModal}>Toggle modal</button> */}
    </div>
  );
}
