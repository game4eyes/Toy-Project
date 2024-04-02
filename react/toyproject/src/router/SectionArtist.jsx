import React from 'react';
import { Link } from 'react-router-dom';
import './css/SectionArtist.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleMoveToDetail = () => {
    navigate('/MusicDetail');
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
    { id: 1, title: '인기아티스트', viewAllLink: '/PopularArtists'},
  ];

  const articlesData = [
    { id: 1, image: 'https://i.scdn.co/image/ab67616100005174859e4c14fa59296c8649e0e4', title: '아티스트 1', composer: '작곡가 1', detailLink: '/artist/1' },
    { id: 2, image: 'https://i.scdn.co/image/ab6761610000517440a7268dd742e5f63759b960', title: '아티스트 2', composer: '작곡가 2', detailLink: '/artist/2' },
  ];

  return (
    <div className='home-background'>
      {sectionsData.map(section => (
        <section key={section.id} style={{ paddingTop: '50px' }}>
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
                <button onClick={handleMoveToDetail}>
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

export default Home;