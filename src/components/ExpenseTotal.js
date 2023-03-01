import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { currency } = useContext(AppContext); // I removed "expenses" from the desctructuring
    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total += (item.unitprice * item.quantity));
    // }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far {currency} 940</span>
        </div>
    );
};

export default ExpenseTotal;


