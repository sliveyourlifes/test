import React, { useCallback } from 'react';
import Input from '../../components/Input'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { fetchSearchData } from '../../redux/search/actions'

import Card from '../../components/Card'


const SearchPage = () => {

    const { data, loading, error } = useSelector(state => state.searchPage, shallowEqual);
    const dispatch = useDispatch();

    // const submitHandler = (value) => {
    //     console.log(value);
    //     dispatch(fetchSearchData(value))
    // }

    const submitHandler = useCallback(
        (value) => dispatch(fetchSearchData(value))
        , [dispatch]);

    let renderingTemplate;

    if (loading) {
        renderingTemplate = <div>loading ...</div>
    }

    else if (error) {
        renderingTemplate = <div>{error}</div>
    }

    else if (data) {
        renderingTemplate = <ul className='row wrap'>
            {data.map((item) =>
                <Card key={item.id} item={item} />
            )}
        </ul>
    }

    return (
        <div>
            Search Page
            <Input submitHandler={submitHandler} />
            {renderingTemplate}
        </div>
    )
}

export default SearchPage;