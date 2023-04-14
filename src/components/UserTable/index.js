import { useState, useEffect } from 'react' 

let testUserData = [
  {
    txId: '2',
    timestamp: '1658158884',
    user: '0x0582f...8417', 
    avaAmt: 0, 
    claimAmt: 50, 
    refAddress: '0x06f6...f12d', 
    refAmt: '10' // must be string; can have N/A as value
  },
  {
    txId: '1',
    timestamp: '1658158030',
    user: '0x06f6...f12d', 
    avaAmt: 2, 
    claimAmt: 1000, 
    refAddress: '0x4d8e...86d8', 
    refAmt: 'N/A' 
  },
  {
    txId: '3',
    timestamp: '1658160271',
    user: '0x4d8e...86d8', 
    avaAmt: 0, 
    claimAmt: 50, 
    refAddress: '0xc49d...5d7c', 
    refAmt: '10' 
  },
  {
    txId: '4',
    timestamp: '1658161460',
    user: '0xc49d...5d7c', 
    avaAmt: 0, 
    claimAmt: 50, 
    refAddress: '0x0582f...8417', 
    refAmt: '10' 
  }
]

export function UserTable(users) {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    setUserData(testUserData)
  }, [])

  return (
    <table class="table" style={{color: '#404C55'}}>
      <thead>
        <tr>
          <th scope="col">TxID</th>
          <th scope="col">Timestamp</th>
          <th scope="col">User</th>
          <th scope="col">AVAX Amt</th>
          <th scope="col">Claim Amt</th>
          <th scope="col">Ref Address</th>
          <th scope="col">Ref Amt</th>
        </tr>
      </thead>
      <tbody>
        {userData.length
          ? userData.map(user => {
              return (
                <tr>
                  <td>{user.txId}</td>
                  <td>{user.timestamp}</td>
                  <td>{user.user}</td>
                  <td>{user.avaAmt}</td>
                  <td>{user.claimAmt}</td>
                  <td>{user.refAddress}</td>
                  <td>{user.refAmt}</td>
                </tr>
              )
            })
          : null}
      </tbody>
    </table>
  )
}