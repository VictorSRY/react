import card from "../../hoc/card/card"
import css from "./Post.module.css"
const Post =()=>{
    return(
        <card>
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div className={css.fakeimg} style={{ height: "200px" }}>Image</div>
            <p>Some text..</p>
        </card>
    )
}
export default Post