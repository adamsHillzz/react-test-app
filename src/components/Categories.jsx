import React from 'react';
import { menu } from '../data/menu.data';

function Categories() {
  const [currentCategory, setCurrentCategory] = React.useState(0);

  return (
    <div className="categories">
      <ul>
        {menu.map((category, index) => {
          return (
            <li
              key={category}
              onClick={() => setCurrentCategory(index)}
              className={index === currentCategory ? 'active' : ''}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
