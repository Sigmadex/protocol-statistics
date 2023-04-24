import { useState, useEffect } from 'react'
import { ConnectButton } from "../ConnectButton";
import { SelectToken } from '../SelectToken'

export const SwapModal = () => {
  const [token1, setToken1] = useState('')
  const [token2, setToken2] = useState('')

  return <SelectToken />

  return (
    <div>
      <h1>Swap</h1>
      <span>sSDEX Balance</span>
      <div>
        <label>Set Input Amount</label>
        <div>
          <select>
            <option>Select token</option>
          </select>
        </div>
        <div>
          <input />
        </div>
      </div>
      <div>
        <label>Estimated Output</label>
        <div>
          <select>
            <option>Select token</option>
          </select>
        </div>
        <div>
          <input />
        </div>
      </div>
      <div>

      </div>
      <ConnectButton />
    </div>
  )
}