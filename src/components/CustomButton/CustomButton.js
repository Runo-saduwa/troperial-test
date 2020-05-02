import React from 'react';
import './CustomButton.css';
import PulseLoader from 'react-spinners/PulseLoader';
const CustomButton = ({
  children,
  disable,
  loading,
  onClickHandler,
  padding,
  fontSize
}) => {
  return (
    <button
      onClick={onClickHandler}
      className="customButton"
      disabled={disable}
      style={{padding, fontSize}}
    >
      <PulseLoader size={10} color={'#fff'} loading={loading} />
      {!loading && children}
    </button>
  );
};

CustomButton.defaultProps = {
  padding: "13px",
  fontSize: "medium"
}
export default CustomButton;
