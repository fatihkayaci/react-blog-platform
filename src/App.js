import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import BlogSection from './components/BlogSection';
import BlogCard from './components/BlogCard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <SearchSection/>
      <main className="blog-section">
        <BlogSection/>
      </main>
    </div>
  );
}

export default App;
