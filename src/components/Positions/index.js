import { useState, useEffect } from 'react'
import { StakingModal } from '../StakingModal'
import { PositionTable } from '../PositionTable'

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

export function Positions() {
  const [data, setDashboardData] = useState({})

  useEffect(() => {
    setDashboardData(positionData)
  }, []) // use walletAddress as parameter

  return (
    <div className="row justify-content-center" style={{height: 90}}>
      <div className="col-lg-9 col-sm-12">
        <h1>Positions</h1>
        <span>View your active stakes.</span>
        <div className='row'>
          <button>Earn APY</button>
        </div>
        <hr />
        <StakingModal />
        <PositionTable />
      </div>
    </div>
  )
}