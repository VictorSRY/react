import { Component } from "react";
import oHttp from "../../../aios-o";
import Button from "../../../components/UI/Button/Button";
import css from "./ContactData.module.css"
import Input from '../../../components/UI/Input/Input'
import { connect } from "react-redux";
import { buyBurger } from "../../../store/actions";

class ContactData extends Component{
    state = {
        form:{
            name:{
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    name:'name',
                    placeholder:'Name'
                }
            },
            email:{
                elementType: 'input',
                elementConfig:{
                    type:'email',
                    name:'email',
                    placeholder:'email'
                }
            },
            address:{
                elementType: 'textArea',
                elementConfig:{
                    type:'text',
                    name:'address',
                    placeholder:'address'
                }
            },
            deliveryMethod:{
                elementType: 'select',
                elementConfig:{
                    name:'deliveryType',
                    options:[{value:'fastest',display:'fastest'},{value:'cheapest',display:'cheapest'}],
                }
            },
        }, 
        formData:{
            address: "",
            deliveryType: "fastest",
            email: "",
            name: "",
        }
    }
    CDSubmitHandler=(event)=>{
        event.preventDefault();
        const data={order:{...this.props.ingredients},totalPrice:totalPrice,userData:{...this.state.formData}}
        this.props.buyBurger(data)
    }
    inputValueHandler=(event)=>{
        console.log(event.target.name,event.target.value)
        const formData =this.state.formData
        console.log(formData)
        formData[event.target.name]=event.target.value
        this.setState({formData:formData})
    }
    render(){
        const elementArray=[]
        for(let key in this.state.form){
            const temp =this.state.form[key]
            elementArray.push(<Input elementType={temp.elementType} elementConfig={temp.elementConfig} change={this.inputValueHandler} key={key}/>)
        }
        return(
            <div className={css.ContactData}>
                <h4>enter Data</h4>
                <form>
                    {elementArray}
                    <Button type='Success' click={this.CDSubmitHandler} >submit</Button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        order:state.ingredients,
        price:state.totalPrice,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        buyBurger:(data)=>dispatch(buyBurger(data)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ContactData)