import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {

    const setCurrency = () => {

    }

    return (
        <div>
            <select name="Currency" id="Currency" style={{background: "green", padding: "15px", color: 'white', borderRadius: "7px", border: "none"}} onChange={event => setCurrency(event.target.value)}>
                <option value="₹">Currency (£ Pound)</option>
                <option value="₹">India(₹)</option>
                <option value="£">(£ Pound)</option>
                <option value="€">Europe(€)</option>
                <option value="CAD">Canada(CAD)</option>
            </select>
        </div>
    );
};

export default Currency;
