import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit'

interface ThemeState {
  mode: 'light' | 'dark'
}

const initialState: ThemeState = {
  mode: 'light',
}

export const fetchInitialTheme = createAsyncThunk(
  'theme/fetchInitialTheme',
  async (_, thunkAPI) => {
    try {
      const savedTheme = localStorage.getItem('theme')
      return thunkAPI.fulfillWithValue(savedTheme || 'light')
    } catch (error) {
      console.error(error)
    }
  }
)

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', state.mode)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchInitialTheme.fulfilled,
      (state, action: PayloadAction<string | undefined>) => {
        const validModes: ThemeState['mode'][] = ['light', 'dark']
        state.mode = validModes.includes(action.payload as ThemeState['mode'])
          ? (action.payload as ThemeState['mode'])
          : 'light'
      }
    )
  },
})

export const {toggleTheme} = themeSlice.actions

export default themeSlice.reducer
