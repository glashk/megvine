import React, { useState } from 'react'
import AddNewTankForm from '../components/AddNewTankForm'
import Layout from '../UI/Layout'
import { useSelector } from 'react-redux'
import FilterBar from '../components/FilterBar'
import './Dashboard.css'
import RefilTankForm from '../components/RefilTankForm'
import AddNewBarelForm from '../components/AddNewBarelForm'
import LoadingSpinner from '../UI/LoadingSpinner'
import TankContent from '../components/TankContent'
import { Typography } from '@mui/material'
import TankInfo from '../components/TankInfo'

const Dashboard = () => {
    const addNewTank = useSelector(state => state.addNewTank.addNewTank);
    const refilTank = useSelector(state => state.addNewTank.refilTank);
    const addNewBarel = useSelector(state => state.addNewTank.addNewBarel); 
    const showSuccesPopup = useSelector(state => state.addNewTank.showSuccesPopup);
    const showTankInfo = useSelector(state => state.addNewTank.showTankInfo)

    const tanksData = useSelector(state => state.tanks.tanks)
  
    return (
        <>
            <Typography sx={{textAlign:'center'}} >ჭურჭელი</Typography>
            
            <nav className='dashboard-filter'>
                <FilterBar />
            </nav>
            {showSuccesPopup && <p className='succes-popup'>submited succesfully!</p>}
            {addNewTank && <AddNewTankForm />}
            {refilTank && <RefilTankForm />}
            {addNewBarel && <AddNewBarelForm />}
            {showTankInfo && <TankInfo/>}
       <TankContent added={addNewTank}/>

     


        </>
    )
}

export default Dashboard
