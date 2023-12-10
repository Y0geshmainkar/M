import React from 'react'
import './sidebar.css'
import SidebarOption from './sidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../../DataLayer';


export default function Sidebar() {

  const [{ user, token, playlists }, dispatch] = useDataLayerValue();
  return (
    // <div className='sidebar-contenier'>
    //   SideBar
    // </div>
    <div className='sidebar'>
      <img className="sidebar-logo" src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt='' />

{/* <img className="sidebar-logo" src="https://i.scdn.co/image/ab67616d0000b2735f3ede47954a93aa03efe5f9"
        alt='' /> */}

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

      <br></br>
      <strong className='sidebar-playlist'>PLAYLISTS</strong>
      <hr></hr>

      {playlists?.items?.map((playlist) => (
        <SidebarOption imageUrl={playlist.images[0].url} title={playlist.name} />
      ))}

{playlists?.items?.map((playlist) => {
  const urls = playlist.images[0].url
  console.log("Here is the Images ", urls )
})}
        


    </div>
  )
}
