import axios from 'axios';
import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    state={post:null}
    
    componentDidMount(){
        console.log(this.props.match.url+'/:id')
        this.loadData()
    }
    componentDidUpdate(){
        this.loadData()
    }
    loadData=()=>{
        if(this.props.match.params['id']){
            if( !this.state.post || (this.state.post && this.state.post.id !=(this.props.match.params['id']))){
                axios.get("/posts/"+(this.props.match.params['id'])).then(response=>{ this.setState({post:response.data}); console.log(response.data)}).catch(error=>{console.log(error)})
            }
        }

    }
    render() {
        let post = <p>Please select a Post!</p>;
        post = (
            <div className="FullPost">
                <h1>{this.state.post ? this.state.post.title : 'select a Post'}</h1>
                <p>{this.state.post ? this.state.post.body : 'post contant'}</p>
                {this.state.post ?
                    <div className="Edit">
                        <button className="Delete" onClick={this.delete}>Delete</button>
                    </div> : null
                }
            </div>
        );
        return post;
    }
}

export default FullPost;