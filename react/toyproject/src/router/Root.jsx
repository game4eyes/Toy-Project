import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routes 추가
import SectionAlbum from './SectionAlbum';
import SectionArtist from './SectionArtist';
import SectionRadio from './SectionRadio';
import Footer from '../page/Footer';
import './css/Root.css';

function Root() {
  return (
    <div className='home-background'>

      <Routes>
        <Route path="/" element={
          <>
            <SectionAlbum />
            <SectionArtist />
            <SectionRadio />
          </>
        } />
      </Routes>


      <Footer />
    </div>
  );
}

export default Root;