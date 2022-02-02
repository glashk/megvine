// import {useState,useEffect,useMemo} from 'react'
// const baseURL = 'https://mrarne-app-default-rtdb.firebaseio.com/wineInput.json'
 
// const useFetchTanks =  () => {
//     const [tanks,setTanks] = useState({isLoaded:false,data: []})
//     useEffect(() => {
//         const fetchData = async () => {
//             try{
//                 const response = await fetch(baseURL)
//                 if (!response.ok) {   
//                     throw new Error('somthing is wrong');
//                 }
//                 const responseData = await response.json();
//                 const loadedTanks = [];
//                 for (const key in responseData) {
                    
//                     loadedTanks.push({
//                         id: key,
//                         capacity: responseData[key].capacity + 'ლ',
//                         tankCode: responseData[key].tankCode,
//                         tankType: responseData[key].tankType
//                     })               
                    
//                 }
//                 setTanks({isLoaded:true,data:loadedTanks})
//             } catch(err){
//                 console.log("error from useFetchTanks", err)
//             }
//             }
//             fetchData()
//         },[])

//         const myData = useMemo(() =>  tanks
//         ,[tanks.isLoaded])
//         return {
//             isLoaded: myData.isLoaded,
//             data: myData.data
//         }
       
// }



// const useFetchTankById = async (id) => {
//     const response = await fetch(`https://mrarne-app-default-rtdb.firebaseio.com/wineInput/${id}`)
        

// }

// const fetchGela = () => {
// return null;
// }

// export {useFetchTanks, fetchGela}