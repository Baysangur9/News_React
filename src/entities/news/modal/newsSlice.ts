import { PAGE_SIZE } from "@/shared/constants/constants"
import {  IFilteres } from "@/shared/interfaces"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { INews } from "./types"



interface State {
  news: INews[],
  filteres:IFilteres,
}

const initialState: State = {
  news: [],
  filteres: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  }
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload
    },
    setFilteres:(state, action: PayloadAction<{key:string, value: string | number | null}>) => {
      const {key, value} = action.payload
      state.filteres = {...state.filteres, [key]: value}
    }
  },
})

export const { setNews, setFilteres } = newsSlice.actions

export default newsSlice.reducer