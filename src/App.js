import React, { useEffect, useState } from 'react'
import Home from './screens/home/home'
import Login from './screens/login/login'
import { getTokenFromUrl } from './spotify'
import Player from './screens/player/player';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();

export default function App() {

  // const [token, setToken] = useState(null);
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();
  

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      // setToken(_token)

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user
        });
      });
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      });
    }
  }, []);

  console.log("USER", user)
  console.log("I have a Token :point", token)
  console.log("I have a PlayList :point", playlists)
  return (
    <div>
      {
        token ? (
          <Player  spotify={spotify}/>
        ) : (
          <Login />
        )
      }
      {/* <Home/> */}
    </div>
  )
}
