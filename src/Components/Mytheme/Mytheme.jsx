import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./mytheme.css";

const Mytheme = () => {
  const switchTheme = (e) => {
    if (e.target.checked) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  };

  return (
    <div className="wrapper">
      <FaSun className="theme-icon sun" />

      <label className="switch">
        <input type="checkbox" onChange={switchTheme} />
        <span className="slider round"></span>
      </label>

      <FaMoon className="theme-icon moon" />
    </div>
  );
};

export default Mytheme;


// import React from 'react';
// import './mytheme.css'

// const Mytheme = () => {

//        const switchTheme = (e) =>{
//         if(e.target.checked){
//             document.querySelector('body').setAttribute('data-theme','dark')
//         }
//         else{
//              document.querySelector('body').setAttribute('data-theme','light')
//         }


//     }
//     return (
//           <div className="wrapper">
//                <label className="switch">
//                <input type="checkbox" onChange={switchTheme}/>
//                 <span className="slider round"></span>
//                </label>



//         </div>
//     );
 
// };

// export default Mytheme;