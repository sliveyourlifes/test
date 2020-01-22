import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Nav from '../components/Nav';

const TrendingPage = lazy(() => import('../pages/trending'));
const SearchPage = lazy(() => import('../pages/search'));

const AppRouter = () => {
    return (
        <Router>
            <div className='container'>
                <Nav />
                <Suspense fallback={<div>Loading ...</div>}>
                    <Switch>
                        <Route path='/' exact component={TrendingPage} />
                        <Route path='/search' component={SearchPage} />
                    </Switch>
                </Suspense>
            </div>
        </Router>
    )
}

export default AppRouter;

