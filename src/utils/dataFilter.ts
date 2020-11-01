// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from "react";
import EmployeeData from "./employeeData";

interface IEmployee {
  id: string;
  first: string;
  last: string;
  email: string;
  phone: string;
  location: string;
  photo: string;
};
let currentResultsArray;

export default function DataFilter(searchTerm: string) {
  const getEmployeeData = EmployeeData().map(function (el: any): IEmployee {
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

  const [searchResultsArray, setSearchResultsArray] = useState(getEmployeeData);

  // setSearchResultsArray(getEmployeeData.filter())
  console.log(searchResultsArray);
  currentResultsArray = searchResultsArray;

};

export const FilteredRows = currentResultsArray;
