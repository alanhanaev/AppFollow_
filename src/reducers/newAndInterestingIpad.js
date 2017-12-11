const initialState = [];



export default function replace(state = initialState, action) {
    var newState=[...state];
    if (action.type === 'REPLACE_NEW_AND_INTERESTING_IPAD') {
        newState=[...action.payload]
        return newState;
    }
    return newState;
}