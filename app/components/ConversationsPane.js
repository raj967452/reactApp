import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import createReactClass from 'create-react-class';
import samples from '../sample-data';


const  ConversationsPane = createReactClass({ 
    loadConversationData: function(human){
        this.setState({conversation: samples.humans[human].conversations});
    },
    // handel when user navigate / to / conversation/:human
    componentWillMount: function(){
        this.loadConversationData(this.props.params.human);        
    },
    // handel when user navigate / conversation/Rami to conversation/Jeremy  
    componentWillReceiveProps: function(nextProps){
        this.loadConversationData(nextProps.params.human);
    },
    renderMessage: function(val){
      return <Message who={val.who} text={val.text} key={val.time.getTime()} />;
    },
    render: function(){
        return ( 
            <div id="conversation-pane">
            {this.renderMessage}
                <h1>Conversation</h1>
                <h3>{this.props.params.human}</h3>
                <div id="message">                    
                    {this.state.conversation.map(this.renderMessage)}
                </div>
            </div>
        )
    }
});

const  Message = createReactClass({
    mixins: [PureRenderMixin],
    render: function(){
        return <p>{this.props.who} said: "{this.props.text}"</p>
    }
});


export default ConversationsPane;