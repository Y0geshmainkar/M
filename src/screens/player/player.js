import React from 'react'
import "./player.css"
import Sidebar from '../../components/sidebar/sidebar';
import PlayerBody from './playerBody';
import Footer from '../../components/footer/footer';

export default function Player() {
  return (
    <div className='player'>
      <div className='player_body'>
        <Sidebar/>
        <PlayerBody/>
      </div>
      <Footer/>
    </div>
  );
}
