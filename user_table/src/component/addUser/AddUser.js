import { useState } from "react";
import {  useHistory } from "react-router";

const AddUser = props => {
    const [formData, updateData] = useState(props.user ? props.user : { name: "", email: "", userId: "" });
    const setData = (event) => {
        const tempData = { ...formData, [event.target.name]: event.target.value };
        updateData(tempData);
    };

    const history=useHistory()
    const goback=()=>{
        console.log("goback");
        history.goBack()
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-6 bg-light" style={{ position: "relative", top: "10vh" }}>
                    <br />
                    <h1 className="text-center"><span className="text-danger">Add</span> User</h1>
                    <hr />
                    <form >
                        <div className="form-"></div>
                        <div className="form-group">
                            <label for="">user name:</label>
                            <input type="text" name="name" className="form-control" value={formData.name} onChange={setData} required />
                        </div>
                        <div className="form-group">
                            <label for="">email:</label>
                            <input type="text" name="email" className="form-control" value={formData.email} onChange={setData} required />
                        </div>
                        <div className="form-group">
                            <label for="">user Id:</label>
                            <input type="text" name="userId" className="form-control" value={formData.userId} onChange={setData} required />
                        </div>
                        <div className="form-group btn-group float-right">
                            <button className="btn btn-success" type="button" onClick={()=>props.userAction(formData,history)} >{props.edit?"update":"add"}</button>
                            <button className="btn btn-danger" type="button" onClick={goback}>Discard</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;