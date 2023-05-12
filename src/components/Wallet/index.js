import { useState, useEffect } from "react";

const localWalletTokens = [
  {
    tokenName: "SDEX",
    amount: 1000,
    amountInCAD: 62512.02,
  },
  {
    tokenName: "USDT",
    amount: 1000,
    amountInCAD: 10000.0,
  },
  {
    tokenName: "USDC",
    amount: 1000,
    amountInCAD: 10000.0,
  },
  {
    tokenName: "SDEX-SLP",
    amount: 1000,
    amountInCAD: 10000.0,
  },
];

const localNfts = [
  {
    title: "No Penalties",
    status: "Owned",
    image: "",
    amount: 1,
  },
  {
    title: "APY Multiplier",
    status: "Owned",
    image: "",
    amount: 1,
  },
];

export function Wallet() {
  const [walletTokens, setWalletTokens] = useState([]);
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setWalletTokens(localWalletTokens);
      setNfts(localNfts);
    }, 1000);
  }, []);

  {
    /* <img
                  alt={`${token.name}`}
                  src={`/images/eth-logo.svg`}
                  style={{
                    width: 42,
                    height: 42,
                    float: "left",
                    marginRight: 10,
                    paddingTop: 5,
                  }}
                /> */
  }

  return (
    <div className="row justify-content-center">
      {/* <div className="col-lg-10 col-sm-12" style={{height: '100vh'}}> */}
      <div className="col-lg-9 col-sm-12" style={{ height: "100vh" }}>
        <h1>Wallet</h1>
        <span>View the current status of your wallet.</span>
        <hr />
        <div className="row">
          {walletTokens.length ? (
            walletTokens.map((token) => {
              return (
                <div className="col-sm-3">
                  <div
                    className="card"
                    style={{
                      border: "none",
                      boxShadow: "0px 4px 25px rgba(64, 76, 85, 0.15)",
                      borderRadius: 20,
                      marginTop: 10,
                      marginBottom: 10,
                      height: 179,
                    }}
                  >
                    <div className="card-body">
                      {/* <h5 className="card-title">{item[1]}</h5> */}
                      <div
                        style={{ fontSize: 32, fontWeight: "bold" }}
                        className="card-title"
                      >
                        {token.amountInCAD.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </div>
                      <div style={{ fontSize: 14 }} className="card-text">
                        {`${token.amountInCAD} ${token.tokenName}`}
                      </div>
                      <div style={{ fontWeight: "bold" }}>
                        <img
                          alt="AVAX"
                          src="/images/sigmadex-logo-square.svg"
                          style={{ height: 28, borderRadius: "50%" }}
                        />
                        {token.tokenName}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <span>No wallet tokens found.</span>
          )}
        </div>
        <hr />
        <div className="row">
          <h2>APY NFTs</h2>
          <span>View and manage the APY NFTs you own.</span>
          {nfts.length ? (
            nfts.map((nft, i) => <span>{nft.title}</span>)
          ) : (
            <span>No NFTs found.</span>
          )}
        </div>
      </div>
    </div>
  );
}
