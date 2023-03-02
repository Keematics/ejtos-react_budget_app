import React, { useContext, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import { AppContext } from '../context/AppContext';


// const Currency = (props) => {

//     const setCurrency = () => {

//     }

//     return (
//         <div>
//             <select name="Currency" id="Currency" style={{background: "green", padding: "15px", color: 'white', borderRadius: "7px", border: "none"}} onChange={event => setCurrency(event.target.value)}>
//                 <option value="₹">Currency (£ Pound)</option>
//                 <option value="$">( Dollar)</option>
//                 <option value="£">(£ Pound)</option>
//                 <option value="€">(€ Euro)</option>
//                 <option value="₹">(₹ India)</option>
//             </select>
//         </div>
//     );
// };

// export default Currency;


function Currency() {
    return (
      <DropdownButton id="dropdown-item-button" title="Dropdown button">
        <Dropdown.Item as="p">( Dollar)</Dropdown.Item>
        <Dropdown.Item as="p">(£ Pound)</Dropdown.Item>
        <Dropdown.Item as="p">(€ Euro)</Dropdown.Item>
        <Dropdown.Item as="p">(₹ India)</Dropdown.Item>
      </DropdownButton>
    );
  }
  
  export default Currency;