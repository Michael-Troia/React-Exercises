import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

    // componentDidMount(){}  // called when component is first mounted
    // componentDidUpdate(){} // called whenever a component is updated, after the render method
    // componentWillUnmount(){} // called whenever a component is removed

class App extends React.Component {
    state = { lat: null, errorMessage: '' };
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition( // get user location
            // Success
            (position) => this.setState({ lat: position.coords.latitude }),
            // Error
            (err) => this.setState({ errorMessage: err.message })
        ); 
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage} </div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} /> 
        }
        return <Spinner message="Please accept location request" />; // reference to loading component
    }

    render() { // try to keep returns to a minimum in render method
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);