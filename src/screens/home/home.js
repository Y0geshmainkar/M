import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lib from '../library/lib'
import Fev from '../fevorites/fev'
import Feed from '../feed/feed'
import Player from '../player/player'
import Trending from '../Trending/trending'
import './home.css'
import Sidebar from '../../components/sidebar/sidebar'
import Login from '../login/login'

export default function Home() {
  return (
    
    <Router>
      <div className='main-body'>
        <Sidebar/>
        
      <Routes>
            <Route path='/' element= {<Lib/>}></Route>
            <Route path='/fev' element= {<Fev/>}></Route>
            <Route path='/feed' element= {<Feed/>}></Route>
            <Route path='/player' element= {<Player/>}></Route>
            <Route path='/trending' element= {<Trending/>}></Route>

      </Routes>
      </div>
    </Router>
    
  );
}
