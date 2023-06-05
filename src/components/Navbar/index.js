import { Link } from "react-router-dom";
import { ConnectButton } from "../ConnectButton";
import { CircularImage } from "../CircularImage";

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
  borderRadius: 20,
  borderWidth: 0,
  boxShadow: "0px 4px 25px rgba(64, 76, 85, 0.15)",
  width: 397,
  height: 134,
  // position: "absolute",
  // top: 0,
  // left: 0,
};

export const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{
            backgroundColor: "#fff",
            // height: 90,
            boxShadow: "0px 4px 30px rgba(166, 194, 215, 0.3)",
            padding: 25,
          }}
        >
          <div className="col-lg-2">
            <Logo />
          </div>
          <div className="collapse navbar-collapse" id="navbarText">
            <div className="col-lg-9">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/wallet">
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
                      <span style={{ color: "rgba(0, 0, 0, 0.6)" }}>
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
                      <span style={{ color: "rgba(0, 0, 0, 0.6)" }}>
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
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3" style={{ textAlign: "right" }}>
              <span style={{ marginRight: 20 }}>
                <CircularImage
                  url="/images/avax-logo-square.svg"
                  width={37}
                  height={37}
                />
              </span>
              <ConnectButton />
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </div>
  );
};
