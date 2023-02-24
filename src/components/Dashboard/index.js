import { useState, useEffect } from 'react'

const dashboardData = {
  totalSDEXStaked: 62500,
  totalCirculatingNFTs: 44,
  totalAPYNFTsMinted: 10400,
  nftAPYMinters: 101,
  totalAPYNFTsBeingFarmed: 109,
  SDEXBurnedFromPenalties: 45900,
  maximumInflation: 594,
  lpTokensForfeited: 5500000
}

export function Dashboard() {
  const [data, setDashboardData] = useState({})

  useEffect(() => {
    setDashboardData(dashboardData)
  }, []) // use walletAddress as parameter

  return (
    <div className="row justify-content-center" style={{height: 90}}>
      <div className="col-lg-9 col-sm-12">
        <h1>Dashboard</h1>
        <span>View a global overview of the protocol statistics.</span>
        <hr />
        <div className='row'>
          {Object.entries(dashboardData).map(item => {
            return (
              <div className="col-sm-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item[1]}</h5>
                    <p className="card-text">{item[0]}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}