import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "../Slice/SignUpSlice";
import loginSlice from "../Slice/LoginSlice";


const store= configureStore({
    reducer: {
        signup: signupSlice,
        login: loginSlice
    },
    // middleware: () => new Tuple(additionalMiddleware, logger),
  })
  export default store;