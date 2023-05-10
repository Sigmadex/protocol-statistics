import { useState, useEffect } from "react";
const localCoinData = require("../local_coin_data.json");

const Search = ({ setSearched }) => {
  return (
    <input
      type="text"
      className="form-control"
      onChange={(e) => setSearched(e.target.value)}
      placeholder="Search for token"
      style={{ marginBottom: 20 }}
    />
  );
};

const MostPopular = ({ tokens, selectToken }) => (
  <div
    style={{
      marginBottom: 20,
      overflow: "scroll",
      // overflowX: "hidden",
      height: 44,
      // width: 1000,
    }}
  >
    {tokens.map((token, i) => (
      <div
        style={{ display: "inline-block" }}
        key={i}
        onClick={() => selectToken(token.asset_id)}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
            width: 83,
            height: 44,
            border: "1px solid rgba(64, 76, 85, 0.5)",
            borderRadius: 10,
            marginRight: 10,
            paddingLeft: 10,
            paddingRight: 10,
            alpha: 0.5,
          }}
        >
          <img
            alt={`${token.name}`}
            src={`/images/eth-logo.svg`}
            style={{ width: 24, height: 24 }}
          />
          {token.asset_id}
        </div>
      </div>
    ))}
  </div>
);

export const SelectToken = () => {
  const [tokens, setTokens] = useState([]);
  const [searched, setSearched] = useState("");
  const [selectedToken, setSelectedToken] = useState(null);

  const apiKey = process.env.REACT_APP_COINAPI_KEY;
  const assetsEndpoint = "https://rest.coinapi.io/v1/assets/";
  const limit = "10"; // limit coins to 10

  // useEffect(() => {
  //   fetch(`https://rest.coinapi.io/v1/assets/?apiKey=${apiKey}&limit=${limit}`, {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json'
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(json => console.log(json))
  // }, [])

  useEffect(() => {
    setTokens(localCoinData);
  }, []);

  const filteredTokens = (tokens, searched) => {
    return searched === ""
      ? tokens
      : tokens.filter(
          (token) =>
            token.asset_id.toLowerCase().startsWith(searched.toLowerCase()) ||
            token.name.toLowerCase().startsWith(searched.toLowerCase())
        );
  };

  const selectToken = (token) => {
    // alert("Selected ", token);
    console.log("Selected", token);
    // setSelectedToken(token)
  };

  return (
    <div className="col-lg-4 offset-lg-4">
      <div
        className="card"
        style={{
          border: "none",
          boxShadow: "0px 4px 25px rgba(64, 76, 85, 0.15)",
          borderRadius: 20,
          marginTop: 40,
          // padding: "30px 20px",
          padding: "35px",
          // height: 598,
        }}
      >
        <h1 style={{ fontSize: 34 }}>Select a token</h1>
        <Search setSearched={setSearched} />
        <MostPopular
          tokens={filteredTokens(tokens, searched)}
          selectToken={selectToken}
        />
        {filteredTokens(tokens, searched).map((token, i) => {
          return (
            <div
              // className="p-3"
              style={{
                borderBottom: "1px solid rgba(64, 76, 85, 0.2)",
                height: 68,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              key={i}
              onClick={() => selectToken(token.asset_id)}
            >
              <div style={{ display: "inline-block" }}>
                <img
                  alt={`${token.name}`}
                  src={`/images/eth-logo.svg`}
                  style={{
                    width: 42,
                    height: 42,
                    float: "left",
                    marginRight: 10,
                    paddingTop: 5,
                  }}
                />
                <div style={{ float: "right" }}>
                  <div>
                    <strong>{token.name}</strong>
                  </div>
                  <div>{token.asset_id}</div>
                </div>
              </div>

              <div>{token.price_usd.toFixed(2)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
