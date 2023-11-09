import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaBlock/PizzaSkeleton';

function Home() {
  const [pizzas, setPizzas] = React.useState([]);
  const [isPizzasLoading, setPizzasLoadin] = React.useState(true);

  React.useEffect(() => {
    fetch('https://65469d03fe036a2fa955e4b7.mockapi.io/pizzas')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setPizzas(arr);
        setPizzasLoadin(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isPizzasLoading
          ? [...new Array(6)].map((_, index) => {
              return <PizzaSkeleton key={index} />;
            })
          : pizzas.map((pizza) => {
              return <PizzaBlock key={pizza.id} {...pizza} />;
            })}
      </div>
    </>
  );
}

export default Home;
