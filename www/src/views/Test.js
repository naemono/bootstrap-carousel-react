import React from 'react'
import NavBar from './NavBar'


class TestSection extends React.Component {
    render() {
        return (
            <div className="test-headline-bg-text">
                <div className="headline-bg test-headline-bg">
                </div>
                <section className="section">
                    <div className="container">
                        <h2 className="title text-center">
                            Check out
                            <span className="highlight">
                                This
                            </span>
                            Page
                        </h2>
                    </div>
                </section>
            </div>

        )
    }
}

class TestFooter extends React.Component {
    render() {
        return (
            <div className="test-footer">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-4">
                            <div className="footer-header">
                                About
                            </div>
                            <div className="footer-items">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-caret-right">
                                            </i>
                                            Who we are
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-caret-right">
                                            </i>
                                            What we do
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 footer-header">
                            Product
                        </div>
                        <div className="col-md-4 footer-header">
                            Social
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


class Test extends React.Component {
    render() {
        return (
            <div style={{"height": "inherit"}}>
                <div className="test-main" style={{"paddingTop": 100, "height": "inherit"}}>
                    <NavBar mainPage='false'/>
                    <TestSection />
                </div>
                <TestFooter />
            </div>
        )
    }
}

export default Test
