// src/components/Header.js
function Header() {
  return (
    <header>
      <div class="logo">
        <h1>dev .blog</h1>
      </div>
      <div class="nav-container">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Posts</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
        <div class="auth-buttons">
          <button class="login-btn">Login</button>
          <button class="signup-btn">Register</button>
        </div>
      </div>
      
    </header>
  );
}

export default Header;