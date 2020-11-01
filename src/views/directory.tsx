// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Component } from "react";
import API from "../utils/API";
import EmployeeGrid from "../components/EmployeeGrid/index"
import SearchBar from "../components/SearchBar";

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
  employeeArray: IEmployee[];
  currentSearchArray: IEmployee[];
  currentSearchTerm: string;
}

class Directory extends Component {

  state: IState = {
    employeeArray: [],
    currentSearchArray: [],
    currentSearchTerm: "",
  }

  componentDidMount() {
    API.getEmployeeData()
      .then(res => {
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
          employeeArray: employeeDetails,
          currentSearchArray: employeeDetails
        })
      })
      .catch(err => console.log(err));
  };

  // const debounce = useDebounce(currentSearchTerm, 500);

  handleInputChange = (event: any) => {
    const searchTerm: string = event.target.value.toLowerCase();
    this.setState({
      currentSearchArray: this.state.employeeArray.filter((el) => (
        el.last.toLowerCase().includes(searchTerm)
      ))
    })
  }

  render() {
    return (
      <div>
        < SearchBar handleInputChange={this.handleInputChange} />
        < EmployeeGrid rows={this.state.currentSearchArray} />
      </div>
    );
  }

};

export default Directory;