const initialState = [];



export default function replace(state = initialState, action) {
    var newState=[...state];
    if (action.type === 'REPLACE_FAVORITES_OF_LAST_WEEKS_IPAD') {
        newState=[...action.payload]
        return newState;
    }
    return newState;
}