const initialState = [];



export default function replace(state = initialState, action) {
    var newState=[...state];
    if (action.type === 'REPLACE_APP_BANNERS_IPAD') {
        newState=[...action.payload]
        return newState;
    }
    return newState;
}