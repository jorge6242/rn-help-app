import {  ACTIONS } from '../actions/genderActions';

const initial = {
    list: [],
    loading: true
};

const genderReducer = (state = initial , action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL:
            return {
                ...state,
                list: action.payload,
            };
            case ACTIONS.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};

export default genderReducer;