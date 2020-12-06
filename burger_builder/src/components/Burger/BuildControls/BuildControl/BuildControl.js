import css from './BuildControl.module.css'
const BuildControl = (props)=>{
    return (
        <div className={css.BuildControl}>
            <div className={css.Label}>{ props.label }</div>
            <button className={css.Less} onClick={()=>props.removeClick(props.type)}>remove</button>
            <button className={css.More} onClick={()=>props.addClick(props.type)}>add</button>
        </div>
    )
}

export default BuildControl