import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
// import useDebounce from '../../utils/useDebounce'

export default function SearchBar(props: any) {

  return (
    <div>
      <form>
        <TextField onChange={props.handleInputChange} id="outlined-search" label="Search Last Name" type="search" variant="outlined" />
      </form>
    </div>
  )
}
