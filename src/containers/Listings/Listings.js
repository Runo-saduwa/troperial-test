import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TableContent from '../../components/TableContent/TableContent';
import Container from '../../components/Container/Container';
import TableHead from '../../components/TableHead/TableHead';
import AppAside from '../../components/AppAside/AppAside';
import BackDrop from '../../components/BackDrop/BackDrop';
import AppMain from '../../components/AppMain/AppMain';
import Banner from '../../components/Banner/Banner';
import NavBar from '../../components/NavBar/NavBar';
import './Listings.css';

const Listings = () => {
  const [showBackDrop, setShowBackDrop] = useState(false);
  const handleBackDrop = () => {
    const show = showBackDrop;
    setShowBackDrop(!show);
  };

  return (
    <Container showBackDrop={showBackDrop}>
      <NavBar />
      {showBackDrop ? (
        <BackDrop handleBackDrop={handleBackDrop} />
      ) : null}
      <div className="listingsCustom__container">
        <AppAside />
        <AppMain>
          <Banner onClick={handleBackDrop} />
          <Tabs>
            <TabList>
              <Tab>All Listings</Tab>
              <Tab>My Listings</Tab>
            </TabList>

            <TabPanel>
              <h2>All Listings</h2>
              <div className="table-container">
                <TableHead userListing={false} />
                <TableContent
                  have="$1500"
                  need="(NGN) Nigerian naira"
                  rate="1 USD > NGN 470"
                  by="@runo"
                  status="Pending"
                  userListings={false}
                />
                <TableContent
                  have="$1500"
                  need="(NGN) Nigerian naira"
                  rate="1 USD > NGN 470"
                  by="@runo"
                  status="Pending"
                  userListings={false}
                />
                <TableContent
                  have="$1500"
                  need="(NGN) Nigerian naira"
                  rate="1 USD > NGN 470"
                  by="@runo"
                  status="Pending"
                  userListings={false}
                />
                <TableContent
                  have="$1500"
                  need="(NGN) Nigerian naira"
                  rate="1 USD > NGN 470"
                  by="@runo"
                  status="Pending"
                  userListings={false}
                />
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
              <div className="table-container">
                <TableHead userListing={true} />
                <TableContent
                  have="$1500"
                  need="(NGN) Nigerian naira"
                  rate="1 USD > NGN 470"
                  status="Pending"
                  userListings={true}
                />
              </div>
            </TabPanel>
          </Tabs>
        </AppMain>
      </div>
    </Container>
  );
};

export default Listings;
