// src/components/Header.js
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>dev .blog</h1>
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="posts">Posts</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </nav>
        <div class="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Register</button>
        </div>
      </div>
      
    </header>
  );
}

export default Header;