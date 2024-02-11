import React, { useEffect, useState } from 'react'
import AddExpense from '../AddExpense/AddExpense'
import AddCategory from '../AddCategory/AddCategory'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../Redux/Slice/GetCategory';
import { uploadCategory } from '../../Redux/Slice/PostCategory';
import { useNavigate } from 'react-router-dom';




function Home() {
  const navigate=useNavigate()
  const [income, setincome] = useState(200)
  const [expense, setexpense] = useState(20)
  const [filtertype, setfiltertype] = useState()
  const [filtercate, setfiltercate] = useState()
  const [addcategory, setaddCategory] = useState();
  const successofaddcate = useSelector(state => state.uploadcate.success)
  const [openAddexpense, setopenAddexpense] = useState(false);
 
 

  
  const handleAddExpense= ()=>{
    console.log("first")
    setopenAddexpense(!openAddexpense)
   
  }
  const allcate = useSelector(state => state.getcate.contents)
  const dispatch = useDispatch();

  const handleAddcateSubmit = (e) => {
    e.preventDefault();
    console.log(addcategory)
    if (addcategory)
     { dispatch(uploadCategory(addcategory));
      alert("successfully added cate")
    }
    else alert("Add something")

  }
  useEffect(() => {
    dispatch(getCategory())
    if(openAddexpense)
    navigate('/add')

  }, [successofaddcate,openAddexpense])



  return (
    <>
      {/* <AddCategory/>
    <AddExpense/> */}

      <div className="upper">
        <div className="income">
          <h3>Income</h3>
          <div className="value">{income}</div>
        </div>
        <div className="expense">
          <h3>Expenses</h3>
          <div className="value">{expense}</div>
        </div>
      </div>
      <div className="middle">
        <div className="txt">Transactions</div>
        <div className="filtertype">
          <label for="role">Type</label>
          <select name="category" id="category" value={filtertype} onChange={(e) => {
            setfiltertype(e.target.value);
            // console.log(e.target.value);
          }}><option value="">All Data</option>
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </div>
        <div className="flitercategory">
          <label htmlFor="category">Choose a category:</label>
          <select name="category" id="category" onClick={(e) => { setfiltercate(e.target.value) }}>
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
              {allcate?.map((cate) => (<option value={cate.category}>{cate.category}</option>))}
            </optgroup>
          </select>
          <form action="" onSubmit={handleAddcateSubmit}>
            <div>
              <input type="text" name={addcategory} value={addcategory} id="" onChange={(e) => setaddCategory(e.target.value)} />
              <button type="submit">Add </button>
            </div>
          </form>

        </div>

        <div className="addexpense">
        <button onClick={handleAddExpense}>Add Expense</button>
        </div>
      </div>
    </>
  )
}

export default Home