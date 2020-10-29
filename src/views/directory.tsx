import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/EmployeeGrid/index"


// interface IEmployee {
//   id: string;
//   first: string;
//   last: string;
//   email: string;
//   phone: string;
//   location: string;
//   photo: string;
// };

// //We're typing state as an object with a key of data having a typed value of IEmployee
// interface IState {
//   data: IEmployee[];
// }

// //Setting up our state and giving it the type of IState
// class Directory extends Component {
//   state: IState = {
//     data: []
//   };
//   componentDidMount() {
//     API.getEmployeeData()
//       .then(res => {
//         console.log(res.data);
//         const employeeDetails = res.data.results.map(function (el: any): IEmployee {
//           return {
//             id: el.id.value,
//             first: el.name.first,
//             last: el.name.last,
//             email: el.email,
//             phone: el.phone,
//             location: `${el.location.city}, ${el.location.state}`,
//             photo: el.picture.thumbnail,
//           }
//         })
//         this.setState({
//           data: employeeDetails
//         })
//       })
//       .catch(err => console.log(err));
//   };
export default function Directory() {

  return (
    <div>
      {/* using parenthesis after => rather than curly bracket creates implicit return*/}
      {/* {this.state.data.map((el) => (
          <Card key={el.id} employee={el} />
        ))} */}
      < Card />
    </div>
  );

};
