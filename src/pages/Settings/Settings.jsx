import './settings.css';
import { SideBar } from '../../components/SideBar';

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="settings__title">
          <span className="settings__update-title">Update your account</span>
          <span className="settings__delete-title">Delete your account</span>
        </div>
        <form className="settings__form">
          <label htmlFor="">Profile Picture</label>
          <div className="settings__picture">
            <img
              src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="user"
            />
            <label htmlFor="fileInput">
              <i className="settings__picture-icon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Randy Wuchi" />
          <label>Email</label>
          <input type="email" placeholder="randy@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="******" />
          <button className="settings__submit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
