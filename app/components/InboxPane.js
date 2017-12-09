'use strict';

import React from 'react';
import autoBind from 'react-autobind';

import InboxItem from './InboxItem';

class InboxPane extends React.Component{
    constructor(props){
        super(props);
        autoBind(this);
    }
    renderConvoSum(human){
        return <InboxItem key={human} index={human} details={this.props.humans[human]} />
    }
    render() {
        return (
            <div id="inbox-pane" className="column">
                <h1>Inbox</h1>
                {Object.keys(this.props.humans).map(this.renderConvoSum)}
            </div>
        )
    }
};

export default InboxPane;