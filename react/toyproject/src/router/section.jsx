import React from 'react';
import { Link } from 'react-router-dom';
import Article from './article';


function Section({ id, title, viewAllLink, viewAllText, children, handleMoveToDetail, handleIconClick }) {
  return (
    <section key={id} style={{ paddingTop: '50px' }}>
      <div className="popular-artists">
        <div>
          <h2>
            <Link to={viewAllLink}>{title}</Link>
            <Link to={viewAllLink} id="aaa">{viewAllText}</Link>
          </h2>
        </div>
        <div>
          {React.Children.map(children, child => {
            return React.cloneElement(child, {
              handleMoveToDetail: handleMoveToDetail,
              handleIconClick: handleIconClick
            });
          })}
        </div>
      </div>
    </section>
  );
}

export default Section;