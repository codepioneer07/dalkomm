import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

//yarn add react-router-dom@5
//yarn add react-bootstrap bootstrap

import MainContent from './main';
import ContactUs from './subComponents/ContactUs';
import Kakaomap from './map'

//yarn add gh-pages
//npm install gh-pages

function App() {
  return (
    <div className='body'>
      <header>
        <div className='inbox'>
          <h1 className='logo'><Link to="/"><img src="/images/logo.png" alt=""/></Link></h1>
          <nav className='nav'>
            <ul>
              <li>Dal.Komm</li>
              <li>메뉴</li>
              <li>매장</li>
              <li>새로운 소식</li>
              <li>창업안내</li>
              <div>
                <li><Link to="/subComponents/ContactUs">SHOP</Link></li>
              </div>
            </ul>
          </nav>
        </div>
      </header>
      <div>
        <Route path="/" exact={true} component={MainContent} />
        <Route path="/subComponents/ContactUs" component={ContactUs} />
      </div>
    </div>
  );
}

export default App;
