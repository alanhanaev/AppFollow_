const initialState = [];



export default function replace(state = initialState, action) {
    var newState=[...state];
    if (action.type === 'REPLACE_COLLECTION_BANNERS_IPHONE') {
        newState=[...action.payload]
        return newState;
    }
    return newState;
}