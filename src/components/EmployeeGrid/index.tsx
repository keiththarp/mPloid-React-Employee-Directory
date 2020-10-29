import React, { useEffect, useState } from "react";
import "./style.css";
import { DataGrid, ColDef } from '@material-ui/data-grid';
import API from "../../utils/API";

interface IEmployee {
  id: string;
  first: string;
  last: string;
  email: string;
  phone: string;
  location: string;
  photo: string;
};

//We're typing state as an object with a key of data having a typed value of IEmployee
// interface IEmployeeArray {
//   [index: string]: IEmployee;
// }

function EmployeeGrid() {
  const [employeeArray, setEmployeeArray] = useState([]);
  useEffect(() => {
    API.getEmployeeData().then(res => {
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
      setEmployeeArray(employeeDetails);
    })
      .catch(err => console.log(err));
  }, []);


  const columns: ColDef[] = [
    { field: 'photo', width: 125, sortable: false, },
    { field: 'id', headerName: 'ID', width: 125 },
    { field: 'first', headerName: 'First name', width: 130 },
    { field: 'last', headerName: 'Last name', width: 130 },
    { field: 'email', headerName: 'Email', type: 'string', width: 250, },
    { field: 'phone', headerName: 'Phone', type: 'string', width: 150, },
    { field: 'location', headerName: 'Location', width: 160, },
  ];


  const rows = employeeArray;


  // const rows = [{
  //   photo: photo,
  //   id: id,
  //   first: first,
  //   last: last,
  //   email: email,
  //   phone: phone,
  //   location: location,
  // }]
  return (
    <div style={{ height: 1000, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={50} />
    </div>
  );

}
// class Directory extends Component {
//   state: IState = {
//     data: []
//   };
// }

// function Card(props: any) {
//   return (
//     <div className="employee-card">
//       <img alt="" src={`${props.employee.photo}`} />
//     </div>
//   );
// }

export default EmployeeGrid;
