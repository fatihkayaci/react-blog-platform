import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <SearchSection/>
      <main className="blog-section">
        <BlogSection/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
