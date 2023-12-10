
export const authorizationUri = "https://accounts.spotify.com/authorize"

const redirect_uri = "http://localhost:3000/"

var client_id = 'f9adac945c5a40518c79f499212f16d3';

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-read-private user-read-email"
];

export const getTokenFromUrl = ()=> {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) =>{
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
};

export const loginUrl = `${authorizationUri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
