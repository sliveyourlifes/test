import React, { useEffect } from 'react';
import { connect, useSelector, shallowEqual, useDispatch } from 'react-redux';
import { requestDataLoading, fetchData } from '../../redux/trending/actions';
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
        dispatch(fetchData());
    }, [])

    if (loading) {
        return <div>loading ...</div>
    }

    if (error) {
        return <div>{error}</div>
    }


    return (
        <>
            <ul>
                {data.map((item) =>
                    <li key={item.id}>
                        {item.title}
                    </li>
                )}
            </ul>
        </>


    )
}

export default TrendingPage;