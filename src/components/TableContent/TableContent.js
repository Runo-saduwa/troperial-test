import React, { Fragment } from 'react';
import './TableContent.css';

const TableContent = ({
  have,
  need,
  rate,
  by,
  status,
  userListings,
}) => {
  return (
    <Fragment>
      <div className="tableContent__container">
        <div>
          <p className="tableContent__mobile-title">Have</p>
          {have && <p className="tableContent__table-value">{have}</p>}
        </div>
        <div>
          <p className="tableContent__mobile-title">Need</p>
          {need && <p className="tableContent__table-value">{need}</p>}
        </div>
        <div className="auxilliary__div-container">
          <div className="auxilliary-div"></div>
        </div>
        <div className="auxilliary__div-container">
          <div className="auxilliary-div"></div>
        </div>
        <div>
          <p className="tableContent__mobile-title">Preferred Rate</p>
          {rate && <p className="tableContent__table-value">{rate}</p>}
        </div>
        {userListings === true ? null : (
          <div>
            <p className="tableContent__mobile-title">By</p>
            {by && <p className="tableContent__table-value">{by}</p>}
          </div>
        )}
        <div>
          <p className="tableContent__mobile-title">status</p>
          {status && (
            <p className="tableContent__table-value">{status}</p>
          )}
        </div>
        <div>
          <p className={`tableContent__mobile-title ${userListings == true ? null : "hide"}`}>Action</p>
          {userListings === true ? (
            <div className="action_btns">
              <button className="show__matches__btn">
                Show Matches
              </button>
              <button className="edit__btn">Edit</button>
              <button className="delete__btn">Delete</button>
            </div>
          ) : null}

          {userListings === true ? null : (
            <button className="send__message__btn">
              Send Message
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default TableContent;
