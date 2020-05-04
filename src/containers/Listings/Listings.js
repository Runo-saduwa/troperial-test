import React, { Fragment } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './Listings.css';
import ListingsAside from '../../components/ListingsAside/ListingsAside';
import ListingsMain from '../../components/ListingsMain/ListingsMain';
import Container from '../../components/Container/Container';
import TableContent from '../../components/TableContent/TableContent'
import TableHead from '../../components/TableHead/TableHead';
import Banner from '../../components/Banner/Banner'

const Listings = () => {
    return (
      <Fragment>
        <NavBar />
        <Container>
          <div className="listingsCustom__container">
            <ListingsAside />
            <ListingsMain>
              <Banner/>
              {/* ---------------------------- */}
              {/* links to listings and my lisitnngs */}
              {/* --------------------------- */}
              {/*a container div to hold */}
              <div className="table-container">
                <TableHead/>
                <TableContent/>
                <TableContent/>
                <TableContent/>
                <TableContent/>
                <TableContent/>
              </div>
            </ListingsMain>
          </div>
        </Container>
      </Fragment>
    );
  };
  
  export default Listings;