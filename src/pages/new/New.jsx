import React from 'react';
import './new.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";


const New = () => {
  return (
    <div className='new'>
        <Sidebar/>
        <div className="newContainer">
          <Navbar/>
          <div className="top">
            <h1>Add New User</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img src="https://www.maxed.in/wp-content/themes/consultix/images/no-image-found-360x250.png" alt="" />
            </div>
            <div className="right"><form></form></div>
          </div>
        </div>
    </div>
  )
}

export default New