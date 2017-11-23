
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import createReactClass from 'create-react-class';

import samples from './sample-data';

const  App = createReactClass({
    getInitialState: function(){
        return {
            "humans" : {},
            "stores" : {}
        }
    },
    loadSampleData: function(){
        this.setState(samples);
    },
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
});

const  InboxPane = createReactClass({
    renderConvoSum : function(human){
        console.log(human);
        return <InboxItem key={human} index={human} details={this.props.humans[human]} />
    },
    render() {
        return (
            <div id="inbox-pane">
                <h1>Inbox</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Chat Received</th>
                            <th>Name</th>
                            <th>Status</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.props.humans).map(this.renderConvoSum)}                        
                    </tbody>
                </table>
            </div>
        )
    }
});

const  InboxItem = createReactClass({
    sortByDate: function(a, b){
        return a.time>b.time ? -1 : a.time<b.time ? 1 : 0;
    },    
    messageSummary: function(conversations){
        var lastMessage = conversations.sort(this.sortByDate)[0];
        return lastMessage.who + ' said: "' + lastMessage.text + '" @ ' + lastMessage.time.toDateString();
    },
    render: function() {
        debugger;
        return (
            <tr>
                <td><Link to={'/conversation/'+ encodeURIComponent(this.props.index)}>{this.messageSummary(this.props.details.conversations)}</Link></td>
                <td>{this.props.index}</td>
                <td>{this.props.details.orders.sort(this.sortByDate)[0].status} </td>                
            </tr>
        )
    }
});


const  ConversationsPane = createReactClass({
    loadSampleData: function(human){
        this.state({conversation: samples.humans[human].conversations})
    },
    renderMessage: function(val){
      return <Message who={val.who} text={val.text} key={val.time.getTime()} />;
    },
    render: function(){
        return (
            <div id="conversation-pane">
                <h1>Conversation</h1>
                <h3>{this.props.params.human}</h3>
                <div id="message">
                    {this.state.conversations.map(this.renderMessage)}
                </div>
            </div>
        )
    }
});

const  Message = createReactClass({
    render: function(){
        return <p>{this.props.who} said: "{this.props.text}"</p>
    }
});


const  StorePane =createReactClass({
    renderStore: function(store){
        return <Store key={store} index={store} details={this.props.stores[store]} />
    },
    render: function(){
        return (
            <div id="stores-pane">
                <h1>Stores & Ovens</h1>
                <ul>
                    {Object.keys(this.props.stores).map(this.renderStore)}
                </ul>
            </div>
        )
    }
});

const  Store = createReactClass({
    getCount: function(status){
        return this.props.details.orders.filter(function(n){
            return n.status === status
        }).length;
    },
    render: function(){
        return(
            <li>
                <p>{this.props.index}</p>
                <p>Order Confirmed: {this.getCount('Confirmed')}</p>
                <p>Order In The Oven: {this.getCount('In The Oven')}</p>
                <p>Order Delivered: {this.getCount('Delivered')}</p>
            </li>
        )
    }
});

module.exoprts = App;