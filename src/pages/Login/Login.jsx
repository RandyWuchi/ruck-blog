import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  return (
    <div className="login">
      <span className="login__title">Login</span>
      <form className="login__form">
        <label>Email</label>
        <input type="email" placeholder="Enter your email...." />
        <label>Password</label>
        <input type="password" placeholder="Enter your password...." />
        <button className="login__login-btn">Login</button>
      </form>
      <button className="login__register-btn">
        <Link to="/register" className="link">
          REGISTER
        </Link>
      </button>
    </div>
  );
};

export default Login;
