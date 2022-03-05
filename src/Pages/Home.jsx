import React from 'react';

import Product from '../Component/Product';

const Home = () => {
  return(
    <div>
      <h1>Homepage</h1>
      <p>Fungsional Component</p>
      {<Product 
      stock="10"
      />}
    </div>
  
};
export default Home;
