import { UserTable } from "../UserTable"

export function Admin() {
  return (
    <div style={{color: '#404C55'}}>
      <h1>Admin</h1>
      <span>View a global overview of the protocol statistics.</span>
      <UserTable />
    </div>
  )
}