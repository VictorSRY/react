import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts/Posts'

import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    deletePost=(index)=>{
        const tempPosts=this.state.posts
        tempPosts.splice(index,1)
        this.setState({posts:tempPosts,postSelected:false})
        axios.delete("/posts/"+index).then(response=>{console.log(response)})
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/post" exact activeClassName="active">posts</NavLink></li>
                            <li><NavLink to={{pathname:"/new-post",hash:'lol'}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path='/' exact render={()=><Posts/>}/>*/}
                <Switch>
                    <Route path='/new-post'  component={NewPost}/>
                    <Route path='/post' component={Posts}/>
                </Switch>
                <Redirect path='/' to='/post' />
            </div>
        );
    }
}

export default Blog;