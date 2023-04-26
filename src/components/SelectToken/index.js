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
  const [tokens, setTokens] = useState([]);

  const apiKey = process.env.REACT_APP_COINAPI_KEY
  const assetsEndpoint = "https://rest.coinapi.io/v1/assets/"
  const limit = '10' // limit coins to 10

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

  return (
    <div>
      <h1>Select a token</h1>
      <div>Search</div>
      <div>
        <ul>
          {tokens.length ? tokens.map(token => <li key={token.tokenSymbol}>{token.tokenName}</li>) : null}
        </ul>
      </div>
    </div>
  );
};
