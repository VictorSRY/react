import React from 'react'
import { Component } from 'react'
import PropType from 'prop-types'

import css from './BurgerIngredients.module.css'

class BurgerIngredients extends Component {
    render() {
        let ingredients = null
        switch (this.props.type) {
            case ('bread-bottom'): ingredients = <div className={css.BreadBottom}></div>;
                break;
            case ('bread-top'): ingredients = (
                <div className={css.BreadTop}>
                    <div className={css.Seeds1}></div>
                    <div className={css.Seeds2}></div>
                </div>
            );
                break;
            case ('meat'): ingredients = <div className={css.Meat}></div>;
                break;
            case ('cheese'): ingredients = <div className={css.Cheese}></div>
                break;
            case ('salad'): ingredients = <div className={css.Salad}></div>
                break;
            case ('bacon'): ingredients = <div className={css.Bacon}></div>
                break;
            default: ingredients = null
                break;
        }
        return ingredients
    }

};

BurgerIngredients.propTypes = {
    type: PropType.string.isRequired
}

export default BurgerIngredients