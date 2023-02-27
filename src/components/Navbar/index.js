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
    <div className="row align-items-center justify-content-around" style={{height: 90, backgroundColor: '#FFFFFF', boxShadow: '0px 4px 25px rgba(64, 76, 85, 0.15)'}}>
      <div className='col-lg-2 col-sm-2' style={{backgroundColor: 'orange'}}>
        <Logo />
      </div>
      <div className="col-lg-8 col-sm-5" style={{backgroundColor: 'cyan'}}>
        <Link to='/'>Home</Link>
        <Link to='/positions'>Positions</Link>
        <Link to='/governance'>Governance</Link>
      </div>
      <div className='col-lg-2 col-sm-5' style={{backgroundColor: 'salmon'}}>
        <img
          alt='Avax logo'
          src='/images/avax-logo-inverse.svg'
        />
        <ConnectButton />        
      </div>
    </div>
  )
}