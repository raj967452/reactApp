'use strict';

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import autoBind from 'react-autobind';

import Store from './Store';

class StorePane extends React.Component{
    constructor(props){
        super(props);
        autoBind(this);
    }

    renderStore(store){
        return <Store key={store} index={store} details={this.props.stores[store]} />
    }
    render(){
        return (
            <div id="stores-pane" className="column">
                <h1>Stores & Ovens</h1>
                <div>
                    {Object.keys(this.props.stores).map(this.renderStore)}
                </div>
            </div>
        )
    }
}
export default StorePane;