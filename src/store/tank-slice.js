import { createSlice} from '@reduxjs/toolkit'

const tankSlice = createSlice({
    name: 'tanks',
    initialState:{ tanks:[],  changed: false },
    reducers:{
        replaseTankData(state, action){
            state.tanks = action.payload.tanksinfo
        },
    }

   
})



export const tankActions = tankSlice.actions

export default tankSlice
