import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './css/Home.css';
import { useNavigate } from 'react-router-dom';
import Slider from '../component/Slider';
import SectionAlbum from './section/SectionAlbum';
import SectionArtist from './section/SectionArtist';
import SectionRadio from './section/SectionRadio';


  /**@todo_indexslider */
  /**@author_윤기님 & 명준명준 */
  
  function Home() {
    const navigate = useNavigate();
    const handleMoveToDetail = () => {
      navigate('/MusicDetail');
    };

  return (
    <div className='home-background'>
      <Slider/>
      <SectionAlbum />
      <SectionArtist />
      <SectionRadio />
      <Footer />
    </div>
  );
}

export default Home;