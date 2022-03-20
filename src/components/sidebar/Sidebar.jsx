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

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className='logo'>shivam vora</span>
        </div>
        <hr />
        <div className="center">
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <span className='icon'>
                        <DashboardIcon/>
                        </span>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>

                    <li>
                    <span className='icon'>
                        <PersonOutlineOutlinedIcon/>
                    </span>
                        <span>Users</span>
                    </li>
                    <li>
                    <span className='icon'>
                         <StoreMallDirectoryIcon/>
                    </span>

                        <span>Products</span>
                    </li>
                    <li>
                    <span className='icon'>
                        <VideoLabelIcon/>
                        </span>
                        <span>Orders</span>
                    </li>
                    <li>
                    <span className='icon'>
                        <LocalShippingIcon/>
                    </span>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>

                    <li>
                    <span className='icon'>
                        <QueryStatsIcon/>
                    </span>
                        <span>States</span>
                    </li>
                    <li>
                    <span className='icon'>
                        <NotificationsNoneOutlinedIcon/>
                        </span>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>

                    <li>
                    <span className='icon'>
                        <CloudDoneOutlinedIcon/>
                    </span>
                        <span>System Health</span>
                    </li>
                    <li>
                    <span className='icon'>
                        <PsychologyOutlinedIcon/>
                    </span>
                        <span>Logs</span>
                    </li>
                    <li>
                    <span className='icon'>
                        <SettingsIcon/>
                    </span>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                    <span className='icon'>
                        <AccountCircleOutlinedIcon/>
                    </span>
                        <span>Profile</span>
                    </li>

                    <li>
                    <span className='icon'>
                        <ExitToAppOutlinedIcon/>
                    </span>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="bottom">color option</div>
    </div>
  )
}

export default Sidebar