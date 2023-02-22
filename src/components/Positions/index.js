import { useState, useEffect } from 'react'

const positionData = {
  mining: [
    {
      tokenName: 'SDEX',
      activeDuration: 720,
      maturity: 82,
      unitsStaked: 45000,
      nftAPY: 112
    },
    {
      tokenName: 'SDEX',
      activeDuration: 365,
      maturity: 0, // if maturity === 0, token has matured
      unitsStaked: 10000,
      nftAPY: 42
    },
    {
      tokenName: 'SDEX LP',
      activeDuration: 365,
      maturity: 4,
      unitsStaked: 55, // spec says "55 JLP"?
      nftAPY: 200
    }    
  ],
  earning: [
    {
      tokenName: 'SDEX',
      activeDuration: 720,
      maturity: 82,
      unitsStaked: 45000,
      earned: 5000,
      apy: 112
    }
  ]
}

const StakingModal = () => {
  return (
    <div>
      <h1>Create New Staking Position</h1>
    </div>
  )
}

export function Positions() {
  const [data, setDashboardData] = useState({})

  useEffect(() => {
    setDashboardData(positionData)
  }, []) // use walletAddress as parameter

  return (
    <div>
      <p>View your active stakes.</p>
      {Object.entries(data).length &&
        data['earning'][0]['apy']}
      <StakingModal />
    </div>
  )
}