import { Route, Routes, BrowserRouter as Router, } from 'react-router-dom'
import SideMenu from './components/SideMenu'
import Marani from './pages/Marani'
import { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Analyze from './pages/Analyze';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import { fetchTankData } from './store/fetchTankData -http-action'
import { useDispatch, useSelector } from 'react-redux'
import TankInfo from './components/TankInfo';
import TankDetiles from './pages/TankDetiles';
import SignIn from './components/SignInForm';
import SigninPage from './pages/SigninPage';


function App() {
  const showSuccesPopup = useSelector(state => state.addNewTank.showSuccesPopup);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTankData())
    console.log('here');
  }, [dispatch, showSuccesPopup]);

  return (
    <Router>
      <SideMenu>
        <Routes>
          <Route path={'*'} element={<Marani />} />
          <Route path={'/sign-in'} element={<SigninPage />} />
          <Route path={'/home'} element={<Marani />} />
          <Route path={'/dashboard'} element={<Dashboard />} />
          <Route path={'/analyze'} element={<Analyze />} />
          <Route path={'/reports'} element={<Reports />} />
          <Route path={'/settings'} element={<Settings />} />
          <Route path={'/tank/:tankId'} element={<TankDetiles />} />
        </Routes>
      </SideMenu>
    </Router>

  );
}

export default App;
