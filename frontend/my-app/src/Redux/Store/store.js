import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "../Slice/SignUpSlice";
import loginSlice from "../Slice/LoginSlice";
import uploadExpenseSlice from "../Slice/PostExpense";
import  uploadCategorySlice  from "../Slice/PostCategory";


const store = configureStore({
    reducer: {
        signup: signupSlice,
        login: loginSlice,
        uploadexpense: uploadExpenseSlice,
        uploadcate:uploadCategorySlice
    },
    // middleware: () => new Tuple(additionalMiddleware, logger),
})
export default store;