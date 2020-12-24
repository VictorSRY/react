import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import defaultFire from "../../firebase/firebase_config";
import { deleteUser, resetIndex, setIndex, signOut } from "../../store/action";

const Home = (props) => {
    const history = useHistory();
    props.resetIndex();
    console.log(defaultFire.auth().currentUser);
    const tbody = props.users.map((user, index) => {
        return (<tr className="d-flex align-items-center">
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.userId}</td>
            <td>
                <div className="btn btn-group" style={{ padding: "0" }}>
                    <button className="btn btn-primary p-0 pl-1 pr-1" style={{ padding: "0", paddingRight: ".5em", paddingLeft: ".5em" }} onClick={() => props.setIndex(index, history)} >Edit</button>
                    <button className="btn btn-danger p-0 pl-1 pr-1" style={{ padding: "0", paddingRight: ".5em", paddingLeft: ".5em" }} onClick={() => props.removeUser(index)} >Delete</button>
                </div>
            </td>
        </tr>)
    });
    const goback = (path) => {
        history.push(path)
    }
    return (
        <React.Fragment>
            <div className="container">
            <div className="row d-flex text-right"><button type="button" className="btn btn-secondary text-danger" onClick={props.signOut}>SignOut</button></div>
                <div className="row d-flex justify-content-center text-center"><h1>User<span className="text-danger">-</span>Data</h1></div>
                <div className="row d-flex text-right"><button type="button" className="btn btn-success" onClick={() => goback("/add")}>add</button></div>
                <table className="table table-striped">
                    <thead className="thead-light">
                        <tr>
                            <th>#</th>
                            <th>User name</th>
                            <th>Email</th>
                            <th>User Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tbody}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};
const mapStateToProps = state => {
    return {
        users: state.users.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        resetIndex: () => dispatch(resetIndex()),
        setIndex: (index, history) => dispatch(setIndex(index, history)),
        removeUser: (index) => dispatch(deleteUser(index)),
        signOut:()=>dispatch(signOut()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);