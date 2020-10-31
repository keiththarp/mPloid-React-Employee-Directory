// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from "react";
import API from "./API";

interface IEmployee {
  id: string;
  first: string;
  last: string;
  email: string;
  phone: string;
  location: string;
  photo: string;
};

export default function EmployeeData() {
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
  return employeeArray;
}