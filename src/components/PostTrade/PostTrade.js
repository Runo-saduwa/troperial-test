import React from 'react';
import './PostTrade.css';
import HybridInput from '../HybridInput/HybridInput';
import CustomButton from '../CustomButton/CustomButton';
import inputOutput from '../../assets/images/troperial-input-output-1.PNG';
const PostTrade = () => {
  return (
    <div className="post__listing-container">
      <h2>Post a Listing</h2>
      <HybridInput line={true} />
      <HybridInput line={true} />
      <h4>Prefferd exchange rate</h4>
      <div class="inline_hybridInput">
        <HybridInput inputWidth="20%" />
        <img src={inputOutput} alt="I/O" />
        <HybridInput inputWidth="20%" />
      </div>
      <CustomButton loading={false}>Post this Trade</CustomButton>
    </div>
  );
};

export default PostTrade;
