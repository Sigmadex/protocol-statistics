import { ClaimModal } from "../ClaimModal";
import { ClaimModal2 } from "../ClaimModal2";

export function Governance() {
  return (
    <div className="row" style={{ marginBottom: 135 }}>
      <ClaimModal2 />
      {/* <ClaimModal /> */}
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
    </div>
  );
}
