import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle} from 'react-icons/fa';
import {FcPlus, FcMinus } from "react-icons/fc"

const ExpenseItem = (props) => {
    const { dispatch, } = useContext(AppContext);

    const handleAdd = () => {
        
    }
    const handleSubtract = () => {

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
        <td>{props.cost}</td>
        <td><FcPlus size="2.2em" color="green" onClick={handleAdd} ></FcPlus></td>
        <td><FcMinus size="2.2em" color="red" onClick={handleSubtract} ></FcMinus></td>
        <td><FaTimesCircle size='1.5em' color="grey" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;
