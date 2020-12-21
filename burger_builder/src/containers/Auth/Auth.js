import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { defaultFirebase } from "../../firbase/config";
import { signIn } from "../../store/actions";
import css from "./Auth.module.css"

class Auth extends Component{
    state={
        form:{
            userId:{
                elementType: 'input',
                elementConfig:{type:'text',name:'userId',placeholder:'userId'}
            },
            password:{
                elementType: 'input',
                elementConfig:{type:'password',name:'password',placeholder:'password',}
            },
        },
        formData:{userId:"",password:"",},
    }
    inputValueHandler=(event)=>{
        console.log(event.target.value)
        const formData={...this.state.formData};formData[event.target.name] = event.target.value;
        this.setState({formData:formData});
    }
    submitHandler=()=>{
        console.log(this.state.formData);
        /*defaultFirebase.auth().signInWithEmailAndPassword(this.state.formData.email,this.state.formData.password)
        .then(response=>{
            console.log(response);
            console.log(defaultFirebase.database().ref().once('value').then(snapshot=>{console.log(snapshot.val())}))
        })
        .catch(error=>{console.log(error);})*/
        const data={
            email:this.state.formData.userId,
            password:this.state.formData.password,
        }
        this.props.signIn(data)
    }
    render(){
        const form=[]
        for(let key in this.state.form){
            const temp =this.state.form[key]
            form.push(<Input elementType={temp.elementType} elementConfig={temp.elementConfig} change={this.inputValueHandler} key={key}/>)
        }
        console.log(this.props.loggedIn)
        return (
            <div className={css.Auth}>
                {this.props.loggedIn?<Redirect to="/"/>:null}
                <form>
                    <h1>logIn</h1>
                    {form}
                    <Button type="Success" click={this.submitHandler} btnType="button">logIn</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        loggedIn:state.auth.authenticated,
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        signIn:(data)=>dispatch(signIn(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth)