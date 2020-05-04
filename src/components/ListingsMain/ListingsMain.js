import React from 'react';
import './ListingsMain.css';

const ListingsMain = ({children}) => {
    return (
        <main className="listing__main-container">
            {/* Banner component */}
            {children}
        </main>
    )
}

export default ListingsMain
