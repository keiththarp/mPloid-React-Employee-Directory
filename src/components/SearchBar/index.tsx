import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
// import useDebounce from '../../utils/useDebounce'
import DataFilter from '../../utils/dataFilter'

export default function SearchBar() {

  const [currentSearchTerm, setCurrentSearchTerm] = useState();

  // const debounce = useDebounce(currentSearchTerm, 500);

  const handleInputChange = (event: any) => {
    setCurrentSearchTerm(event.target.value);
    DataFilter(event.target.value)
  }

  return (
    <div>
      <form>
        <TextField onChange={handleInputChange} id="outlined-search" label="Search" type="search" variant="outlined" />
        <TextField InputProps={{ readOnly: true, }} value={currentSearchTerm} id="reveal" variant="outlined" />
      </form>
    </div>
  )
}
