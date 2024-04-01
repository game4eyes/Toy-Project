import React from 'react';
import { Link } from 'react-router-dom';



function Article({ id, image, title, composer, detailLink, handleMoveToDetail, handleIconClick }) {
  return (
    <article key={id} className='article-parents'>
      <figure>
        <img src={image} alt="인기 아티스트 이미지" />
        <div className='article-child'>
          <button onClick={handleMoveToDetail}>
            <span className="icon" onClick={(e) => handleIconClick(e, id)}>▶</span>
          </button>
        </div>
        <div>
          <h4><Link to={detailLink}>{title}</Link></h4>
          <p>{composer}</p>
        </div>
      </figure>
    </article>
  );
}

export default Article;