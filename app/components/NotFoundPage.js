import React from 'react';
import { Link } from 'react-router';

const createReactClass = require('create-react-class');


const NotFoundPage = createReactClass({
    render() {
        return (
            <div className="not-found">
                <h1>404</h1>
                <h2>Page not found!</h2>
                <Link to="/">Go back to the main page</Link>
            </div>
        )
    }
})


export default NotFoundPage;

