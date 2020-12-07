import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    render() {
        let post = <p>Please select a Post!</p>;
        post = (
            <div className="FullPost">
                <h1>{this.props.post ? this.props.post.title : 'select a Post'}</h1>
                <p>{this.props.post ? this.props.post.body : 'post contant'}</p>
                {this.props.post ?
                    <div className="Edit">
                        <button className="Delete" onClick={this.props.delete}>Delete</button>
                    </div> : null
                }
            </div>

        );
        return post;
    }
}

export default FullPost;