
import React, { useState } from "react";
import {AiOutlineClose} from "react-icons/ai"
function MyComponent() {
  const [modal, setModal] = useState(false);
  const handleModal = ()=>{
    setModal(!modal)
  }

  return (
    <div>
      <button onClick={handleModal}>Login</button>

      {
        modal && <div className="loginModal"> 
        
        <button onClick={handleModal} className="close"><AiOutlineClose/></button>
        </div>
    }
    </div>
  );
}

export default MyComponent;


