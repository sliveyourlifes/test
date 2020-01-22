import searchActionTypes from './actionTypes'

const initialState = {
    data:[],
    loading:false,
    error: null,
}

export default function searchReducer(state=initialState, action) {
    switch (action.type) {
        case searchActionTypes.REQUEST_DATA_LOADING:
            return {
                ...state,
                loading: action.loading,
            };
        case searchActionTypes.REQUEST_DATA_SUCCESS:
            return {
                ...state,
                loading: action.loading,
                data: action.data,
            };

        case searchActionTypes.REQUEST_DATA_ERROR:
            return {
                ...state,
                loading: action.loading,
                error: action.error,
            };
        default:
            return state;
    }
}

