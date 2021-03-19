import logo from './logo.svg';
import React from 'react';
import './App.css';
import Plot from 'react-plotly.js';
import Data from './dep/data.json'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: Data.data, layout: Data.layout, frames: [], config: {}};
    }

    render() {
        return (

            <Plot
                data={this.state.data}
                layout={this.state.layout}
                frames={this.state.frames}
                config={this.state.config}
                onInitialized={(figure) => this.setState(figure)}
                onUpdate={(figure) => this.setState(figure)}
            />
        );
    }
}

export default App;
