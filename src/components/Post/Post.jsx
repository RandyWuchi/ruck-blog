import './post.css';

const Post = () => {
  return (
    <article className="post">
      <img
        src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRlY2h8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="post__image"
      />
      <div className="post__info">
        <div className="post__categories">
          <span className="post__category">Node</span>
          <span className="post__category">React</span>
        </div>
        <span className="post__title">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="post__date">1 hour ago</span>
      </div>
      <p className="post__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum
        porro at eum ut iusto totam fugit, quia excepturi laborum eos quod
        debitis ducimus provident, voluptates, sequi fuga. Consequuntur,
        quaerat.
      </p>
    </article>
  );
};

export default Post;
