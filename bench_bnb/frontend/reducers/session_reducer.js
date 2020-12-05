import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from "../actions/session_actions";

const nullSession = {
    id: null,
};

export default (state = nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const nextState = Object.assign({}, state);
            nextState.id = action.user.id;
            return nextState;
        case LOGOUT_CURRENT_USER:
            return nullSession;
        default:
            return state;
    }
};
