import { useState, useEffect } from "react";
const localCoinData = require('../local_coin_data.json')

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

const Search = ({filterTokens}) => {
  return (
    <input onChange={e => filterTokens(e.target.value)} className="form-control" tyoe='text' />
  )
}

const MostPopular = ({tokens}) => {
  return (
    <div>
      {tokens.map(token => 
        <div style={{backgroundColor: 'gold', fontSize: 14, fontWeight: 'bold', display: 'inline-block', width: 83, height: 44, border: '1px solid #404C55', borderRadius: 10, marginRight: 10}}>
          <img
            alt={`token.name`}
            src='/images/avax-logo.svg'
            style={{width: 24, height: 24}}
          />
          {token.asset_id}
        </div>
      )}
    </div>
  )
}

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

  useEffect(() => {
    setTokens(localCoinData)
  }, [])

  // useEffect(() => {
  //   if (tokens.length) {
  //     console.log(tokens[0])
  //   }
  // }, [tokens])

  function filterTokens(filterBy) {
    if (filterBy !== '') { // || tokens.length > 0
      console.log('filtering by ', filterBy)
      let filteredTokens = [...tokens]
        .filter(token => token.asset_id.toLowerCase() === filterBy.toLowerCase() || token.name.toLowerCase() === filterBy.toLowerCase())
      setTokens(filteredTokens)
    }
  }

  return (
    <div>
      <h1>Select a token</h1>
      <Search filterTokens={filterTokens} />
      <MostPopular tokens={tokens} />
      <div>
        <ul style={{padding: 0, listStyleType: 'none'}}>
          {/* {tokens.length ? tokens.map(token => <li key={token.tokenSymbol}>{token.tokenName}</li>) : null} */}
          {tokens.length && 
            tokens.map(token => {
              return (
                <li key={token.asset_id}>
                  <div style={{display: 'inline-block'}}>
                    <img
                      alt={`token.name`}
                      src='/images/avax-logo.svg'
                      style={{display: 'inline-block', width: 42, height: 42}}
                    />
                    {/* {`${token.asset_id} - $${token.price_usd.toFixed(3)}`} */}

                    <div className='row'>
                      {token.name}
                    </div>
                    <div className='row'>
                      {token.asset_id}
                    </div>
                  </div>
                  <div style={{display: 'inline-block'}}>
                    ${token.price_usd.toFixed(3)}
                  </div>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  );
};
