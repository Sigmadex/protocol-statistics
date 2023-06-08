import { thousandSeparator } from "../utilities/formatting";

function MineActions() {
  return (
    <tr style={{ backgroundColor: "#F2F6FA" }}>
      <th>Actions</th>
    </tr>
  );
}

function EarningActions() {
  return (
    <tr style={{ backgroundColor: "#F2F6FA" }}>
      <th>Actions</th>
    </tr>
  );
}

export function PositionTable({ positionData }) {
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
      <div className="table-responsive">
        <h1 style={{ fontSize: 32, marginTop: 5, marginBottom: 30 }}>
          Mine APY
        </h1>
        <table className="table table-borderless">
          <thead>
            <tr
              style={{
                fontSize: 14,
                fontWeight: "bold",
                borderBottom: "1px solid rgba(64, 76, 85, 0.25)",
              }}
            >
              <th scope="col">Token</th>
              <th scope="col">Active Duration</th>
              <th scope="col">Maturity</th>
              <th scope="col">Units Staked</th>
              <th scope="col">NFT APY</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(positionData).length
              ? positionData.mining.map((token, index) => {
                  return (
                    <tr key={index} style={{ fontSize: 14 }}>
                      <td>{token.tokenName}</td>
                      <td>{token.activeDuration} days</td>
                      <td>
                        {token.maturity === 0
                          ? "Matured"
                          : `${token.maturity} days remaining`}
                      </td>
                      <td>
                        {thousandSeparator(token.unitsStaked)} {token.tokenName}
                      </td>
                      <td>{token.nftAPY}%</td>
                    </tr>
                  );
                  // todo: onClick event to add an extra row underneath selected row that displays current actions
                })
              : null}
            <MineActions />
          </tbody>
        </table>
        <h1 style={{ fontSize: 32, marginTop: 5, marginBottom: 30 }}>
          Earning
        </h1>
        <table className="table table-borderless">
          <thead>
            <tr
              style={{
                fontSize: 14,
                fontWeight: "bold",
                borderBottom: "1px solid rgba(64, 76, 85, 0.25)",
              }}
            >
              <th scope="col">Token</th>
              <th scope="col">Active Duration</th>
              <th scope="col">Maturity</th>
              <th scope="col">Units Staked</th>
              <th scope="col">Earned</th>
              <th scope="col">NFT APY</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(positionData).length
              ? positionData.earning.map((token, index) => {
                  return (
                    <tr key={index} style={{ fontSize: 14 }}>
                      <td>{token.tokenName}</td>
                      <td>{token.activeDuration} days</td>
                      <td>{token.maturity} days remaining</td>
                      <td>
                        {thousandSeparator(token.unitsStaked)} {token.tokenName}
                      </td>
                      <td>
                        {thousandSeparator(token.earned)} {token.tokenName}
                      </td>
                      <td>{token.apy}%</td>
                    </tr>
                  );
                })
              : null}
            <EarningActions />
          </tbody>
        </table>
      </div>
    </div>
  );
}
