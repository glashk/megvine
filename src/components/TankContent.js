
import { DataGrid } from '@mui/x-data-grid';
import { Box} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { addTankAction } from '../store/addRefilOption-slice'
import { useNavigate } from 'react-router-dom';

const TankContent = () => {

  const navigate = useNavigate();
  const columns = [
   
    { field: 'wineColor', headerName: 'ღვინის ტიპი', flex: 1 },
    { field: 'tankCode', headerName: 'ნომერი', flex: 1, editable: true },
    { field: 'tankType', headerName: 'ჭურჭლის ტიპი', flex: 1 },
    { field: 'capacity', headerName: 'მოცულობა (ლ)', flex: 1 },
    { field: 'refilDate', headerName: 'რთველი', flex: 1 },
    { field: 'wineType', headerName: 'ყურძნის ჯიში', flex: 1 },
  ];

  const dispatch = useDispatch()
  const tanksData = useSelector(state => state.tanks.tanks)




  const tankClickHandler = (params) => {
      const clickedTankId = params.row.id;
      const clickedTankInfo = params.row;
      dispatch(addTankAction.clickedTankHandler({ clickedTankId, clickedTankInfo }))
      navigate(`/tank/${params.row.id}`);
    }




  return (
 
      <DataGrid
     sx = {{ height: 400, width: '100%'}}
        rows={tanksData}
        columns={columns}
        onCellClick={tankClickHandler}

      />


  
  );
}


export default TankContent