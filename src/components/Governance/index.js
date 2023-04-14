import { ClaimModal } from "../ClaimModal"

export function Governance() {
  return (
    <div className="row justify-content-center" style={{height: 90}}>
      <div className="col-lg-9 col-sm-12">
        {/* <h1>Governance</h1> */}
        <div className='row justify-content-center'>
          <ClaimModal />
        </div>
      </div>
    </div>
  )
}