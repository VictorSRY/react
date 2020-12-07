import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts:[],
        postSelected:false,
        selectedindex:null
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{this.setState({posts:response.data.slice(0,5).map(data=>{return{...data,userId:'victor'}})})})
    }
    deletePost=(index)=>{
        const tempPosts=this.state.posts
        tempPosts.splice(index,1)
        this.setState({posts:tempPosts,postSelected:false})
        axios.delete("https://jsonplaceholder.typicode.com/posts/"+index).then(response=>{console.log(response)})
    }
    postSelectHandler=(index)=>{
        this.setState({postSelected:true,selectedindex:index})
    }
    sendData=(data)=>{
        axios.post("https://jsonplaceholder.typicode.com/posts",data).then(response=>{console.log(response)})
        console.log(data)
    }
    render () {
        const allPost = this.state.posts.map(post=><Post title={post.title} userId={post.userId} click={()=>this.postSelectHandler(post.id-1)} key={post.id}/>)
        return (
            <div>
                <section className="Posts">
                    {allPost}
                </section>
                <section>
                    {this.state.postSelected?<FullPost post={this.state.posts[this.state.selectedindex]} delete={()=>this.deletePost(this.state.selectedindex)}/>:<FullPost/>}
                </section>
                <section>
                    <NewPost click={this.sendData}/>
                </section>
            </div>
        );
    }
}

export default Blog;