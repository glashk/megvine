import { Box,Card } from '@mui/material'
import SideMenu from '../components/SideMenu'

import './Layout.css'
const Layout = ({children}) => {

    return(
        
        <Card className={'layout' }>{children}</Card>
    
    )
}

export default Layout