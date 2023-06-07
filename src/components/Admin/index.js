import { UserTable } from "../UserTable";
import { SigmadexButton } from "../SigmadexButton";

const Input = ({
  type = "text",
  width = 100,
  height = 54,
  placeholder = "",
}) => {
  return (
    <input
      type={type}
      style={{
        width,
        height,
        borderRadius: 10,
        border: "1px solid rgba(0, 0, 0, 0.23)",
        color: "rgba(64, 76, 85, 0.6)",
        fontSize: 14,
        marginRight: 20,
        padding: "0px 10px 0px 10px",
      }}
      placeholder={placeholder}
    />
  );
};

const adminButtonStyles = {
  // width: 82,
  height: 54,
  border: "1px solid rgba(64, 76, 85, 0.5)",
  backgroundColor: "#ffffff",
  color: "404C55",
  fontSize: 14,
  borderRadius: 10,
  padding: "0px 15px 0px 15px",
};

const AdminButton = ({ buttonText = "button", margin = "0px 0px 0px 0px" }) => {
  return <button style={{ ...adminButtonStyles, margin }}>{buttonText}</button>;
};

export function Admin() {
  function search() {
    alert("Searching");
  }

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8 col-sm-12" style={{ marginBottom: 135 }}>
        <div className="row">
          <h1 style={{ fontSize: 60, marginBottom: 30 }}>Admin</h1>
          <p>View a global overview of the protocol statistics.</p>
        </div>
        <div className="row" style={{ textAlign: "right" }}>
          <div className="col-12">
            <UserTable />
          </div>
        </div>
      </div>
    </div>
  );
}
