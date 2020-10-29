import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card/index"

interface IEmployee {
  id: string;
  first: string;
  last: string;
  email: string;
  phone: string;
  location: string;
  photo: string;
};

interface IState {
  data: IEmployee[];
  name?: string;
}

class Directory extends Component {
  state: IState = {
    data: []
  };
  componentDidMount() {
    API.getEmployeeData()
      .then(res => {
        console.log(res.data);
        const employeeDetails = res.data.results.map(function (el: any): IEmployee {
          return {
            id: el.id.value,
            first: el.name.first,
            last: el.name.last,
            email: el.email,
            phone: el.phone,
            location: `${el.location.city}, ${el.location.state}`,
            photo: el.picture.thumbnail,
          }
        })
        this.setState({
          data: employeeDetails
        })
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {(this.state.data).forEach((el) => {
          console.log(el.first);
          // <Card photo={el.photo} />

        })}
        {this.state.data.map((el) => (
          <Card key={el.id} photo={el.photo} />
        ))}
        What the hell
      </div>
    );
  }
};

export default Directory;