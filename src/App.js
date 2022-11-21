// import logo from './logo.svg';
import './App.css';
// 追記
import ApiFetch from './components/ApiFetch';
// 追記
function App() {
  // console.log(process.env.REACT_APP_POSIPAN_API_KEY)
  return (
    <div className="App">
      <header className="App-header">
        <ApiFetch />
      </header>
    </div>
  );
}

export default App;