import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, currency, budget } = useContext(AppContext);
    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total += (item.unitprice * item.quantity));
    // }, 0);
    const [quantity, setQuantity] = useState(budget)

    return (
        <div className='alert alert-secondary'>
            <span style={{paddingRight: "15px"}}>Budget</span>
            <span style={{paddingRight: "5px"}}>{currency}</span>
            <input
                required='required'
                type='number'
                id='cost'
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
                >
            </input>
        </div>
    );
};

export default Budget;
