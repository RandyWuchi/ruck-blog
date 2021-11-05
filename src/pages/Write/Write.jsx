import './write.css';

const Write = () => {
  return (
    <div className="write">
      <img
        src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRlY2h8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="write__image"
      />
      <form className="write__form">
        <div className="write__form-group">
          <label htmlFor="fileInput">
            <i className="write__icon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: 'none' }} />
          <input
            type="text"
            placeholder="Title"
            className="write__input"
            autoFocus={true}
          />
        </div>
        <div className="write__form-group">
          <textarea
            type="text"
            placeholder="Tell your story...."
            className="write__input write__text"
          />
        </div>
        <button className="write__submit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
