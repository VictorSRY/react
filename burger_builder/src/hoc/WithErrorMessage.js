import { render } from "@testing-library/react";
import { Component } from "react";
import Modal from "../components/UI/Modal/Modal";
import Auxi from "./Auxi"

const WithErrorMessage = (WrappedComponent,axios)=>{
    return class extends Component{
        state={
            errorMessage:null,
        }
        componentDidMount(){
            this.reqInterceptor=axios.interceptors.request.use(req=>{this.setState({errorMessage:null});return req;});
            this.resInterceptor=axios.interceptors.response.use(res=>res,error=>{console.log('error');this.setState({errorMessage:error.message})});
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }
        resetError=()=>{
            this.setState({errorMessage:null})
        }
        render(){
            return(
                <Auxi>
                    <Modal show={this.state.errorMessage} hide={this.resetError}>{this.state.errorMessage}</Modal>
                    <WrappedComponent {...this.props} />
                </Auxi>
            );
        }
    }
}
export default WithErrorMessage