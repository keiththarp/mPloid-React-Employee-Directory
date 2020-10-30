import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import EmployeeData from '../employeeData';
import useDebounce from '../../utils/useDebounce'

interface IEmployee {
  id: string;
  first: string;
  last: string;
  email: string;
  phone: string;
  location: string;
  photo: string;
};

let currentSearchTerm: string;
export default function SearchBar() {

  const [currentSearchArray, setCurrentSearchArray] = useState();
  const [currentSearchTerm, setCurrentSearchTerm] = useState();

  const debounce = useDebounce(currentSearchTerm, 500);

  const handleInputChange = (event: any) => {
    setCurrentSearchTerm(event.target.value);
  }

  const getEmployeeData = EmployeeData().map(function (el: IEmployee) {
    return {
      id: el.id,
      first: el.first,
      last: el.last,
      email: el.email,
      phone: el.phone,
      location: el.location,
      photo: el.photo,
    }
  });


  return (
    <div>
      <form>
        <TextField onChange={handleInputChange} id="outlined-search" label="Search" type="search" variant="outlined" />
      </form>
    </div>
  )
}
