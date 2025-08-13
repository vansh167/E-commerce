import React from 'react';
import './Popular.css';
import data_product from '../../Assets/Frontend_Assets/data';
import Item from '../pages/Item';

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item"> {/* ✅ match CSS exactly */}
        {data_product.slice(0, 4).map((item, i) => ( // ✅ show only first 4
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
