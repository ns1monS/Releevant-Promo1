export default function Post({ post }) {
    return (
      <div>
        <h3>{post.title}</h3>
        <small>{post.date}</small>
        <p>{post.content}</p>
        <button className="btn btn-primary">Leer mas</button>
      </div>
    );
  }