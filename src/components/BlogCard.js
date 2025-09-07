// BlogCard.js'i güncelle

function BlogCard() {
  const blogPost = {
    author: "Fatih Kayacı",
    tags: ["#react", "#javascript", "#webdev"],
    title: "React Öğrenmeye Başladım",
    content: "React öğrenmek sandığımdan daha kolay çıktı..."
  };

  return (
    <div className="blog-card">
      <div className="blog-container">
        <div className="blog-author">
          <div className="author-avatar"></div>
          <span className="author-name">{blogPost.author}</span>
        </div>
        <Tag tags={blogPost.tags}/>
        <h2 className="blog-title">{blogPost.title}</h2>
        <p className="blog-content">{blogPost.content}</p>
        <hr/>
        <div className="blog-footer">
          <div className="blog-actions">
            <ActionButton icon="❤️" label="25"/>
            <ActionButton icon="💬" label="21"/>
            <ActionButton icon="🔗"/>
          </div>
          <a href="#" className="read-more">READ MORE →</a>  
        </div>
        <hr/>
        <div className="comments-section">
          <p>💬 Comments (3)</p>
          <Comment author="Ayşe Yılmaz" content="Çok faydalı bir yazı, teşekkürler!"/>
          <Comment author="Mehmet Demir" content="React ile ilgili daha fazla içerik bekliyoruz."/>
        </div>
      </div>
    </div>
  );
}
function Tag({ tags }) {  // destructuring ile tags'i al
  return (
    <div className="blog-tags">
      {tags.map((tag, index) => (
        <span key={index} className="tag">{tag} </span>
      ))}
    </div>
  );
}
function ActionButton({ icon, label }) {
  return (
    <button className="action-btn" aria-label={label}>
      {icon}
      {label}
    </button>
  );
}
function Comment({ author, content }) {
  return (
    <div className="comment">
      <div className="comment-author">@{author}</div>
      <div className="comment-content">{content}</div>
    </div>
  );
}

export default BlogCard;