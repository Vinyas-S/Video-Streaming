import {configureStore} from "@reduxjs/toolkit"
import appslice from "./Appslice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import resultSlice from "./resultSlice";
import themeSlice from "./themeSlice";
const store = configureStore({
    reducer:{
        app:appslice,
        search:searchSlice,
        chat:chatSlice,
        results: resultSlice,
        theme: themeSlice,
    }
});

export default store;