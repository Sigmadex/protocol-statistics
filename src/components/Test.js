import { useState, useEffect } from "react";
const localCoinData = require("./local_coin_data.json");

const MostPopular = ({ tokens }) =>
  tokens.map((token, i) => (
    <div
      style={{
        height: "44px",
        width: "83px",
        display: "inline-block",
        fontSize: 14,
        fontWeight: "bold",
        alignItems: "center",
        backgroundColor: "#fff",
        border: "1px solid rgba(64, 76, 85, 0.5)",
        borderRadius: 10,
        marginRight: 10,
        paddingLeft: 10,
        paddingRight: 10,
        alpha: 0.5,
      }}
      key={i}
    >
      <img
        alt={`${token.name}`}
        src={`/images/eth-logo.svg`}
        style={{ width: 24, height: 24 }}
      />
      {token.asset_id}
    </div>
  ));

export function Test() {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    setTokens(localCoinData);
  }, []);

  return (
    <div
      style={{
        height: "45px",
        width: "166px",
        overflow: "auto",
        whiteSpace: "nowrap",
      }}
    >
      <MostPopular tokens={tokens} />
    </div>
  );
}
