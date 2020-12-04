import Auxi from '../../hoc/Auxi'

import css from './Layout.module.css'
const layout = (props) => {
    return (
        <Auxi >
            <header>
                <nav className={css.nav}>toolBar</nav>
            </header>
            <main>
                {props.children}
            </main>
        </Auxi>
    );
};
export default layout;