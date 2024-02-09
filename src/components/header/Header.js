import './Header.css'

import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from '../../DataLayer';

export default function Header() {
    const [{ user }, dispatch] = useDataLayerValue()
    return (
        <div className='header'>
            <div className='header_left'>
                <SearchIcon />
                <input placeholder='Search Song' type='text'></input>
            </div>
            <div className='header_right'>
                {/* <Avatar src={user?.images[0]?.url}></Avatar> */}
                <Avatar src='https://i.scdn.co/image/ab67616d0000b2735f3ede47954a93aa03efe5f9' />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}
