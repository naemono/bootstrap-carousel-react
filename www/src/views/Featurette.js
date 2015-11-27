import React from 'react'

class Featurette extends React.Component {
    render() {
        return (
            <div id='featurette'>

              <hr className="featurette-divider"></hr>

              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading">First featurette heading. <span className="text-muted">Itll blow your mind.</span></h2>
                  <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5">
                  <img className="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="Generic placeholder image"></img>
                </div>
              </div>

              <hr className="featurette-divider"></hr>

              <div className="row featurette">
                <div className="col-md-7 col-md-push-5">
                  <h2 className="featurette-heading">Oh yeah, its that good. <span className="text-muted">See for yourself.</span></h2>
                  <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5 col-md-pull-7">
                  <img className="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="Generic placeholder image"></img>
                </div>
              </div>

              <hr className="featurette-divider"></hr>

              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                  <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5">
                  <img className="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="Generic placeholder image"></img>
                </div>
              </div>

              <hr className="featurette-divider"></hr>
            </div>
        )
    }
}

export default Featurette
