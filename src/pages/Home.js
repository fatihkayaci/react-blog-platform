import '../styles/Home.css';

import Hero from '../components/Home/Hero';
import SearchSection from '../components/Home/SearchSection';
import BlogSection from '../components/Home/BlogSection';

function Home() {
  return (
    <>
      <Hero/>
      <SearchSection/>
      <main className="blog-section">
        <BlogSection/>
      </main>
    </>
  );
}

export default Home;