import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card/index"

interface Employee {
  id: string,
  first: string,
  last: string,
  email: string,
  phone: string,
  location: string,
  photo: string,
};


// interface Props {
//   employee: Employee,
// }

class Directory extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    API.getEmployeeData()
      .then(res => {
        console.log(res.data);
        const employeeDetails = res.data.results.map(function (el: any): Employee {
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
        {this.state.data.forEach((el: any) => {
          console.log(el.first);
          // <Card photo={el.photo} />

        })}
        <Card photo={this.state.data.forEach((el: any) => {
          return el.photo;
        })} />
        What the hell
      </div>
    );
  }
};

export default Directory;