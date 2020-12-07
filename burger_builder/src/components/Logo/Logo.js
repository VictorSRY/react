import logo from '../../assets/images/burger-logo.png'
import css from './Logo.module.css'


const Logo=(props)=>(<div className={css.Logo} style={{height:props.height}}><img src={logo}/></div>)
export default Logo