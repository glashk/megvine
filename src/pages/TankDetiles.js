import { useEffect } from 'react'
import TankDetailHeader from "../components/TankDetailHeader"
import TankInfoNavigation from "../components/TankInfoNavigation"
import { useParams } from 'react-router-dom';
import { fetchTankDataId } from '../store/fetchTankData -http-action'
import { useDispatch, useSelector } from 'react-redux'
const TankDetiles = () => {

    const dispatch = useDispatch()
    const {tankId} = useParams()
    console.log(tankId);
console.log('aaa');

    useEffect(() => {
        console.log(tankId);
      dispatch(fetchTankDataId(tankId))
      console.log('here');
    }, [dispatch]);

    
    


   
    return (

        <div>
            <TankDetailHeader />
            <TankInfoNavigation />
        </div>
    )
}

export default TankDetiles
