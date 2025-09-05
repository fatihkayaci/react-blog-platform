// src/components/LikeButton.js
import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);        // State: beğeni sayısı
  const [isLiked, setIsLiked] = useState(false); // State: beğenildi mi?

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);    // Beğeniyi geri al
      setIsLiked(false);
    } else {
      setLikes(likes + 1);    // Beğeni ekle
      setIsLiked(true);
    }
  };

  return (
    <div>
      <button 
        onClick={handleLike}
        style={{
          backgroundColor: isLiked ? 'red' : 'gray',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        {isLiked ? '❤️ Beğendin' : '🤍 Beğen'} ({likes})
      </button>
    </div>
  );
}

export default LikeButton;