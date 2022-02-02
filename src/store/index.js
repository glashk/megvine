
import { configureStore } from '@reduxjs/toolkit'
import addRefillSlice from './addRefilOption-slice'
import tankSlice from './tank-slice'
import addNoteSlice from './addNewNote-slice'

const store = configureStore({
    reducer: { addNewTank: addRefillSlice.reducer, tanks:tankSlice.reducer, notes: addNoteSlice.reducer }
});



export default store;
