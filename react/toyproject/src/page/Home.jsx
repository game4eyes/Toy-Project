/*eslint-disable*/

import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './css/Home.css';
import { useNavigate } from 'react-router-dom';
import SectionAlbum from './section/SectionAlbum';
import SectionArtist from './section/SectionArtist';
import SectionRadio from './section/SectionRadio';

function Home() {
  const navigate = useNavigate();
  const handleMoveToDetail = () => {
    navigate('/MusicDetail');
  };
  
  /**@todo_indexslider */
  /**@author_윤기님 */


  return (
    <div className='home-background'>
      <SectionAlbum />
      <SectionArtist />
      <SectionRadio />
      <Footer />
    </div>
  );
}

export default Home;