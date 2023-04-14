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
    <div className="row justify-content-center">
      {/* <div className="col-lg-10 col-sm-12" style={{height: '100vh'}}> */}
      <div className="col-lg-9 col-sm-12" style={{height: '100vh'}}>
        <h1>Dashboard</h1>
        <span>View a global overview of the protocol statistics.</span>
        <hr />
        <div className='row'>
          {Object.entries(dashboardData).map(item => {
            return (
              <div className="col-sm-3">
                <div className="card" style={{border: 'none', boxShadow: '0px 4px 25px rgba(64, 76, 85, 0.15)', borderRadius: 20, marginTop: 10, marginBottom: 10}}>
                  <div className="card-body">
                    {/* <h5 className="card-title">{item[1]}</h5> */}
                    <div style={{fontSize: 32, fontWeight: 'bold'}} className="card-title">{item[1]}</div>
                    <span style={{fontSize: 14}} className="card-text">
                      <img
                        alt='AVAX'
                        src='/images/avax-logo-inverse.svg'
                        style={{height: 30}}
                      />
                      {item[0]}
                    </span>
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