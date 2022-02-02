import { createSlice} from '@reduxjs/toolkit'


const addNoteSlice = createSlice({
    name: 'nptes',
    initialState: {showNoteForm: false},
    reducers: {

        toogleAddNewNote(state) {
            state.showNoteForm = !state.showNoteForm
        },
        


    }
});


export const addNoteAction = addNoteSlice.actions

export default addNoteSlice