import React, { useState } from 'react';
import './new.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';


const New = ({inputs,title}) => {


  const [file,setFile] = useState("");

  console.log('file is following',file);

  return (
    <div className='new'>
        <Sidebar/>
        <div className="newContainer">
          <Navbar/>
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img src={file ? URL.createObjectURL(file):"https://www.maxed.in/wp-content/themes/consultix/images/no-image-found-360x250.png"} alt="" />
            </div>
            <div className="right">
              <form>
                <div className="formInput">
                  <label htmlFor="file">Image: <DriveFolderUploadIcon className='icon'/></label>
                  <input type="file" onChange={e=>setFile(e.target.files[0])}  id="file" style={{display:"none"}} />
                </div>
                
                {console.log('input',inputs)}  
                {inputs.map(input=>(
                  <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
                  ))}
                
                <button>Send</button>
              </form>
              </div>
          </div>
        </div>
    </div>
  )
}

export default New