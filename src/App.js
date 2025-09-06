import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogCard from './components/BlogCard';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Hero/>
      </main>
    </div>
  );
}

export default App;
