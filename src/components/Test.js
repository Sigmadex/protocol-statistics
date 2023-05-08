import { useState, useEffect } from "react";

const localCoinData = require("./local_coin_data.json");

const Search = ({ setSearched }) => {
  return (
    <input
      type="text"
      onChange={(e) => setSearched(e.target.value)}
      placeholder="Search for token"
    />
  );
};

const MostPopular = ({ tokens }) => {
  return (
    <div>
      {tokens.map((token, i) => (
        <span key={i}>{token.asset_id}</span>
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
    <div>
      <h1>Test</h1>
      <Search setSearched={setSearched} />
      <MostPopular tokens={filteredTokens(tokens, searched)} />
      <ul>
        {filteredTokens(tokens, searched).map((token, i) => (
          <li key={i}>{token.name}</li>
        ))}
      </ul>
    </div>
  );
}
