import { createSlice } from '@reduxjs/toolkit'

export const umapRoom = createSlice({
  name: 'room',
  initialState: {
    value: [],
  },
  reducers: {
    logout: (state) => {
      state.value = []
    },
    addRoom: (state, action) => {
      state.value = (action.payload)
    },
  },
})
export const { logout, addRoom } = umapRoom.actions
export const rooms = (state) => state.room.value

export default umapRoom.reducer
