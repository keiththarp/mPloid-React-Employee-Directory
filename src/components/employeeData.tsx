import React, { useEffect, useState } from "react";
import API from "../utils/API";

interface IEmployee {
  id: string;
  first: string;
  last: string;
  email: string;
  phone: string;
  location: string;
  photo: string;
};

function EmployeeData() {
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
          photo: `<img src="${el.picture.thumbnail}" alt="" width="50" height="50" />`,
        }
      })
      setEmployeeArray(employeeDetails);
    })
      .catch(err => console.log(err));
  }, []);
  return employeeArray;
}

export default EmployeeData;