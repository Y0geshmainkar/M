import React from 'react'
import './footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import LoopIcon from '@mui/icons-material/Loop';
import ListIcon from '@mui/icons-material/List';
import { Grid, Slider } from '@mui/material';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';


export default function Footer() {
  return (
    <div className='footer-contenier'>
      <div className='footer__left'>
        <img className='footer_spngAlbum' src="https://i.scdn.co/image/ab67616d0000b2735f3ede47954a93aa03efe5f9" alt="" />
        <div className='footer_songInfo'>
          <h4>NoYeah!</h4>
          <p>.....song</p>
        </div>
      </div>

      <div className='footer__center'>

        <ShuffleIcon className='footer_green' />
        <SkipPreviousIcon className='footer_icon' />
        <PlayCircleOutlineIcon className='footer_icon' fontSize='large' />
        <SkipNextIcon className='footer_icon' />
        <LoopIcon className='footer_green' />

      </div>


      <div className='footer__right'>
        <Grid item >
          <PlaylistPlayIcon />
        </Grid>
        <Grid>
          <VolumeDownIcon />
        </Grid>
        <Grid item xs>
          <Slider></Slider>
        </Grid>
      </div>

    </div>
  )
}
