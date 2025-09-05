// src/components/Header.js
function Header() {
  return (
    <header>
      <div className="container">
        <h1>Benim Blog'um</h1>
        <nav>
          <ul>
            <li><a href="/">Ana Sayfa</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/hakkimda">Hakkımda</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;