import './App.css';
// Bootstrap styles
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';
import Footer from './Component/Footer/Footer';
import Destinations from './Component/Destinations/Destinations';
import Gallery from './Component/Gallery/Gallery';
import Adventure from './Component/Adventure/Adventure';

function App() {
  return (
    <div className="body">
      <Router>
        <Header></Header>
        <Banner></Banner>
        <Destinations></Destinations>
        <Adventure></Adventure>
        <Gallery></Gallery>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
