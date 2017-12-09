'use strict';

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import autoBind from 'react-autobind';


class Store extends React.Component{
    constructor(props){
        super(props);
        autoBind(this);

        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    getCount(status){
        return this.props.details.orders.filter(function(n){
            return n.status === status
        }).length;
    }
    render(){
        return(
            <div className="store">
                <div className="name">{this.props.index}</div>
                <div className="orders">                                
                    <p><img src={require('../assets/order-confirmed.png')}/> {this.getCount('Confirmed')}</p>
                    <p><img src={require('../assets/order-oven.png')} /> {this.getCount('In The Oven')}</p>
                    <p><img src={require('../assets/order-delivered.png')} /> {this.getCount('Delivered')}</p>
                </div>
            </div>            
        )
    }
}

export default Store;