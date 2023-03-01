import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // const { expenses, currency } = useContext(AppContext);
    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total += (item.unitprice * item.quantity));
    // }, 0);

    return (
        <div className='alert alert-secondary'>
            <span style={{paddingRight: "15px"}}>Budget</span>
            <span style={{paddingRight: "5px"}}>£</span>
            <input
                required='required'
                type='number'
                id='cost'
                value={2000}
                style={{ size: 5 }}
                // onChange={(event) => setQuantity(event.target.value)}
                >
            </input>
        </div>
    );
};

export default Budget;
