import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IFilteres, INews } from '../../interfaces'
import { PAGE_SIZE } from '../../constants/constants'


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