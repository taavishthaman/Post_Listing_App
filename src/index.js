import React from 'react';
import ReactDOM from 'react-dom';
import FetchPost from "./FetchPost";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Slider";

ReactDOM.render(
  <div>
    <Header/>
    <Slider/>
    <FetchPost/>
    <Footer/>
  </div>,
  document.getElementById('root')
);
