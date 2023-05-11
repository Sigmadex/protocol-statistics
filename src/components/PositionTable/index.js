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
        padding: 20,
      }}
    >
      <h1>Mine APY</h1>
      <table className="table table-borderless">
        <thead>
          <tr>
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
                  <tr key={index}>
                    <th scope="row">{token.tokenName}</th>
                    <td>{token.activeDuration} days</td>
                    <td>{token.maturity} days remaining</td>
                    <td>
                      {token.unitsStaked} {token.tokenName}
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
      <h1>Earning</h1>
      <table className="table table-borderless">
        <thead>
          <tr>
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
                  <tr key={index}>
                    <th scope="row">{token.tokenName}</th>
                    <td>{token.activeDuration} days</td>
                    <td>{token.maturity} days remaining</td>
                    <td>
                      {token.unitsStaked} {token.tokenName}
                    </td>
                    <td>
                      {token.earned} {token.tokenName}
                    </td>
                    <td>{token.nftAPY}%</td>
                  </tr>
                );
              })
            : null}
          <EarningActions />
        </tbody>
      </table>
    </div>
  );
}
