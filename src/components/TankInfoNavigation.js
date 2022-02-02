import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FilterBar from './FilterBar'
import TankInfo from './TankInfo';
import TankNotes from './TankNotes';


 const  TankInfoNavigation = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="მონაცემები" value="1" />
            <Tab label="ლაბორატორია" value="2" />
            <Tab label="დანამატები" value="3" />
            <Tab label="შენიშვნები" value="4" />
            <Tab label="კომპოზიცია" value="5" />
            <Tab label="ყურძნის ჯიში" value="6" />
            <Tab label="შესრულებული სამუშაო" value="7" />
          </TabList>
        </Box>
        <TabPanel value="1"><TankInfo/></TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4"><TankNotes/></TabPanel>
        <TabPanel value="5">Item Two</TabPanel>
        <TabPanel value="6">Item Three</TabPanel>
        <TabPanel value="7"><TankInfo/></TabPanel>
        <TabPanel value="8">Item Two</TabPanel>
        <TabPanel value="9">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}

export default TankInfoNavigation
