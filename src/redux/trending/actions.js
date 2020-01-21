import trendingActionTypes from './actionTypes';
import api from '../../http'


function requestDataLoading(loading) {
    return {
        type: trendingActionTypes.REQUEST_DATA_LOADING,
        loading: loading,
    }
}

function requestDataSuccess(data, loading) {
    return {
        type: trendingActionTypes.REQUEST_DATA_SUCCESS,
        data: data,
        loading: loading,
    }
}

function requestDataError(error,loading) {
    return {
        type: trendingActionTypes.REQUEST_DATA_ERROR,
        error:error,
        loading:loading,
    }
}

export function fetchData() {
    return (dispatch) => {
        dispatch(requestDataLoading(true));

        setTimeout(() => {
            api.trending()
                .then(res => res.json())
                .then(({ data }) => {
                    dispatch(requestDataSuccess(data, false));
                })
                .catch((e) => {
                    console.error(e.message);
                    dispatch(requestDataError('Something Wrong! Check yout url adress.', false))
                })
        }, 1000)
    }
}