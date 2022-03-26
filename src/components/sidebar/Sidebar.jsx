import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import {Link} from "react-router-dom";


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className='logo'>shivam vora</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{textDecoration:"none"}}>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{textDecoration:"none"}}>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon'/>
                        <span>Users</span>
                    </li>
                    </Link>

                    <Link to="/products" style={{textDecoration:"none"}}>
                    <li>
                         <StoreMallDirectoryIcon className='icon'/>
                        <span>Products</span>
                    </li>
                    </Link>
                    
                    <li>
                        <VideoLabelIcon className='icon'/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon'/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>

                    <li>
                        <QueryStatsIcon className='icon'/>
                        <span>States</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className='icon'/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>

                    <li>
                        <CloudDoneOutlinedIcon className='icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className='icon'/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon'/>
                        <span>Profile</span>
                    </li>

                    <li>
                        <ExitToAppOutlinedIcon className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar