import React from "react"
import AboutMe from "../../component/AboutMe/AboutMe"
import Post from "../../component/Post/Post"
import css from "./BlogPage.module.css"
const BlogPage = () => {
    return (
        <React.Fragment>
            {/*<div className={css.header}>
                <h2>Blog Name</h2>
            </div>*/}
            <div className={css.row}>
                <div className={css.leftcolumn}>
                    <Post></Post>
                </div>
                <div className={css.rightcolumn}>
                    <AboutMe></AboutMe>
                    <div className={css.card}>
                        <h3>Popular Post</h3>
                        <div className={css.fakeimg}>Image</div><br />
                        <div className={css.fakeimg}>Image</div><br />
                        <div className={css.fakeimg}>Image</div>
                    </div>
                    <div className={css.card}>
                        <h3>Follow Me</h3>
                        <p>Some text..</p>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default BlogPage