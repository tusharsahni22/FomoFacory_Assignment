import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setCoins, setSelectedCoin } from '../Common/Store/reducer';
import { getRealTimeUpdates } from "../Services/Services";

const TableContainer = styled.div`
  width: 80%;
  margin: 50px auto;
  text-align: center;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
`;
const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;
const Select = styled.select`
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  border-radius: 5px;
`;
const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
const SelectorButton = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 20px;
`;

const CoinTable = () => {
  // const [coins, setCoins] = useState([]);
  // const [selectedCoin, setSelectedCoin] = useState("Bitcoin");

  const dispatch = useDispatch();
  const coins = useSelector(state => state.coin.coins);
  const selectedCoin = useSelector(state => state.coin.selectedCoin);

  useEffect(() => {
    const fetchAndDispatchUpdates = () => {
      getRealTimeUpdates().then((response) => {
        console.log("updates", response.data);
        dispatch(setCoins(response.data));
      });
    };
    fetchAndDispatchUpdates();
    const interval = setInterval(fetchAndDispatchUpdates, 10000);
    return () => clearInterval(interval);
  }, [dispatch]);
  

 const  convertTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString('en-US', {
      month: 'long', 
      day: 'numeric', 
      year: 'numeric', 
      hour: 'numeric', 
      minute: '2-digit', 
      second: '2-digit', 
      hour12: true 
    });
    return formattedDate;
  }
  return (
    <TableContainer>
      <h1>Coin Market Table</h1>
      <SelectorButton >
      <h3>Select Coin</h3>
      <Select onChange={(e)=>dispatch(setSelectedCoin(e.target.value))}>
        <option value="Bitcoin">Bitcoin</option>
        <option value="Ethereum">Ethereum</option>
        <option value="Tether">Tether</option>
        <option value="Cardano">Cardano</option>
        <option value="Solana">Solana</option>
        <option value="XRP">XRP</option>
        </Select>
      </SelectorButton>

      <Table>
        <thead>
          <tr>
            <TableHeader>Rank</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>TimeStamp</TableHeader>
            <TableHeader>Current Price</TableHeader>
            <TableHeader>Market Cap</TableHeader>
          </tr>
        </thead>
        <tbody>
  {coins.filter(coin => coin.name === selectedCoin).map((coin) =>
    coin.timestamp.map((timestamp, index) => (
      <TableRow key={index}>
        <TableData>{coin.rank}</TableData>
        <TableData>{coin.name}</TableData>
        <TableData>{convertTimestamp(timestamp.timestamp)}</TableData>
        <TableData>${timestamp.rate}</TableData>
        <TableData>${timestamp.cap}</TableData>
      </TableRow>
    ))
  )}
</tbody>
      </Table>
    </TableContainer>
  );
};
export default CoinTable;
