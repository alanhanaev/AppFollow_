const initialState = [];



export default function replace(state = initialState, action) {
    var newState=[...state];
    if (action.type === 'REPLACE_TOP_PAID_APPS_IPHONE') {
        newState=[...action.payload]
        return newState;
    }
    return newState;
}