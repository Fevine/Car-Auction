import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import { UserProvider } from './Context/userContext.jsx';
import './index.scss';
import { ProductProvider } from './Context/productContext.jsx';
import { ShopFilterProvider } from './Context/shopFiltersContext.jsx';
import { QueryProvider } from './Context/queryContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HelmetProvider>
      <UserProvider>
        <ProductProvider>
          <ShopFilterProvider>
            <QueryProvider>
              <App />
            </QueryProvider>
          </ShopFilterProvider>
        </ProductProvider>
      </UserProvider>
    </HelmetProvider>
  </BrowserRouter>
)
