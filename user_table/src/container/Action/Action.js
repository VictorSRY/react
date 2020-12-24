import React from "react"
import { connect } from "react-redux"
import AddUser from "../../component/addUser/AddUser"
import { addUser, signOut, updateUser } from "../../store/action"

const Action = props => {
    console.log(props.user[props.editIndex], props.editIndex, (props.editIndex != null ? "update" : "add"));
    return (
        <React.Fragment>
            <div className="row d-flex text-right"><button type="button" className="btn btn-secondary text-danger" onClick={props.signOut}>SignOut</button></div>
            <AddUser user={props.user[props.editIndex]} userAction={props.editIndex != null ? props.updateUser : props.addUser} edit={props.editIndex != null ? true : false}></AddUser>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        user: state.users.users,
        editIndex: state.users.editIndex,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addUser: (user, history) => dispatch(addUser(user, history)),
        updateUser: (user, history) => dispatch(updateUser(user, history)),
        signOut:()=>dispatch(signOut()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Action) 