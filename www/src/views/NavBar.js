import React from 'react'
import { IndexLink, Link } from 'react-router'

class NavBar extends React.Component {
    _onMarketingClick() {
        console.log('on marketing click');
        if (location.pathname === '/') {
            $('#marketing')[0].scrollIntoView(true);
        }
    }

    _onFeaturetteClick() {
        console.log('on featurette click');
        if (location.pathname === '/') {
            $('#featurette')[0].scrollIntoView(true);
        }
    }

    render() {
        console.log('rendering navbar');

        return (
            <div className="navbar-wrapper">
              <div className="container">

                <nav className="navbar navbar-inverse navbar-static-top">
                  <div className="container">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <Link to='/' className="navbar-brand">Project Name</Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                      <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><Link to='/' hash='#marketing' onClick={this._onMarketingClick}>Marketing</Link></li>
                        <li><Link to='/' hash='#featurette' onClick={this._onFeaturetteClick}>Featurette</Link></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><Link to='/test'>Test</Link></li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                          <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" className="divider"></li>
                            <li className="dropdown-header">Nav header</li>
                            <li><a href="#">Separated link</a></li>
                            <li><a href="#">One more separated link</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>

              </div>
            </div>
        )
    }
}

export default NavBar
