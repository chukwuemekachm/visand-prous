import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './organisms/NavBar/NavBar';
import Banner from './molecules/Banner/Banner';
import Item from './molecules/Item/Item';
import Flex from './_layouts/Flex';


const item = {
  thumbnail: 'https://www.w3schools.com/w3images/jeans2.jpg',
  price: '16.00',
  name: 'Mega Ripped Jeans',
};
const item2 = {
  thumbnail: 'https://www.w3schools.com/w3images/jeans1.jpg',
  price: '14.00',
  name: 'Ripped Skinny Jeans',
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Banner />
          <Flex justifyContent="space-around">
            <Item item={item} />
            <Item item={item2} />
            <Item item={item} />
            <Item item={item} />
            <Item item={item2} />
            <Item item={item} />
            <Item item={item} />
            <Item item={item} />
          </Flex>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
