import React, { Component } from "react";
import { connect } from "react-redux";
import UserItem from "./UserItem";

class Users extends Component {
  renderTable = () => {
    let { keyword, userList } = this.props;
    if (keyword !== "") {
      userList = userList.filter((item) => {
        return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
    }
    return userList.map((item) => {
      return <UserItem key={item.id} user={item} />;
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.userReducer.userList,
    keyword: state.userReducer.keyword,
  };
};

export default connect(mapStateToProps)(Users);
