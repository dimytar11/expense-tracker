import './NewExpenseContent.css';
import { ExpenseForm } from './ExpenseForm';

export const NewExpenseContent = (props) => {
    let showNewExpenseForm = false; 

    const showExpenseForm = () => {
        showNewExpenseForm = true;
    }
    
    if (showNewExpenseForm) {
        return (
            <button onClick={showExpenseForm}>Add Expense</button>
        )
    }
    return (
        <ExpenseForm></ExpenseForm>
    )
}