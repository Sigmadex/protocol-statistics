import { UserTable } from "../UserTable";

export function Admin() {
  return (
    <div className="row" style={{ color: "#404C55" }}>
      <div className="col-lg-12">
        <h1>Admin</h1>
        <UserTable />
      </div>
    </div>
  );
}
