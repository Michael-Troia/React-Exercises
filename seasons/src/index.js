import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) { // akin to a start() function, constructor() is optional
        super(props); // another required line

        this.state = { lat: null, errorMessage: '' }; // initialized as null because it will have a number value
        
        window.navigator.geolocation.getCurrentPosition( // get user location
            // Success
            (position) => {
                this.setState({ lat: position.coords.latitude }); // updates/re-renders component
            },
            // Error
            (err) => {
                this.setState({ errorMessage: err.message }); // also updates component
            }
        ); 
    }

    // componentDidMount(){}  // called when component is first mounted
    // componentDidUpdate(){} // called whenever a component is updated, after the render method
    // componentWillUnmount(){} // called whenever a component is removed

    render() { // render method is required for component
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage} </div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat} </div>
        }

        return <div>Loading!</div>
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);