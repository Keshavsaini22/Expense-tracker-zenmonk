import React, { useState } from 'react'

function AddExpense() {
    const [category, setCategory] = useState();
    const [type, setType] = useState();
    const [name, setName] = useState();
    const [amount, setAmount] = useState();
    const [date, setDate] = useState();

    const handleformsubmit = (e) => {
        console.log("Handleformsubmit")
        e.preventDefault();
        console.log(name,amount,date,type,category)
    }

    return (
        <form action="" onSubmit={handleformsubmit}>
            <div className="addexpense">
                <div className="title">
                    Add Expense
                </div>
                <div className="expensename">
                    <h1>Expense Name</h1>
                    <input type="text" name="name" placeholder='Expense name' value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="expenseamount">
                    <h1>Expense Amount</h1>
                    <input type="number" placeholder='Expense amount' value={amount} name="amount" onChange={(e) => { setAmount(e.target.value) }} />
                </div>
                <div className="expensecate">
                    <label htmlFor="category">Choose a category:</label>
                    <select name="category" id="category" onClick={(e) => { setCategory(e.target.value) }}>
                        <option value="">Choose a value:</option>
                        <optgroup label="Home">
                            <option value="Rent">Rent</option>
                            <option value="Groceries">Groceries</option>
                        </optgroup>
                        <optgroup label="Leisure">
                            <option value="Streaming">Streaming</option>
                            <option value="Restaurant">Restaurant</option>
                            <option value="Coffee">Coffee</option>
                            <option value="Travel">Travel</option>
                            <option value="Transport">Transport</option>
                            <option value="Hospital">Hospital</option>
                            <option value="Tip">Tip</option>
                            <option value="Salary">Salary</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Others">Others</option>
                        </optgroup>
                    </select>
                </div>
                <div className="expensetype">
                    <label for="type">Choose a type:</label>
                    <select name="type" id="type" onClick={(e) => { setType(e.target.value) }}>
                        <option value="">Choose a value</option>
                        <option value="Credit">Credit</option>
                        <option value="Debit">Debit</option>
                    </select>
                </div>
                <div className="expensedate">
                    <h1>Expense Date</h1>
                    <input type="date" name="name" onChange={(e) => { setDate(e.target.value) }} />
                </div>
                <button type='submit'>Submit</button>
            </div>

        </form>
    )
}

export default AddExpense