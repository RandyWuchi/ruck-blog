import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__titles">
        <span className="header__title--sm">Randy's Pratice</span>
        <span className="header__title--lg">Blog</span>
      </div>
      <img
        src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHRlY2h8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="header"
        className="header__image"
      />
    </div>
  );
};

export default Header;
