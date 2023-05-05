import { Link } from "react-router-dom";
import { ConnectButton } from "../ConnectButton";

const Logo = () => {
  return (
    <Link to="/">
      <img
        style={{ cursor: "pointer", height: 33.53 }}
        alt="Sigmadex logo"
        src="/images/logo-E-dark.svg"
      />
    </Link>
  );
};

const navbarStyles = {
  height: "90px",
  // paddingTop: '90px',
  paddingLeft: "36px",
  paddingRight: "36px",
  display: "flex",
  alignItems: "center",
  position: "fixed",
  top: "0px",
  left: "0px",
  right: "0px",
  justifyContent: "space-between",
};

const linkStyles = {
  color: "#798188",
  fontWeight: "500",
  marginRight: 30,
  textDecoration: "none",
};

const dropdownStyles = {
  width: 397,
  height: 134
}

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-link active" to="/wallet">
              Wallet
            </Link>
            <span
              className="nav-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Positions
            </span>
            <ul className="dropdown-menu" style={dropdownStyles} aria-labelledby="dropdownMenuButton1">
              <li>
                <Link className="dropdown-item" to="/positions/earn">
                  <span>
                    <img
                      alt='Earn APY'
                      src='/images/earn_icon.svg'
                      style={{width: 38, height: 38}}
                    />
                    Earn APY                    
                  </span>
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/positions/mine">
                  <span>
                    <img
                      alt='Mine APY'
                      src='/images/mine_icon.svg'
                      style={{width: 38, height: 38}}
                    />                    
                    Mine APY
                  </span>
                </Link>
              </li>
            </ul>
            <Link className="nav-link" to="/governance">
              Governance
            </Link>
            <Link className="nav-link" to="/swap">
              Swap
            </Link>
          </div>
          <img alt="Avax logo" src="/images/avax-logo-inverse.svg" />
          <ConnectButton />
        </div>
      </div>
    </nav>
  );
};
