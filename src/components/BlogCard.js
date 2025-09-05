// BlogCard.js'i güncelle
import LikeButton from './LikeButton';

function BlogCard() {
  const blogPost = {
    title: "React Öğrenmeye Başladım",
    author: "Ahmet",
    content: "React öğrenmek sandığımdan daha kolay çıktı..."
  };

  return (
    <div className="blog-card">
      <h2>{blogPost.title}</h2>
      <p>{blogPost.content}</p>
      <LikeButton />    {/* Etkileşimli buton */}
    </div>
  );
}
export default BlogCard;