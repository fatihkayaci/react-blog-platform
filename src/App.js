import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// pages
import Home from './pages/Home';
import Posts from './pages/Posts';
import About from './pages/About';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;
