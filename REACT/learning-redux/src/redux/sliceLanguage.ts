import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Language {
  name: string,
  favorite: boolean
}

const INITIAL_STATE: Language[] = [
  { name: "JAVA", favorite: false},
  { name: "C#", favorite: false},
  { name: "JAVASCRIPT", favorite: false}
]

const sliceLanguage = createSlice({
  name: 'languages',
  initialState: INITIAL_STATE,
  reducers: {
    addLanguage(state, {payload}: PayloadAction<string>){
      return [...state,{name: payload, favorite: false}]
    },
    toFavorite(state, { payload } : PayloadAction<string>){
      return state.map(currentState => 
        currentState.name === payload 
          ? {...currentState, favorite: !currentState.favorite} 
          : currentState)
    }
  }
})

export default sliceLanguage.reducer
export const { addLanguage, toFavorite } = sliceLanguage.actions

export const useLanguage = (state: any) => {
  return state.languages as Language[]
}