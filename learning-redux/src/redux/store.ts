import { configureStore } from "@reduxjs/toolkit";
import sliceLanguages from "./sliceLanguage";

const store = configureStore({
  reducer: {
    languages: sliceLanguages
  }
})

export default store