import React from 'react'
import {Router, Route} from 'react-router'
import { IndexRoute } from 'react-router'
import { render } from 'react-dom'
import { createHistory } from 'history'
import createBrowserHistory from 'history/lib/createBrowserHistory';

import NavBar from './views/NavBar'
import Carousel from './views/Carousel'
import Marketing from './views/Marketing'
import Featurette from './views/Featurette'

let history = createBrowserHistory();

const Footer = React.createClass({
    render() {
        return (
            <footer>
                <p className="pull-right"><a href="#">Back to top</a></p>
                <p>&copy; 2015 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
            </footer>
        )
    }
})

// Create our App component
const App = React.createClass({

    render() {
        console.log('rendering app');
        return (
            <div style={{"height" : "100%"}}>
                <NavBar />
                <Carousel />
                <div className='container marketing'>
                    <Marketing />
                    <Featurette />
                    {/*this.props.children*/}
                    <Footer />
                </div>
            </div>
        );
    }
})


render((
  <Router history={history}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.getElementById('main'))
