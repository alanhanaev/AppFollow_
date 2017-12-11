const initialState = [];



export default function replace(state = initialState, action) {
    var newState=[...state];
    if (action.type === 'REPLACE_YOU_MIGHT_LIKE_IT_IPAD') {
        newState=[...action.payload]
        return newState;
    }
    return newState;
}