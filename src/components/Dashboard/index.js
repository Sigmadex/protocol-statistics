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
    <div>
      <h1>Dashboard</h1>
      <p>View a global overview of the protocol statistics.</p>
      <hr />
      {Object.entries(data).length &&
        data['totalSDEXStaked']}
    </div>
  )
}