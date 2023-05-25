import { useState, useEffect } from "react";

const localCoinData = require("./local_coin_data.json");

const Search = ({ setSearched }) => {
  return (
    <input
      type="text"
      className="form-control"
      onChange={(e) => setSearched(e.target.value)}
      placeholder="Search for token"
    />
  );
};

const MostPopular = ({ tokens }) => {
  return (
    <div>
      {tokens.map((token, i) => (
        <div
          key={i}
          style={{
            backgroundColor: "gold",
            fontSize: 14,
            fontWeight: "bold",
            display: "inline-block",
            width: 83,
            height: 44,
            border: "1px solid #404C55",
            borderRadius: 10,
            marginRight: 10,
          }}
        >
          <img
            alt={`token.name`}
            src="/images/avax-logo.svg"
            style={{ width: 24, height: 24 }}
          />
          {token.asset_id}
        </div>
      ))}
    </div>
  );
};

const filteredTokens = (tokens, searched) => {
  return searched === ""
    ? tokens
    : tokens.filter(
        (token) =>
          token.asset_id.toLowerCase().startsWith(searched.toLowerCase()) ||
          token.name.toLowerCase().startsWith(searched.toLowerCase())
      );
};

export function Test() {
  const [tokens, setTokens] = useState([]);
  const [searched, setSearched] = useState("");

  useEffect(() => {
    setTokens(localCoinData);
  }, []);

  return (
    <div className="row">
      <div className="col-lg-12">
        <h1>Test</h1>
        <Search setSearched={setSearched} />
        <MostPopular tokens={filteredTokens(tokens, searched)} />
        <ul style={{ padding: 0, listStyleType: "none" }}>
          {filteredTokens(tokens, searched).map((token, i) => (
            <li key={i}>{token.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
