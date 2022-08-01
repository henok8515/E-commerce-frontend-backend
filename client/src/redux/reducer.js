import * as actions from './actionTypes';
// let lastId = 0;
export const reducer = (state = 0, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            return state + 1;
        case actions.DECREMENT:
            return state - 1;
        default:
            return state;
    }
};
