
import { useState } from 'react'
import Button from '../UI/Button'
import AddBoxIcon from '@mui/icons-material/AddBox';
import './FilterBar.css'
import useClickOutside from '../hooks/useClickOutside'
import AddOptionsPopup from './AddOptionsPopup'
import { Box, Fab, Tab, Tabs } from '@mui/material';
import { AddCircleOutline, PlusOne } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';

const FilterBar = () => {
    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [showOptions, setShowOptions] = useState(false)

    const domNode = useClickOutside(() => {
        setShowOptions(false)
    })

    const optionPopup = showOptions && <AddOptionsPopup />

    const boxStyle =

    {
        borderRadius: '74px',
        paddingBottom: '10px',
        borderBottom: 1,
        borderColor: 'divider',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
    }

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            height: '100px'
        }}
        >

            <Box sx={boxStyle}>
                <Tabs
                    sx={{

                        borderRadius: '20px',
                        display: 'flex',
                        background: '#ebebeb',
                        flexWrap: 'wrap'
                    }}
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >

                    <Tab label="ყველა" />
                    <Tab label="სავსე" />
                    <Tab label="ცარიელი" />


                    <Tab sx={{ ml: 5 }} label="ყველა" />
                    <Tab label="ქვევრი" />
                    <Tab label="ცისტერნა" />
                    <Tab label="ხის კასრი" />
                    <Tab label="ბოცა" />
                    <Tab label="ბოთლი" />
                </Tabs>

                <Fab sx={{ ml: 3 }} ref={domNode} onClick={() => setShowOptions(!showOptions)}
                    color="primary"
                    aria-label="add">

                    <AddIcon />
                    {optionPopup}
                </Fab>
            </Box>



        </Box>
    )
}

export default FilterBar
