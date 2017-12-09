'use strict';

import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import autoBind from 'react-autobind';

import samples from '../sample-data';

import Message from './Message';


class ConversationsPane extends React.Component{ 
    constructor(props){
        super(props);
        autoBind(this);
    }
    sortByDateDesc(a, b){
        return a.time < b.time ? -1 : a.time > b.time ? 1 :0;
    }
    loadConversationData(human){
        this.setState({conversation: samples.humans[human].conversations});
    }
    // handel when user navigate / to / conversation/:human
    componentWillMount(){
        this.loadConversationData(this.props.params.human);        
    }
    // handel when user navigate / conversation/Rami to conversation/Jeremy  
    componentWillReceiveProps(nextProps){
        this.loadConversationData(nextProps.params.human);
    }
    renderMessage(val){
      return <Message who={val.who} text={val.text} key={val.time.getTime()} />;
    }
    render(){
        return ( 
            <div id="conversation-pane" className="column">
            {this.renderMessage}
                <h1>Conversation</h1>
                <h3>{this.props.params.human}</h3>
                <div id="message">                    
                    {this.state.conversation.sort(this.sortByDateDesc).map(this.renderMessage)}
                </div>
            </div>
        )
    }
};

export default ConversationsPane;