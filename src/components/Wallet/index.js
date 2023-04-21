const walletTokens = [
  {
    tokenName: 'SDEX',
    amount: 1000,
    amountInCAD: 62512.02
  },
  {
    tokenName: 'USDT',
    amount: 1000,
    amountInCAD: 10000.00
  },
  {
    tokenName: 'USDC',
    amount: 1000,
    amountInCAD: 10000.00
  },
  {
    tokenName: 'SDEX-SLP',
    amount: 1000,
    amountInCAD: 10000.00
  }
]

export function Wallet() {
  return (
    <div className="row justify-content-center">
      {/* <div className="col-lg-10 col-sm-12" style={{height: '100vh'}}> */}
      <div className="col-lg-9 col-sm-12" style={{ height: "100vh" }}>
        <h1>Wallet</h1>
        <span>View the current status of your wallet.</span>
        <hr />
        <div className="row">
          {walletTokens.map((token) => {
            return (
              <div className="col-sm-3">
                <div
                  className="card"
                  style={{
                    border: "none",
                    boxShadow: "0px 4px 25px rgba(64, 76, 85, 0.15)",
                    borderRadius: 20,
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <div className="card-body">
                    {/* <h5 className="card-title">{item[1]}</h5> */}
                    <div
                      style={{ fontSize: 32, fontWeight: "bold" }}
                      className="card-title"
                    >
{(token.amountInCAD).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})}
                    </div>
                    <div style={{ fontSize: 14 }} className="card-text">
                      {`${token.amountInCAD} ${token.tokenName}`}
                    </div>
                    <div style={{fontWeight: 'bold'}}>
                      <img
                        alt="AVAX"
                        src="/images/sigmadex-logo-square.svg"
                        style={{ height: 28, borderRadius: "50%" }}
                      />
                      {token.tokenName}
                    </div>
                  </div>                
                </div>
              </div>
            )
          })}
        </div>
        <hr />
        <div className="row">
          <h2>APY NFTs</h2>
          <span>View and manage the APY NFTs you own.</span>
        </div>
      </div>
    </div>
  )
}