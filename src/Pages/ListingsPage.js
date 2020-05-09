import React, { Fragment, useEffect } from 'react';
import Listings from '../containers/Listings/Listings';
import axios from 'axios';
const test = []
const ListingsPage = () => {
  useEffect(() => {
    const test = async () => {
    const data = await axios.get('https://transactions.api.troperial.com/transactions/paged?page=1&size=5')
      console.log(data);
    }
    test()
  },[])
  return (
    <Fragment>
      <Listings/>
    </Fragment>
  );
};

export default ListingsPage;
