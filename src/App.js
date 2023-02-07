import Navbar from './Navbar/Navbar';
// import Home from './Components/Home';
import './App.css';
import Router from './Components/Router';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;