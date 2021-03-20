import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

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

    render() { // render method is required for component
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage} </div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} /> 
        }
        return <div>Loading!</div>
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);