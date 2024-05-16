import logo from './logo.svg';
import './App.css';
import Navbar2 from './components/Navbar2';
import About from './components/About';
import Whoweare from './components/Whoweare';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar2/>
      <Navbar/>
      <About/>
      <Whoweare/>
      <Services/>
      <Team/>
      <Contact/>
    </div>
  );
}

export default App;
