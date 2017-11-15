const INITIAL_STATE = {
    loading: false,
    items: []
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "REQUEST_ITEMS":
            return Object.assign({}, state, {
                loading: true
            });
        case "RECEIVE_ITEMS":
            return Object.assign({}, state, {
                loading: false,
                items: action.items
            });
        default:
            return state;
    }
}
