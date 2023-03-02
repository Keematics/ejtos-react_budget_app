import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaMinusCircle, FaPlusCircle} from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleAdd = (name) => {
    
        const expense = {
            name: name,
            cost: 10
        }
        dispatch({
            type: "ADD_EXPENSE",
            payload: expense
        })
    }
    const handleSubtract = (name) => {

        const expense = {
            name: name,
            cost: 10
        }
        dispatch({
            type: "RED_EXPENSE",
            payload: expense
        })
    }
    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency} {props.cost}</td>
        <td><FaPlusCircle size="2.2em" color="green" onClick={(event) => handleAdd(props.name)} ></FaPlusCircle></td>
        <td><FaMinusCircle size="2.2em" color="red" onClick={(event) => handleSubtract(props.name)} ></FaMinusCircle></td>
        <td><FaTimesCircle size='1.5em' color="grey" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;
