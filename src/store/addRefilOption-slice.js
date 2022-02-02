import { createSlice} from '@reduxjs/toolkit'


const addRefillSlice = createSlice({
    name: 'popup',
    initialState: {showTankInfo: false, clickedTankInfo: [], clickedTankId: '' ,addNewTank: false, refilTank: false, isSubmitting: false, showSuccesPopup:false},
    reducers: {

        toogleAddNewTank(state) {
            state.addNewTank = !state.addNewTank
        },
        toogleRefilTank(state) {
            state.refilTank = !state.refilTank
        },
    

        clickedTankHandler(state, action) {
          
            state.clickedTankInfo = action.payload.clickedTankInfo;
            state.clickedTankId = action.payload.clickedTankId;
        },


        visitedTankHandler(state, action) {
          console.log(action.payload);
            state.clickedTankInfo = action.payload.tanksinfoId[0];
        
        },



        toogleAddNewBarel(state) {
            state.addNewBarel = !state.addNewBarel
        },
        
        toogleSubmitting(state) {
            state.isSubmitting = !state.isSubmitting
        },


        closeinputHandler(state) {
            state.addNewTank = false;
            state.refilTank = false;
            state.addNewBarel = false;
        },

        showSuccesPopup(state){
            state.showSuccesPopup = true
        },
        closeSuccesPopup(state){
            state.showSuccesPopup = false
        }




    }
});


export const addTankAction = addRefillSlice.actions

export default addRefillSlice 