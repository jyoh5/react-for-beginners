import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(0);
  const [money, setMoney] = useState("");
  const [coinCnt, setCoinCnt] = useState(0);
  const onChangeMoney = (e) => {
    setMoney(e.target.value);
    setCoinCnt(`${Math.floor(e.target.value / coins[selectedCoin].quotes.USD.price)} ${coins[selectedCoin].symbol}`);
  }
  const onChangeCoin = (e) => setSelectedCoin(e.target.value);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(res => res.json())
    .then(json => {
      setCoins(json);
      setLoading(false);
    });
  }, []);
  return <div>
    <h1>The Coins. {loading ? "" : `(${coins.length})`}</h1>
    <label>Convert your money to COINS!</label>
    <div>
      <input value={money} onChange={onChangeMoney} type="number" placeholder="How much do you have?"/>
      &rarr;
      <span>{loading ? 0 : `${coinCnt}`}</span>
    </div>
    <div>
      {loading ? 
        <strong>Loading...</strong> : 
        <select value={selectedCoin} onChange={onChangeCoin}>
        {coins.map((coin, idx) => 
          <option value={idx} key={coin.id}>
            {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
          </option>)}
      </select>}
    </div>
  </div>;
}

export default App;
