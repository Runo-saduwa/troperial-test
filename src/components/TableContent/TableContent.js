import React, {Fragment} from 'react'
import './TableContent.css';

const TableContent = () => {
    return (
        <Fragment>
            <div className="tableContent__container">
             <div>
                  <p className="tableContent__mobile-title">Have</p>
                  <p class="tableContent__table-value">$1500</p>
              </div>
              <div>
                  <p className="tableContent__mobile-title">Need</p>
                  <p class="tableContent__table-value">(NGN) Nigerian Naira</p>
              </div>
             <div className="auxilliary__div-container">
                <div className="auxilliary-div"></div>
             </div>
             <div className="auxilliary__div-container">
                <div className="auxilliary-div"></div>
             </div>
              <div>
                  <p className="tableContent__mobile-title">Preferred Rate</p>
                  <p class="tableContent__table-value">1 USD > NGN470</p>
              </div>
              <div>
                  <p className="tableContent__mobile-title">By</p>
                  <p class="tableContent__table-value">@Runo</p>
              </div>
              <div>
                  <p className="tableContent__mobile-title">status</p>
                  <p class="tableContent__table-value">Pending</p>
              </div>
              <div>
                  <p className="tableContent__mobile-title">Action</p>
                 <a href="#">show matches</a>
                 <a href="#">Delete</a>
                 <a href="#">Edit</a>
              </div>
            </div>
        </Fragment>
    )
}

export default TableContent
