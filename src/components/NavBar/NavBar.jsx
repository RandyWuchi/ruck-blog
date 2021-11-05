import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  const user = false;
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <i className="navbar__icon fab fa-facebook-square"></i>
        <i className="navbar__icon fab fa-twitter-square"></i>
        <i className="navbar__icon fab fa-pinterest-square"></i>
        <i className="navbar__icon fab fa-instagram-square"></i>
      </div>
      <div className="navbar__center">
        <ul className="navbar__list">
          <li className="navbar__listItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="navbar__listItem">ABOUT</li>
          <li className="navbar__listItem">CONTACT</li>
          <li className="navbar__listItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="navbar__listItem">{user && 'LOGOUT'}</li>
        </ul>
      </div>
      <div className="navbar__right">
        {user ? (
          <Link to="/settings" className="link">
            <img
              src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="user profile"
              className="navbar__image"
            />
          </Link>
        ) : (
          <ul className="navbar__list">
            <li className="navbar__listItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="navbar__listItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="navbar__searchIcon fas fa-search"></i>
      </div>
    </nav>
  );
};

export default NavBar;
