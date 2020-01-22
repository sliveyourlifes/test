import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchTrendingData } from '../../redux/trending/actions';

import Card from '../../components/Card'
// class TrendingPage extends React.Component {
//     render() {
//         console.log(this.props.trending);
//         return <h1>Trending Page</h1>;
//     }
// }

// function mapStateToProps(state) {
//     return {
//         trending: state.trendingPage
//     };
// }

// export default connect(mapStateToProps)(TrendingPage)

const TrendingPage = () => {
    const { data, loading, error } = useSelector(state => state.trendingPage, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTrendingData());
    }, [dispatch])

    if (loading) {
        return <div>loading ...</div>
    }

    if (error) {
        return <div>{error}</div>
    }


    return (
        <>
            <ul className='row wrap'>
                {data.map((item) =>
                    <Card key={item.id} item={item}/>
                )}
            </ul>
        </>
    )
}

export default TrendingPage;