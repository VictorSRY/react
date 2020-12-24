import Card from "../../hoc/card/card"
import css from "./AboutMe.module.css"

const AboutMe = () => {
    return (
        <Card>
            <h2>About Me</h2>
            <img src="https://i.pinimg.com/originals/8e/21/29/8e2129f44804db65316ed3db92cf8552.jpg" className={css.fakeimg} style={{ maxWidth: "100p%" }}/>
            <p>Robert John Downey Jr. (born April 4, 1965) is an American actor and producer. His career has been characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles, before a resurgence of commercial success in middle age. In 2008, Downey was named by Time magazine among the 100 most influential people in the world, and from 2013 to 2015, he was listed by Forbes as Hollywood's highest-paid actor. His films have grossed over $14.4 billion worldwide, making Downey the sixth-highest-grossing box office star of all-time.</p>
        </Card>
    )
}
export default AboutMe