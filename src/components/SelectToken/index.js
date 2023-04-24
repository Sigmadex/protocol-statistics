import { useState, useEffect } from "react";

const tempTokens = [
  {
    tokenName: "Ethereum",
    tokenSymbol: "ETH",
    price: 2489.46,
  },
  {
    tokenName: "Bitcoin",
    tokenSymbol: "BTC",
    price: 37051.31,
  },
];

export const SelectToken = () => {
  const [selectedToken, setSelectedToken] = useState("");
  const [tokens, setTokens] = useState([
    {
      tokenName: "Ethereum",
      tokenSymbol: "ETH",
      price: 2489.46,
    },
    {
      tokenName: "Bitcoin",
      tokenSymbol: "BTC",
      price: 37051.31,
    },
  ]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTokens(tempTokens);
  //   }, 2000);
  // }, []);

  return (
    <div>
      <h1>Select a token</h1>
      <div>Search</div>
      <div>
        <ul>
          {tokens.map((token) => {
            <li>{token.tokenName}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
