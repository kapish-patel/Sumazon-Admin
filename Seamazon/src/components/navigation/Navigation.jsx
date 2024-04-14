import {NavLink} from 'react-router-dom';
import su_logo from '../../assets/sumazon_logo.png';
import Username from './Username';
import { Button} from '@mui/material';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import './Navigation.css';

function Navigation() {
  return (
    <div className="navigation-container">
      <div className="logo-container">
      <NavLink to='/'>
        <img src={su_logo} alt="Sumazon logo"/>
      </NavLink>
      </div>
      <Username />
      <div className="nav-links-container">
        <NavLink className={({ isActive, isPending }) => isPending ? "link-container-pending" : isActive ? "link-container-active" : "nav-link-container"} to={'/'}>
          <Button variant="outline" startIcon={<DescriptionOutlinedIcon />} style={{ height: '100%', width:'100%' }}>
            Products
          </Button>
        </NavLink>
        <NavLink className={({ isActive, isPending }) => isPending ? "link-container-pending" : isActive ? "link-container-active" : "nav-link-container"} to={'/user'}>
          <Button variant="outline" startIcon={<PersonOutlineOutlinedIcon/>} style={{ height: '100%', width:'100%' }}>
            User
          </Button>
        </NavLink>
      </div>
    </div>
  )
}

export default Navigation
