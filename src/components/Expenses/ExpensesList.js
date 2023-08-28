import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css';

const ExpensesList = props => {
    const expensestFilter = props.items.filter((item) => {
        return item.date.getFullYear().toString() === props.filteredYear
    }).map((expense) => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    ));

    if (expensestFilter.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return (
        <ul className="expenses-list">
            {expensestFilter}
        </ul>
    );
}

export default ExpensesList;