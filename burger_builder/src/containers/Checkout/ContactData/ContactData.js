import { Component } from "react";
import oHttp from "../../../aios-o";
import Button from "../../../components/UI/Button/Button";
import css from "./ContactData.module.css"
import Input from '../../../components/UI/Input/Input'

export default class ContactData extends Component{
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
        oHttp.post('/orders.json', {...this.state.formData,ingredients:this.props.order}).then(response => { console.log(response); this.props.history.replace('/') }).catch(error => { console.log(error); })
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
                    <Button type='Success' click={this.CDSubmitHandler}>submit</Button>
                </form>
            </div>
        )
    }
}