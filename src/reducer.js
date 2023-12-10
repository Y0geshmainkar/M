export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: null,
    //JUST FOR DEVELOPING
    token: "BQBYb1YST8-ypKhfn_pPNvBufhZU-6bTPUZBVDt3JTMmZ-mEddCGfC94AhQoxnJdJYATr_HYwVptHRwfh19uyuK3vZDiazxbckBRGhY_xGNWwB1LwCzBlv-v3V5-6Ulm4u6DWYXMhFBoTsvYN6ky_TAgQ13qVemqKfzt8KIeXJr2BX84d64fYwvhBwAnMsTeMcORQcvyDQkW3j2XVoTY0VMM8wVG7Q"
};

const reducer = (state, action) => {

    // console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            };
        default:
            return state;
    }
}

export default reducer;


