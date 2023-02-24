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
    <div>
      <h1>Wallet</h1>
      <span>View the current status of your wallet.</span>
      <div className="row">

      </div>
      <hr />
    </div>
  )
}