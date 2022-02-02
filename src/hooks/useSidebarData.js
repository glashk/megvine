import {useMemo} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import SettingsIcon from '@mui/icons-material/Settings';
const useSideBarData = () => {
    const sideBar = useMemo(() => {
    return [
        {
            title: 'მარანი',
            icon: <HomeIcon /> ,
            link: "/home",
        },
        {
            title: 'ჭურჭელი',
            icon: <DashboardIcon /> ,
            link: "/dashboard",
        },
        {
            title: 'წარმოებ',
            icon: <AnalyticsIcon/> ,
            link: "/analyze",
        },
       
    ]
},[])


const sideBarBottom = useMemo(() => {
    return [
   
        {
            title: 'მოხსენება',
            icon: <DataUsageIcon/> ,
            link: "/reports",
        },
        {
            title: 'პარამეტრები',
            icon: <SettingsIcon /> ,
            link: "/settings",
        },
       
    ]
},[])

return {sideBar, sideBarBottom}
}

export {useSideBarData}