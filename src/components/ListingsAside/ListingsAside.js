import React from 'react';
import './ListingsAside.css';
import verifyIcon from '../../assets/images/troperial-verified.PNG';
import  HybridInput from '../HybridInput/HybridInput';
import CustomButton from '../CustomButton/CustomButton'
//troperial-large-screen-verified
const ListingsAside = ({ children, onClick }) => {
  return (
    <aside className="listings__aside-container">
        {/* <div>
        <h2>Post a Listing</h2>
            <HybridInput line={true}/>
            <HybridInput line={true}/>

            <h4>Prefferd exchange rate</h4>
            <HybridInput />
            <div>
            </div>
            <HybridInput />

            <CustomButton loading={false}>
              Post this Trade
            </CustomButton>

        </div> */}
      <div className="listings__mobile-verified">
        <img src={verifyIcon} alt="verify your account" />
        <p>Verify your account</p>
      </div>
      <div className="listings__largeScreen-verified">
        <div>
          <img
            className="listings__aside--verify-image"
            src={verifyIcon}
            alt="verify your account"
          />
          <h2 className="listings__aside--verify-title">
            Verify your account
          </h2>
          <p className="listings__aside--verify-p">
            Verify your acccount to show your listings on the exchange
            floor instantly and increase your listing limit
          </p>
          <button
            className="listings__aside--verify-btn"
            onClick={onClick}
          >
            Verify Account
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ListingsAside;
