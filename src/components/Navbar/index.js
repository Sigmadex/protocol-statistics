import { ConnectButton } from '../ConnectButton'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Logo = () => {
  return (
    // <Link to='/'>
      <img
        style={{cursor: 'pointer', height: 21}}
        alt='Sigmadex logo'
        src='/images/logo-E-dark.svg' 
      />
    // </Link>
  )
}

const navbarStyles = {
  height: '90px',
  // paddingTop: '90px',
  paddingLeft: '36px',
  paddingRight: '36px',
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  top: '0px',
  left: '0px',
  right: '0px',
  justifyContent: 'space-between'
}

export function Navbar(connectAccount) {
  return (
    <div className="row align-items-center justify-content-around" style={{height: 90}}>
      <div className='col-lg-1 col-sm-2'>
        <Logo />
      </div>
      <div className="col-lg-9 col-sm-5">
        <Router>
          <Link to='/'>Home</Link>
          <Link to='/positions'>Positions</Link>
          <Link to='/governance'>Governance</Link>
        </Router>
      </div>
      <div className='col-lg-1 col-sm-5' style={{backgroundColor: 'salmon'}}>
        <img
          alt='Avax logo'
          src='/images/avax-logo-inverse.svg'
        />
        <ConnectButton />        
      </div>
    </div>
  )
}