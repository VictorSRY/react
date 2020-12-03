import { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Auxi from '../../hoc/Auxi';

class BurgerBulder extends Component{
    state={
        ingredients:{
            salad:1,
            bacon:2,
            cheese:2,
            meat:1,
        }
    }
    render(){
        return (
            <Auxi>
                <Burger ingredients={this.state.ingredients}/>
                <div>Builder Tool</div>
            </Auxi>
        );
    };
}

export default BurgerBulder;