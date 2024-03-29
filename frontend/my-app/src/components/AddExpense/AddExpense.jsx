import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadExpense } from '../../Redux/Slice/PostExpense';
import { getCategory } from '../../Redux/Slice/GetCategory';
import { uploadCategory } from '../../Redux/Slice/PostCategory';

function AddExpense() {
    const [category, setCategory] = useState();
    const [type, setType] = useState();
    const [name, setName] = useState();
    const [amount, setAmount] = useState();
    const [date, setDate] = useState();
    const dispatch = useDispatch();

    const id = useSelector(state => state.login.id)
    const success = useSelector(state => state.uploadexpense.success)
    const allcate = useSelector(state => state.getcate.contents)

    const handleformsubmit = async (e) => {
        console.log("Handleformsubmit")
        e.preventDefault();
        console.log("iddddddddddd",id)
        console.log(name, amount, date, type, category)
        const data = {
            name: name,
            category: category,
            type: type,
            amount: amount,
            date: date,
            userid: id
        }
        console.log(data)
        dispatch(uploadExpense(data))
    }
    useEffect(()=>{
        // dispatch(getCategory())
        console.log("new cate",allcate)
        if(success){
            alert("successfully added expense")
        }
    },[success])
 
    return (
        
        <>
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
                        <optgroup label="New Category">
                        {allcate?.map((cate)=>( <option value={cate.category}>{cate.category}</option>))}                           
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

        
        </>
    )
}

export default AddExpense