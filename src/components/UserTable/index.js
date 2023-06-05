import { useState, useEffect } from "react";

let testUserData = [
  {
    txId: "2",
    timestamp: "1658158884",
    user: "0x0582f...8417",
    avaAmt: 0,
    claimAmt: 50,
    refAddress: "0x06f6...f12d",
    refAmt: "10", // must be string; can have N/A as value
  },
  {
    txId: "1",
    timestamp: "1658158030",
    user: "0x06f6...f12d",
    avaAmt: 2,
    claimAmt: 1000,
    refAddress: "0x4d8e...86d8",
    refAmt: "N/A",
  },
  {
    txId: "3",
    timestamp: "1658160271",
    user: "0x4d8e...86d8",
    avaAmt: 0,
    claimAmt: 50,
    refAddress: "0xc49d...5d7c",
    refAmt: "10",
  },
  {
    txId: "4",
    timestamp: "1658161460",
    user: "0xc49d...5d7c",
    avaAmt: 0,
    claimAmt: 50,
    refAddress: "0x0582f...8417",
    refAmt: "10",
  },
];

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

export function UserTable(users) {
  const [userData, setUserData] = useState([]);
  const [highlightedRow, setHighlightedRow] = useState(1);

  useEffect(() => {
    setUserData(testUserData);
  }, []);

  function highlightRow(rowId) {
    console.log("highlightRow", rowId);
    if (!highlightedRow) setHighlightedRow(rowId);
    if (highlightRow === rowId) setHighlightedRow(null);
    setHighlightedRow(rowId);
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
      <div style={{ display: "inline", marginBottom: 20 }}>
        {/* Options  */}
        <select
          style={{
            width: 200,
            height: 54,
            borderRadius: 10,
            border: "1px solid rgba(0, 0, 0, 0.23)",
            color: "#404C55",
            fontSize: 14,
            padding: "0px 10px 0px 10px",
            marginRight: 20,
          }}
        >
          <option>Less Than</option>
        </select>
        <Input placeholder="1" />
        <select
          style={{
            width: 170,
            height: 54,
            borderRadius: 10,
            border: "1px solid rgba(0, 0, 0, 0.23)",
            color: "#404C55",
            fontSize: 14,
            padding: "0px 10px 0px 10px",
            marginRight: 20,
          }}
        >
          <option>AVAX Amount</option>
        </select>
        <AdminButton buttonText="Search" />
        <AdminButton buttonText="Export CSV" margin={"0px 0px 0px 20px"} />
      </div>

      <div className="table-responsive">
        <table
          className="table"
          style={{ color: "#404C55", textAlign: "left" }}
        >
          <thead>
            <tr style={{ fontSize: 14, fontWeight: "medium" }}>
              <td>TxID</td>
              <td>Timestamp</td>
              <td>User</td>
              <td>AVAX Amt</td>
              <td>Claim Amt</td>
              <td>Ref Address</td>
              <td>Ref Amt</td>
            </tr>
          </thead>
          <tbody style={{ fontSize: 14, fontWeight: "lighter" }}>
            {userData.length
              ? userData.map((user) => {
                  return (
                    <tr
                      onClick={() => highlightRow(user.txId)}
                      style={{
                        backgroundColor:
                          highlightedRow === user.txId ? "#f7fafc" : "#ffffff",
                      }}
                    >
                      <td>{user.txId}</td>
                      <td>{user.timestamp}</td>
                      <td>{user.user}</td>
                      <td>{user.avaAmt}</td>
                      <td>{user.claimAmt}</td>
                      <td>{user.refAddress}</td>
                      <td>{user.refAmt}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
      <div className="row">
        Rows per page
        <select>
          <option>10</option>
        </select>
        1-5 of 13 ◀️ ▶️
      </div>
    </div>
  );
}
