import { Link } from "react-router-dom";
import { ConnectButton } from "./ConnectButton";

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

const dropdownStyles = {
  width: 397,
  height: 134,
};

export const Navbar2 = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: "#fff",
        height: 90,
        boxShadow: "0px 4px 30px rgba(166, 194, 215, 0.3)",
      }}
    >
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">
          <img src="/images/logo-E-dark.svg" alt="" width="30" height="24" />
        </a> */}
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/wallet">
                Wallet
              </Link>
            </li>

            <span
              className="nav-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Positions
            </span>
            <ul
              className="dropdown-menu"
              style={dropdownStyles}
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <Link className="dropdown-item" to="/positions/earn">
                  <span className="dropdown-item">
                    <img
                      alt="Earn APY"
                      src="/images/earn_icon.svg"
                      style={{ width: 38, height: 38, marginRight: 10 }}
                    />
                    Earn APY
                  </span>
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/positions/mine">
                  <span className="dropdown-item">
                    <img
                      alt="Mine APY"
                      src="/images/mine_icon.svg"
                      style={{ width: 38, height: 38, marginRight: 10 }}
                    />
                    Mine APY
                  </span>
                </Link>
              </li>
            </ul>

            <li className="nav-item">
              <Link className="nav-link" to="/governance">
                Governance
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/swap">
                Swap
              </Link>
            </li>

            <img alt="Avax logo" src="/images/avax-logo-inverse.svg" />
            <ConnectButton />
          </ul>
        </div>
      </div>
    </nav>
  );
};
