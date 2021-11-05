import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
  return (
    <div className="register">
      <span className="register__title">Register</span>
      <form className="register__form">
        <label>Username</label>
        <input type="text" placeholder="Enter your username...." />
        <label>Email</label>
        <input type="email" placeholder="Enter your email...." />
        <label>Password</label>
        <input type="password" placeholder="Enter your password...." />
        <button className="register__register-btn">Register</button>
      </form>
      <button className="register__login-btn">
        <Link to="/login" className="link">
          LOGIN
        </Link>
      </button>
    </div>
  );
};

export default Register;
