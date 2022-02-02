import React, { useState, useRef } from 'react'
import './Marani.css'
import Layout from '../UI/Layout'

import TankInput from '../components/AddNewTankForm'
import useClickOutside from '../hooks/useClickOutside'
import DatePicker from 'react-datepicker';
import { Box, Card, Paper } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
const Marani = () => {
    const tanksData = useSelector(state => state.tanks.tanks)


    const [isVisible, setIsVisible] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const ref = useRef(null);
    useClickOutside(ref, () => setIsVisible(false));

    const totalCapacity = tanksData.map(item => Number(item.capacity)).reduce((a, b) => a + b, 0);

    console.log(totalCapacity);
    return (
        <Layout>
            <h1>მარანი</h1>


            <Card
                sx={{
                    width: 'fit-content',
                    padding: '20px'
                }}
            >
                {`მარნის მოცულობა: ${totalCapacity}`}
            </Card>

            <Card
                sx={{
                    width: 'fit-content',
                    padding: '20px'
                }}
            >
                {`გადამუშავებული ყურძენი: ${totalCapacity}`}
            </Card>

            <Card
                sx={{
                    width: 'fit-content',
                    padding: '20px'
                }}
            >
                {`მარანში არსებული ღვინო: ${totalCapacity}`}
            </Card>


            <Card
                sx={{
                    width: 'fit-content',
                    padding: '20px'
                }}
            >
                {`ინვენტარი: ${totalCapacity}`}
            </Card>


            <Card
                sx={{
                    width: 'fit-content',
                    padding: '20px'
                }}
            >
                {`მოგება/ზარალი: ${totalCapacity}`}
            </Card>


        

        </Layout>
    )
}

export default Marani
