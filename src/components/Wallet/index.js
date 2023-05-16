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
    gradient: "to bottom left, #FADD46, #FFB547 ",
  },
  {
    title: "APY Multiplier",
    status: "Owned",
    image: "",
    amount: 1,
    gradient: "to bottom left, #46CEFA, #2B6CCC",
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

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8 col-sm-12" style={{ height: "100vh" }}>
        <div className="row">
          <h1 style={{ fontSize: 60, marginBottom: 30 }}>Wallet</h1>
          <p style={{ marginBottom: 15 }}>
            View the current status of your wallet.
          </p>
          {walletTokens.length ? (
            walletTokens.map((token, i) => {
              return (
                <div className="col-sm-6 col-lg-3" key={i}>
                  <div
                    className="card"
                    style={{
                      border: "none",
                      boxShadow: "0px 4px 25px rgba(64, 76, 85, 0.15)",
                      borderRadius: 20,
                      marginTop: 10,
                      marginBottom: 10,
                      padding: 8,
                      height: 179,
                    }}
                  >
                    <div
                      className="card-body"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontSize: 24,
                            fontWeight: "bold",
                          }}
                        >
                          {token.amountInCAD.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </h3>
                        <h6
                          style={{
                            color: "#404C55",
                            fontSize: 14,
                            fontWeight: "lighter",
                            opacity: 0.5,
                          }}
                        >
                          {`${token.amountInCAD
                            .toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })
                            .replace("$", "")} ${token.tokenName}`}
                        </h6>
                      </div>
                      <div style={{ fontSize: 14 }}>
                        <img
                          alt="AVAX"
                          src="/images/sigmadex-logo-square.svg"
                          style={{
                            height: 28,
                            borderRadius: "50%",
                            marginRight: 10,
                          }}
                        />
                        <span style={{ fontSize: 16, fontWeight: "bold" }}>
                          {token.tokenName}
                        </span>
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
        <hr style={{ marginBottom: 40 }} />
        <div className="row">
          <h1 style={{ fontSize: 48, marginBottom: 30 }}>APY NFTs</h1>
          <p style={{ marginBottom: 15 }}>
            View and manage the APY NFTs you own.
          </p>
          {nfts.length ? (
            nfts.map((nft, i) => {
              return (
                <div
                  className="col-sm-6 col-lg-3"
                  // style={{ borderRadius: 50 }}
                  key={i}
                >
                  <div
                    className="card"
                    style={{ height: 348, borderRadius: 10 }}
                  >
                    <div
                      style={{
                        background: `linear-gradient(${nft.gradient})`,
                        borderRadius: "10px 10px 0px 0px",
                        height: 300,
                      }}
                    ></div>
                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                    <div className="card-body" style={{ padding: 20 }}>
                      <h5
                        className="card-title"
                        style={{ fontSize: 16, fontWeight: "bold" }}
                      >
                        {nft.title}
                      </h5>
                      <hr />
                      <div
                        className="card-text"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Status:</span>
                        <span>
                          <strong>{`${nft.status} (${nft.amount})`}</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <span>No NFTs found.</span>
          )}
        </div>
      </div>
    </div>
  );
}
