export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: null,
    //JUST FOR DEVELOPING
    token: "BQA13MS3naBluYx0IABXuTNkDtkQheZuQP9LTH8xqaq9Uci5Uw23Vr8ctMG0ky0TyQgwFPNK15waG9chja8GHFsYJnfJ2GBjkbDg4NWy_sOX3-090AN3bqSWXDRyp6TG_Y-Q_b8DMqkZanBt9cGbLggPrfO1f4DDdkynM-4xeSddJQhHClkfq4vLQBcDY5xlg7O8fbAm9DQV2_k27bLLS5uWiS-gaw"
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


