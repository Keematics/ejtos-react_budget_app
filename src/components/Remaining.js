import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { currency } = useContext(AppContext); // I removed "expenses" from the desctructuring
    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total += (item.unitprice * item.quantity));
    // }, 0);

    return (
        <div className='alert alert-success'>
            <span>Remaining {currency} 1040</span>
        </div>
    );
};

export default Remaining;

