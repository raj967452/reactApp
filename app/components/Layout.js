import React from 'react';
import createReactClass from 'create-react-class';


const Layout = createReactClass({
    render(){
        return(
            <div className="app-container">
                <div className="app-content">{this.props.children}</div>
            </div>
        )
    }
});

export default Layout;