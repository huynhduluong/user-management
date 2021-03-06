import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteUser, actEditUser } from "../modules/actions";

class UserItem extends Component {
  render() {
    const { user, handleDelete, handleEdit } = this.props;
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              handleEdit(user);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              handleDelete(user);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (user) => {
      dispatch(actDeleteUser(user));
    },
    handleEdit: (user) => {
      dispatch(actEditUser(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(UserItem);
