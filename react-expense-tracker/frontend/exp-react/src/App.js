import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';


function App() {
  
  const [transaction, setTransaction] = useState([])

  const fetchTransactions = () => {
    fetch('http://localhost:3001/transactions/income')
    .then((response) => response.json())
    .then((data) => setTransaction(data))
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <div className="App">
      <h1>{transaction}</h1>
    </div>
  );
}

export default App;
