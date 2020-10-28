import React, { Component } from "react";
import API from "../utils/API";

class Directory extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    API.getEmployeeData()
      .then(res =>
        this.setState({
          data: res.data
        })
      )
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        {JSON.stringify(this.state.data)}
      </div>
    );
  }
};

export default Directory;