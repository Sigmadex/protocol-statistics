import { useState, useEffect } from 'react'

export function StakingModal() {
  const [tokenAmount, setTokenAmount] = useState(0)
  const [duration, setDuration] = useState(0)
  const [apy, setAPY] = useState(50)

  function calculateAPY() {}

  return (
    <div className='col-lg-7' style={{marginBottom: 148}}>
      <div className='card' style={{border: 'none', boxShadow: '0px 4px 25px rgba(64, 76, 85, 0.15)', borderRadius: 20, marginTop: 40, padding: '30px 20px'}}>
        <h1 style={{paddingBottom: 50}}>Create New Staking Position</h1>  
        <div className='row' style={{paddingBottom: 50}}>
          <div className='col-sm-6' style={{display: 'flex', flexDirection: 'column'}}>
            <label>Set SDEX Amount</label>
            {/* <input type='number' /> */}
            <select className='form-control' style={{fontSize: 16, padding: 20, borderRadius: 10}}>
              <option>SDEX</option>
            </select>
          </div>
          <div className='col-sm-6' style={{display: 'flex', flexDirection: 'column'}}>
            <label>Set Stake Amount</label>
            <input className='form-control' type='number' style={{fontSize: 16, padding: 20, borderRadius: 10}} />
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: 34}}>
          <label>
            Estimated APY Value After Maturity:
          </label>
          <label style={{color: apy < 0 ? 'red' : apy > 0 ? '#51C64F' : '#404C55'}}>
            0%
          </label>
        </div>
        <div style={{textAlign: 'right'}}>
          <button className='btn-light'>Approve</button>
          <button className='btn-dark'>Deposit</button>
          <button className='btn-light'>Attach APY NFT</button> 
        </div>
      </div>
    </div>
  )
}