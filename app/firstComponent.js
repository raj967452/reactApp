import React from 'react';
import ReactDOM, { render } from 'react-dom';
var createReactClass = require('create-react-class');

const CommentBox = createReactClass({
    /*
        Component Lifecycle

        First Render----------------
        1: getDefaultProps
        2: getInitialState
        3: componentWillMount
        4: Render
        5: componentDidMount

        Props Change-----
        1: componentWillReceiveProps
        2: shouldComponentUpdate
        3: componentWillUpdate
        4: render
        5: componentDidUpdate

        State Change--------
        1: shouldComponentUpdate
        2: componentWillUpdate
        3: render
        4: componentDidUpdate


        Unmount-----------
        1: componentWillUnmount
    
    */
    getInitialState: function (){
        return {
           /* data : {
                husband: "Khemraj Saini", 
                wife: "Poonam", 
                daughter: "Pihu", 
                son: "Ganu"
            }*/
            videoId: '',
            startTimeVideo: ''
        }
    },
    handelClick: function(){
        //this.setState({this.state.data.wife: 'Sunita'})
        var video  = $('#videoID').val();
        var startTimeV = $('#videoStartTime').val();

        this.setState({
            videoId: video,
            startTimeVideo: startTimeV
        })
        console.log(this);
    },
    render() {
        return(
           <div className="commentBox">
                <h1 style={{fontSize: '15px'}}>Hello!! I am Khemu</h1>
                
                <div>
                    <h2>Please Enter the Video Id to Play Video:--</h2>
                    
                    <p>
                        <input type="text" id="videoID" />                         
                    </p>
                   
                    <h2>Please Enter the Video start time:--</h2>
                    
                    <p>
                        <input type="text" id="videoStartTime" /> 
                        
                    </p>
                    <button onClick={this.handelClick}>Please Enter video Id and Start Time....</button>

                </div>
                {this.state.videoId ? <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + this.state.videoId + '?t=' + this.state.startTimeVideo   } frameBorder="0" allowFullScreen></iframe> : ''}

                {this.state.startTimeVideo ? <a href={'https://youtu.be/' + this.state.videoId + "?" + this.state.startTimeVideo}>Click here</a> : ''}
            </div>
        );
    }
});

ReactDOM.render(<CommentBox />, document.body);

//module.exports = CommentBox;