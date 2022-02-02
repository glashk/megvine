
import { addTankAction } from '../store/addRefilOption-slice'


export const sendNewTankData = (tankData) => {
    
    return async (dispatch) => {
        dispatch(addTankAction.toogleSubmitting())
        const sendRequest = async () => {
            const response = await fetch('https://mrarne-app-default-rtdb.firebaseio.com/wineInput.json', {
                method:'POST',
                body: JSON.stringify(tankData),
            }
            );

            if (!response.ok) {
                throw new Error('somthing went wrong');

              }   
            }
            try{
                await 
                sendRequest();
                dispatch(addTankAction.closeinputHandler())
                dispatch(addTankAction.showSuccesPopup())
                dispatch(addTankAction.toogleSubmitting())
                setTimeout(() =>  dispatch(addTankAction.closeSuccesPopup()), 2000);
                
            } catch(error){
                console.log('error');

            }
    }
}



export const sendUpdatedTanksData = (updatedTankData) => {
    const url = updatedTankData.url
    return async (dispatch) => {
        dispatch(addTankAction.toogleSubmitting())
        const sendRequest = async () => {
            const response = await fetch(`https://mrarne-app-default-rtdb.firebaseio.com/wineInput/${url}.json`, {
                method:'PUT',
                body: JSON.stringify(updatedTankData),
            }
            );

            if (!response.ok) {
                throw new Error('somthing went wrong');

              }   
            }
            try{
                await 
                sendRequest();
                console.log('okay');
                dispatch(addTankAction.closeinputHandler())
                dispatch(addTankAction.showSuccesPopup())
                dispatch(addTankAction.toogleSubmitting())
                setTimeout(() =>  dispatch(addTankAction.closeSuccesPopup()), 2000);
            } catch(error){
                console.log('error');

            }
    }
}


export const deleteTankHandler = (id) => {
   
    return async (dispatch) => {
        dispatch(addTankAction.toogleSubmitting())

        const sendRequest = async () =>{
            const response = await fetch(`https://mrarne-app-default-rtdb.firebaseio.com/wineInput/${id}.json`,{
                method:'DELETE',
                body: JSON.stringify(id),
            }
            );
            if(!response.ok){
                throw new Error('somthing is wrong with delete')
            }
        }
        try{
            await sendRequest()
            dispatch(addTankAction.showSuccesPopup())
            dispatch(addTankAction.toogleShowTankInfo())
            dispatch(addTankAction.toogleSubmitting())
            setTimeout(() =>  dispatch(addTankAction.closeSuccesPopup()), 2000);
            console.log('tank deleted');

        }catch(error){
            console.log('couldnot delete');
        } finally{
            setTimeout(() =>  dispatch(addTankAction.closeSuccesPopup()), 2000);
            dispatch(addTankAction.toogleSubmitting())
        }

    }

}



