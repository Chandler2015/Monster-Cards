import React from "react";

import './search-box.styles.css';


//functional component get some props return some htmls
export const SearchBox = ({placeholder, handleChange}) =>(
    <input className ="search" 
    type='search' 
    placeholder= {placeholder}
    onChange = {handleChange}/>
)