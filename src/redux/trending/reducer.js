import trendingActionTypes from './actionTypes';

const initialState = {
    data: [],
    loading: false,
    error: null,
};

export default function trendingReducer(state = initialState, action) {
    switch (action.type) {
        case trendingActionTypes.REQUEST_DATA_LOADING:
            return {
                ...state,
                loading: action.loading,
            };
        case trendingActionTypes.REQUEST_DATA_SUCCESS:
            return {
                ...state,
                loading: action.loading,
                data: action.data,
            };

        case trendingActionTypes.REQUEST_DATA_ERROR:
            return {
                ...state,
                loading: action.loading,
                error: action.error,
            };
        default:
            return state;
    }
};