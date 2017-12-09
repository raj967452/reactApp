'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import PureRenderMixin from 'react-addons-pure-render-mixin';
import autoBind from 'react-autobind';

import samples from '../sample-data';

import InboxPane from './InboxPane';
import StorePane from './StorePane';

class App extends React.Component{
    constructor(props){
        super(props);
        autoBind(this);

        this.state = {
            "humans" : {},
            "stores" : {}
        }
    }
    loadSampleData(){
        this.setState(samples);        
    }
    // user navigate to a /conversation
    componentWillMount(){
        if('human' in this.props.params){
            this.loadSampleData();
        }
    }
    render() {
        return (
            <div>
                <div id="header"></div>
                <button onClick = {this.loadSampleData}>Load Sample Data </button>
                <div className="container">
                    <div className="column">
                        <InboxPane  humans = {this.state.humans} />
                    </div>
                    <div className="column">
                        {this.props.children || 'Select a Conversation from the box'}
                    </div>
                    <div className="column">
                        <StorePane stores={this.state.stores} />
                    </div>
                   
                </div>
            </div>
        )
    }
};

export default App;