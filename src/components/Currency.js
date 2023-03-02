import React, { useContext, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


import { AppContext } from '../context/AppContext';
import "./style.css"


function Currency() {
    const{currency, dispatch} = useContext(AppContext)

    const [title, setTitle] = React.useState("£ Pound")

    function handle_dropdown(eventKey) {
        setTitle(eventKey)
    }
    
    function changeCurrency(e){
        const value = e.target.getAttribute("data-id");
        dispatch({
            type: "CHG_CURRENCY",
            payload: value
        });
    }
    return (
        <>
        <Dropdown onSelect={handle_dropdown}>
            <Dropdown.Toggle style={{backgroundColor: "#20c997", padding: "12px"}} size="lg">Currency {title}</Dropdown.Toggle>
            <Dropdown.Menu style={{backgroundColor: "#20c997", padding: "0"}}>
                <Dropdown.Item as="p" data-id="$" onClick={changeCurrency} eventKey="$ Dollar">($ Dollar)</Dropdown.Item>
                <Dropdown.Item as="p" data-id="£" onClick={changeCurrency} eventKey="£ Pound">(£ Pound)</Dropdown.Item>
                <Dropdown.Item as="p" data-id="€" onClick={changeCurrency} eventKey="€ Euro">(€ Euro)</Dropdown.Item>
                <Dropdown.Item as="p" data-id="₹" onClick={changeCurrency} eventKey="₹ India">(₹ India)</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </>
    );
  }
  
  export default Currency;