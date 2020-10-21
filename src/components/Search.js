import React, { Component } from "react";
import { connect } from "react-redux";
import { actSearchUser } from "../modules/actions";

class Search extends Component {
  handleOnchangeSearch = (e) => {
    this.props.handleSearch(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={this.handleOnchangeSearch}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (keyword) => {
      dispatch(actSearchUser(keyword));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
