import './sidebar.css';

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__title">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate non
          asperiores ab perferendis adipisci facilis earum.
        </p>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">CATEGORIES</span>
        <ul className="sidebar__list">
          <li className="sidebar__listItem">Tech</li>
          <li className="sidebar__listItem">Tutorial</li>
          <li className="sidebar__listItem">NodeJs</li>
          <li className="sidebar__listItem">React</li>
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">FOLLOW US</span>
        <div className="sidebar__social">
          <i className="sidebar__icon fab fa-facebook-square"></i>
          <i className="sidebar__icon fab fa-twitter-square"></i>
          <i className="sidebar__icon fab fa-pinterest-square"></i>
          <i className="sidebar__icon fab fa-instagram-square"></i>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
