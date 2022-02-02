

import { tankActions } from './tank-slice';
import {addTankAction} from './addRefilOption-slice'
export const fetchTankData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://mrarne-app-default-rtdb.firebaseio.com/wineInput.json')

            if(!response.ok) {
                throw new Error('couldn fetch')
            }
          const responseData = await response.json()
          const loadedTanks = [];
                for (const key in responseData) {

                    loadedTanks.push({
                        id: key,
                        capacity: responseData[key].capacity,
                        tankCode: responseData[key].tankCode,
                        tankType: responseData[key].tankType,
                        wineColor: responseData[key].wineColor,
                        refilDate: responseData[key].refilDate ,
                        description: responseData[key].description,
                        howManyWineType: responseData[key].howManyWineType,
                        wineType: responseData[key].wineType,
                        firstWyneComposition: responseData[key].firstWyneComposition,
                        seccondWyneType: responseData[key].seccondWyneType,
                        seccondWyneComposition: responseData[key].seccondWyneComposition,
                        thirdWineType: responseData[key].thirdWineType,
                        thirdWineComposition: responseData[key].thirdWineComposition,

                    })               
                }
        return loadedTanks;

        } 
        try{
            console.log('called')
            const tankData = await fetchData();
            
            dispatch(tankActions.replaseTankData({
               tanksinfo: tankData
            }
            ))

        }catch(error){
            console.log('erroe catched');
        }

    }
}


export const fetchTankDataId = (id) => {
    console.log(id, 'rrr');
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(`https://mrarne-app-default-rtdb.firebaseio.com/wineInput/${id}.json`)

            if(!response.ok) {
                throw new Error('couldn fetch')
            }
            console.log('ok');
          const responseData = await response.json()
          console.log(responseData);
          const loadedTanks = [];
            
                    loadedTanks.push({
                    
                        capacity: responseData.capacity,
                        tankCode: responseData.tankCode,
                        tankType: responseData.tankType,
                        wineColor: responseData.wineColor,
                        refilDate: responseData.refilDate ,
                        description: responseData.description,
                        howManyWineType: responseData.howManyWineType,
                        wineType: responseData.wineType,
                        firstWyneComposition: responseData.firstWyneComposition,
                        seccondWyneType: responseData.seccondWyneType,
                        seccondWyneComposition: responseData.seccondWyneComposition,
                        thirdWineType: responseData.thirdWineType,
                        thirdWineComposition: responseData.thirdWineComposition,

                    })               
            
        return loadedTanks;

        } 
        try{
            console.log('called')
            const tankData = await fetchData();
            console.log(tankData,'dsdsdsdsds');
            dispatch(addTankAction.visitedTankHandler({
               tanksinfoId: tankData
            }
            ))

        }catch(error){
            console.log('erroe catched');
        }

    }
}





// const baseURL = 'https://mrarne-app-default-rtdb.firebaseio.com/wineInput.json'
 
//  const useFetchTanks =  () => {
//     const [tanks,setTanks] = useState({isLoaded:false,data: []})
   
//         const fetchData = async () => {
//             try{
//                 const response = await fetch(baseURL)
        //         if (!response.ok) {   
        //             throw new Error('somthing is wrong');
        //         }
        //         const responseData = await response.json();
        //         const loadedTanks = [];
        //         for (const key in responseData) {
                    
        //             loadedTanks.push({
        //                 id: key,
        //                 capacity: responseData[key].capacity,
        //                 tankCode: responseData[key].tankCode,
        //             })               
                    
        //         }
        //         setTanks({isLoaded:true,data:loadedTanks})
        //     } catch(err){
        //         console.log("error from useFetchTanks", err)
        //     }
        //     }
        //     fetchData()
       

        // const myData = useMemo(() =>  tanks
        // ,[tanks.isLoaded])
        // return {
        //     isLoaded: myData.isLoaded,
//             data: myData.data
//         }
       
// }

// // const useFetchTankById = async (id) => {
// //     const response = await fetch(`https://mrarne-app-default-rtdb.firebaseio.com/wineInput/${id}`)
        

// // }

// // const fetchGela = () => {
// // return null;
// // }

// export {useFetchTanks, fetchGela}