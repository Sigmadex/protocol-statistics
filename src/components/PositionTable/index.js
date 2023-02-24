function MineActions() {
  return (
    <span style={{backgroundColor: '#F2F6FA'}}>Actions</span>
  )
}

function EarningActions() {
  return (
    <span style={{backgroundColor: '#F2F6FA'}}>Actions</span>
  )
}

export function PositionTable({positionData}) {

{/* <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item[1]}</h5>
                    <p className="card-text">{item[0]}</p>
                  </div>
                </div> */}

  return (
    <div className="card" style={{border: 'none', boxShadow: '0px 4px 25px rgba(64, 76, 85, 0.15)', borderRadius: 20, padding: 20}}>
      <h1>Mine APY</h1>
      <table class="table table-borderless">
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
          {positionData.mining.map((token, index) => {
            return  (
              <tr>
                <th scope="row">{token.tokenName}</th> 
                <td>{token.activeDuration} days</td>
                <td>{token.maturity} days remaining</td>
                <td>{token.unitsStaked} {token.tokenName}</td>
                <td>{token.nftAPY}%</td>
              </tr>
            )
            // todo: onClick event to add an extra row underneath selected row that displays current actions
          })}
        </tbody>
        <MineActions />
      </table>
      <h1>Earning</h1>
      <table class="table table-borderless">
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
          {positionData.earning.map((token, index) => {
            return  (
              <tr>
                <th scope="row">{token.tokenName}</th> 
                <td>{token.activeDuration} days</td>
                <td>{token.maturity} days remaining</td>
                <td>{token.unitsStaked} {token.tokenName}</td>
                <td>{token.earned} {token.tokenName}</td>
                <td>{token.nftAPY}%</td>
              </tr>
            )
          })}
        </tbody>
        <EarningActions />
      </table>      
    </div>
  )
}