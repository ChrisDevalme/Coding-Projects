import './App.css';
import {useState, useEffect} from 'react';


function App() {
  
  const [transaction, setTransaction] = useState([])

  const fetchIncomes = () => {
    fetch('http://localhost:3001/transactions/income')
    .then((response) => response.json())
    .then((data) => console.log(data))
  }

  useEffect(() => {
    fetchIncomes()
  }, [])

  return (
    <div className="App">
      {/* <h1>{data}</h1> */}
    </div>
  );
}

export default App;
