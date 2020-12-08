import axios from "axios";
import { Link, Route } from "react-router-dom";
import Post from "../../../components/Post/Post" 
import FullPost from "../FullPost/FullPost";

import "./Posts.css"

const { Component } = require("react");

class Posts extends Component{
    state = {
        posts:[],
        postSelected:false,
        selectedindex:null
    }
    componentDidMount(){
        axios.get("/posts").then(response=>{this.setState({posts:response.data.slice(0,5).map(data=>{return{...data,userId:'victor'}})})})
    }
    postSelectHandler=(id)=>{
        //this.props.history.push('/post/'+id) 
        this.props.history.push({pathname:'/post/'+id})
    }
    render(){
        const allPost = this.state.posts.map(post=>(/*<Link to={'/post/'+post.id} key={post.id}>*/<Post title={post.title} userId={post.userId} click={()=>this.postSelectHandler(post.id)} key={post.id} />/*</Link>*/))
        return(
            <div>
                <section className="Posts">
                    {allPost}
                </section>
                <Route path={this.props.match.url+'/:id'} exact component={FullPost}/>
            </div>
        )
    }
}
export default Posts