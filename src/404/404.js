import React, { Component } from 'react';
import './404.less';
class ErrorPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="Error-container">
                <div>这是404页面</div>
            </div>
        );
    }
}

export default ErrorPage;