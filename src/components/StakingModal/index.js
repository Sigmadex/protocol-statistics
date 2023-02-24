import { useState, useEffect } from 'react'

export function StakingModal() {
  const [tokenAmount, setTokenAmount] = useState(0)
  const [duration, setDuration] = useState(0)
  const [apy, setAPY] = useState(0)

  function calculateAPY() {}

  return (
    <div>
      <h1>Create New Staking Position</h1>  
      <div className='row'>
        <div className='col-sm-6' style={{display: 'flex', flexDirection: 'column'}}>
          <label>Set SDEX Amount</label>
          <input type='number' />
        </div>
        <div className='col-sm-6' style={{display: 'flex', flexDirection: 'column'}}>
          <label>Set Stake Amount</label>
          <input type='number' />
        </div>
      </div>
      <div className='row' style={{display: 'flex', justifyContent: 'space-between'}}>
        <span>
          Estimated APY Value After Maturity:
        </span>
        <span style={{color: apy < 0 ? 'red' : apy > 0 ? '#51C64F' : '#404C55'}}>
          <strong>{apy}%</strong>
        </span>
      </div>

      <div className='row'>
        <button className='btn-light'>Approve</button>
        <button className='btn-dark'>Deposit</button>
        <button className='btn-light'>Attach APY NFT</button> 
      </div>
    </div>
  )
}