import Card from "../../hoc/card/card"
import css from "./AboutMe.module.css"

const AboutMe = () => {
    return (
        <Card>
            <h2>About Me</h2>
            <div className={css.fakeimg} style={{ height: "100px" }}>Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        </Card>
    )
}
export default AboutMe