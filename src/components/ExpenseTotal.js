import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses, currency, budget } = useContext(AppContext); // I removed "expenses" from the desctructuring
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);

    const amount_spent = parseInt(budget - totalExpenses);
    console.log(typeof(amount_spent));
    return (
        <div className='alert alert-primary'>
            <span>Spent so far {currency} {amount_spent}</span>
        </div>
    );
};

export default ExpenseTotal;


