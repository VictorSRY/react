import css from './Modal.module.css'
const Modal= (props)=>(
    <div className={css.Modal}>
        { props.children }
    </div>
)
export default Modal