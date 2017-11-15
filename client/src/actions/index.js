import $ from "jquery-ajax";

export function fetchItems() {
    return function(dispatch) {
        dispatch(requestItems());
        // When working with a full-stack app, we can reach out APIs by just
        // using the URL path. Since it's the same domain, we can leave that off.
        $.get("/api/items").done(function(data) {
            dispatch(receiveItems(data));
        });
    };
}

function requestItems() {
    return {
        type: "REQUEST_ITEMS"
    };
}

function receiveItems(items) {
    debugger;
    return {
        type: "RECEIVE_ITEMS",
        items
    };
}