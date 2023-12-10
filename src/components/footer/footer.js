import React from 'react'
import './footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import LoopIcon from '@mui/icons-material/Loop';
import ListIcon from '@mui/icons-material/List';
import Grid from '@mui/material/Grid';

export default function Footer() {
  return (
    <div className='footer-contenier'>
      <div className='footer__left'>Song Details</div>
      <div className='footer__center'>

        <ShuffleIcon className='' />
        <SkipPreviousIcon className='' />
        <PlayCircleOutlineIcon className='' />
        <SkipNextIcon className='' />
        <LoopIcon className='' />

      </div>
      <div className='footer__right'>
        
      <Grid contenier spacing={2}>
      <Grid>
        <ListIcon></ListIcon>
      </Grid>
      <Grid>
        
      </Grid>
      </Grid>
      </div>

    </div>
  )
}
