import css from "./card.module.css"
const card =(props)=>{
    return <div className={css.card}>{props.children}</div>
}
export default card