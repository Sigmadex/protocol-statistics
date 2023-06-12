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
  const [displayModal, toggleModal] = useState(true);

  function handleToggleModal() {
    toggleModal(!displayModal);
  }

  return (
    <div className="row" style={{ marginBottom: 135 }}>
      <ClaimModal />
      {/* <ClaimModal2 /> */}
      {/* <ClaimBackground /> */}
      <Modal
        displayModal={displayModal}
        handleToggleModal={handleToggleModal}
      />
      {/* <button onClick={handleToggleModal}>Toggle modal</button> */}
    </div>
  );
}
