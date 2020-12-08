import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts/Posts'

import './Blog.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

    deletePost=(index)=>{
        const tempPosts=this.state.posts
        tempPosts.splice(index,1)
        this.setState({posts:tempPosts,postSelected:false})
        axios.delete("/posts/"+index).then(response=>{console.log(response)})
    }

    sendData=(data)=>{
        axios.post("/posts",data).then(response=>{console.log(response)})
        console.log(data)
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                            <li><NavLink to={{pathname:"/new-post",hash:'lol'}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path='/' exact render={()=><Posts/>}/>*/}
                <Switch>
                    <Route path='/new-post'  component={NewPost}/>
                    <Route path='/post' component={Posts}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;