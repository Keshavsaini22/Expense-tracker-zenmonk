import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "../Slice/SignUpSlice";
import loginSlice from "../Slice/LoginSlice";
import uploadExpenseSlice from "../Slice/PostExpense";
import  uploadCategorySlice  from "../Slice/PostCategory";
import  getCategorySlice  from "../Slice/GetCategory";
import  getExpenseSlice  from "../Slice/GetExpense";


const store = configureStore({
    reducer: {
        signup: signupSlice,
        login: loginSlice,
        uploadexpense: uploadExpenseSlice,
        uploadcate:uploadCategorySlice,
        getcate: getCategorySlice,
        getexpense: getExpenseSlice,
    },
    // middleware: () => new Tuple(additionalMiddleware, logger),
})
export default store;