import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "../Slice/SignUpSlice";
import loginSlice from "../Slice/LoginSlice";
import uploadExpenseSlice from "../Slice/PostExpense";
import  uploadCategorySlice  from "../Slice/PostCategory";
import  getCategorySlice  from "../Slice/GetCategory";


const store = configureStore({
    reducer: {
        signup: signupSlice,
        login: loginSlice,
        uploadexpense: uploadExpenseSlice,
        uploadcate:uploadCategorySlice,
        getcate: getCategorySlice,
    },
    // middleware: () => new Tuple(additionalMiddleware, logger),
})
export default store;