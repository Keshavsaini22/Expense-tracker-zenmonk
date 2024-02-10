import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadCategory } from '../../Redux/Slice/PostCategory';


function AddCategory() {
    const [category, setCategory] = useState("");
    const dispatch = useDispatch();
    const success = useSelector(state => state.uploadcate.success)
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(category)
        dispatch(uploadCategory(category));

    }
    useEffect(() => {
        if (success) {
            alert("successfully added")
        }
    }, [success])
    return (
        <form action="" onSubmit={handleFormSubmit}>
            <div>
                <input type="text" name={category} value={category} id="" onChange={(e) => setCategory(e.target.value)} />
                <button type="submit">Add </button>
            </div>
        </form>
    )
}

export default AddCategory