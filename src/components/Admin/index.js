import { UserTable } from "../UserTable";

export function Admin() {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-8 col-sm-12" style={{ marginBottom: 135 }}>
        <div className="row">
          <h1 style={{ fontSize: 60, marginBottom: 30 }}>Admin</h1>
          <p style={{ marginBottom: 15 }}>
            View a global overview of the protocol statistics.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <UserTable />
          </div>
        </div>
      </div>
    </div>
  );
}
