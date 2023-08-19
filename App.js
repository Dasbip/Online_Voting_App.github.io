import './App.css';
import About from './components/about_us';
import Active from './components/active';
import Vtprocess from './components/votingprocess';
import Footer from './components/Footer';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>HERO PAGE</h1>
      <About />
      <Active />
      <Vtprocess/>
      <Footer/>
    </div>
  );
}

export default App;
