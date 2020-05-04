import React from 'react';
import './ListingsAside.css';
import verifyIcon from '../../assets/images/troperial-mobile-verified.PNG'

const ListingsAside = ({children}) => {
    return (
       <aside className="listings__aside-container">
           <div className="listings__mobile-verified">
               <img src={verifyIcon} alt="verify your account"/>
               <p>Verify your account</p>
           </div>
           {children}
       </aside>
    )
}

export default ListingsAside
