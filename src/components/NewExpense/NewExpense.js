import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (inputExpenseData) => {
        const expenseData = {
            ...inputExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpenseHandler(expenseData);
        setIsEditing(false);
    };

    const startEditingHanler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHanler}>Add New Expense</button>}
            {isEditing && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                stopEditingHandler={stopEditingHandler}
            />}
        </div>
    );
};

export default NewExpense;