import React from 'react'
import './player.css'
import Header from '../../components/header/Header.js'

export default function PlayerBody({ spotify }) {
  return (
    <div className='body-contenier'>

      <Header spotify={spotify}></Header>

      <div className='body_info'>
        <img src='https://i.scdn.co/image/ab67616d0000b2735f3ede47954a93aa03efe5f9' alt='' className="body_cover_pic"></img>
        <div className='body_infoText'></div>
      </div>

    </div>
  )
}
