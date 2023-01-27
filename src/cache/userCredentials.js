import { createSlice } from '@reduxjs/toolkit'

export const userCredentials = createSlice({
  name: 'user',
  initialState: {
    value: [],
  },
  reducers: {
    logout: (state) => {
      state.value = []
    },
    addCredentials: (state, action) => {
      state.value.push(action.payload)
    },
  },
})

export const { logout, addCredentials } = userCredentials.actions
export const users = (state) => state.user.value

export default userCredentials.reducer
