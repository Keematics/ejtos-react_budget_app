import React, { useContext, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


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
    const{currency} = useContext(AppContext)

    // const [money, setMoney] = React.useState(currency)
    // const [title, setTitle] = React.useState("£ Pound")

    function handle_dropdown(eventKey) {
        setTitle(eventKey)
        console.log(title)
    }
    return (
        <>
        <Dropdown onSelect={handle_dropdown}>
            <Dropdown.Toggle variant="success" size="lg">{title}</Dropdown.Toggle>
            <Dropdown.Menu variant="success">
                <Dropdown.Item as="p" eventKey="$">($ Dollar)</Dropdown.Item>
                <Dropdown.Item as="p" eventKey="£">(£ Pound)</Dropdown.Item>
                <Dropdown.Item as="p" eventKey="€">(€ Euro)</Dropdown.Item>
                <Dropdown.Item as="p" eventKey="₹">(₹ India)</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </>
    );
  }
  
  export default Currency;