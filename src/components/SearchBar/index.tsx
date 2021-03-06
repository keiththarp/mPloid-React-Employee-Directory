import React from 'react';
import TextField from '@material-ui/core/TextField';
import "./style.css";

export default function SearchBar(props: any) {
  const handleOnSubmit = (event: any) => {
    event.preventDefault();
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleOnSubmit}>
        <TextField onChange={props.handleInputChange} id="outlined-search" label="Search Last Name" type="search" variant="outlined" />
      </form>
    </div>
  )
}
