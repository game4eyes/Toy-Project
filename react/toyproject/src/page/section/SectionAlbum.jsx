import React from 'react';
import { Link } from 'react-router-dom';
import './css/SectionAlbum.css';
import { useNavigate } from 'react-router-dom';


function SectionAlbum() {
  const navigate = useNavigate();
  const handleMoveToDetail = (id) => {
    navigate(`/MusicDetail/${id}`);
  };

  /**@todo_indexslider */
  /**@author_윤기님 */

  const handleIconClick = (event, articleId) => {
    event.stopPropagation(); // 이벤트 버블링 방지
    // articleId를 기반으로 다른 동작 수행
    console.log(`아티클 ${articleId}의 아이콘이 클릭되었습니다.`);
  };

  const sectionsData = [
    // 임시배열 컴포넌트로 바꿀 예정
    { id: 1, title: '인기 앨범', viewAllLink: '/PopularArtists' },
  ];

  const articlesData = [
    { id: "58JkIC1jK1NZNSJeLXfpWt", image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMDdfMjI4%2FMDAxNjk2NjU2OTc4Mjgx.s2zWHG_JN809P57nWRqxNyxkwFz0Ww3qKSDCSy184rMg.CbWKYjL1vT86sYS74lMmkMzibSUeZDH0JnM12zCa-k0g.JPEG.mlb2k9%2Fqq.jpg&type=sc960_832', title: 'Happier', composer: '작곡가 1', detailLink: '/artist/1' },
    { id: "0ScP795B5ZWkFHZ3NqUcxx", image: 'https://upload.wikimedia.org/wikipedia/en/6/65/Kacey_Musgraves_-_Golden_Hour.png', title: 'golden hour', composer: '작곡가 2', detailLink: '/artist/2' },
    { id: "5XWlyfo0kZ8LF7VSyfS4Ew", image: 'https://i.scdn.co/image/ab67616d00001e023762ca7dddbb99a624a0c409', title: 'bonobono', composer: 'bonobono', detailLink: '/artist/3' },
  ];

  return (
    <div className='home-background'>
      {sectionsData.map(section => (
        <section key={section.id} >
          <div className="popular-artists">
            <div>
              <h2>
                <Link to={section.viewAllLink}>{section.title}</Link>
                <Link to={section.viewAllLink} id="aaa">모두보기</Link>
              </h2>
            </div>
          </div>
          {articlesData.map(article => (
            <article key={article.id} className='article-parents'>
              <figure>
                <img src={article.image} alt="인기 아티스트 이미지" />
                <div className='article-child'>
                  <button onClick={() => handleMoveToDetail(article.id)}>
                    <span className="icon" onClick={(e) => handleIconClick(e, article.id)}>▶</span>
                  </button>
                </div>
                <div>
                  <h4><Link to={article.detailLink}>{article.title}</Link></h4>
                  <p>{article.composer}</p>
                </div>
              </figure>
            </article>
          ))}
        </section>
      ))}

    </div>
  );
}


export default SectionAlbum;