const initialState = [];



export default function replace(state = initialState, action) {
    var newState=[...state];
    if (action.type === 'REPLACE_LOVERS_OF_CLASSICS_IPAD') {
        newState=[...action.payload]
        return newState;
    }
    return newState;
}