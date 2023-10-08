// Layout.js

import React from 'react';
import Navigation from './components/Navigation/navigation';
import Airlines from './components/Airlines/Airlines';
import Category from './components/Category/Category';
import Services from './components/Services/Services';
import HoneymoonSpecials from './components/HoneymoonSpecials/HoneymoonSpecials';
import Sepratir from './components/Sepratir/Sepratir';
import Promotion from './components/Promotion/Promotion';
import Explore from './components/Explore/Explore';
import Client from './components/Clients/Client';
import Footer from './components/Footer/Footer';
import Trips from './components/Trips/Trips';
import Products from './components/Products/Products';
import { Outlet } from 'react-router-dom';

function Layout({ data }) {
  return (
    <div>
      <Navigation />
      <Airlines />
      <Category />
      <Services />
      <HoneymoonSpecials />
      <Trips />
      <Sepratir />
      <Promotion />
      <Explore />
      <div id="products">
        <Products products={data} />
      </div>
      <Client />
      <Footer />
      <Outlet />
    </div>
  );
}

export default Layout;
