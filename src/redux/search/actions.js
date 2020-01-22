import searchActionTypes from './actionTypes';
import api from '../../http'


function requestDataLoading(loading) {
    return {
        type: searchActionTypes.REQUEST_DATA_LOADING,
        loading: loading,
    }
}

function requestDataSuccess(data, loading) {
    return {
        type: searchActionTypes.REQUEST_DATA_SUCCESS,
        data: data,
        loading: loading,
    }
}

function requestDataError(error,loading) {
    return {
        type: searchActionTypes.REQUEST_DATA_ERROR,
        error:error,
        loading:loading,
    }
}

export function fetchSearchData(value) {
    return (dispatch) => {
        dispatch(requestDataLoading(true));

        setTimeout(() => {
            api.search(value)
                .then(res => res.json())
                .then(({ data }) => {
                    console.log(data)
                    dispatch(requestDataSuccess(data, false));
                })
                .catch((e) => {
                    console.error(e.message);
                    dispatch(requestDataError('Something Wrong! Check yout url adress.', false))
                })
        }, 3000)
    }
}