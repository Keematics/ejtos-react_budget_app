import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, currency, remaining } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total +=  item.cost);
    }, 0);
    const [cost, setCost] = useState('')
    // if(cost > 20000) {
    //     setCost("");
    //     alert("The value cannot exceed remaining fund " + currency + remaining);
    //     return;
    // } 
    // if(totalExpenses > cost){
    //     setCost("");
    //     alert("You cannot reduce the budget lower than the spending")
    //     return;
    // }

    return (
        <div className='alert alert-secondary'>
            <span style={{paddingRight: "15px"}}>Budget</span>
            <span style={{paddingRight: "5px"}}>{currency}</span>
            <input
                required='required'
                type='number'
                id='cost'
                value={cost}
                onChange={(event) => setCost(event.target.value)}
                >
            </input>
        </div>
    );
};

export default Budget;
