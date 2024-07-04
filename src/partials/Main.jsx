import React from "react";
import { List } from "../components/List";
import { Sort } from "../components/Sort";
import { Map } from "./Map";

const Main = () => {
    const [cars, setCars] = React.useState([]);

    React.useEffect(() => {
      fetch('https://test.tspb.su/test-task/vehicles')
        .then(response => response.json())
        .then(function (data) {
          setCars(data);
        })
        .catch((err) => {
          console.error(err)
        })
    }, [])
  
    const sortCarsList = (value) => {
      setCars(prevCars => {
        switch (value) {
          case 'year-desc':
            return [...prevCars].sort((a, b) => b.year - a.year);
          case 'year-asc':
            return [...prevCars].sort((a, b) => a.year - b.year);
          case 'price-desc':
            return [...prevCars].sort((a, b) => b.price - a.price);
          case 'price-asc':
            return [...prevCars].sort((a, b) => a.price - b.price);
          default:
            return [...prevCars].sort((a, b) => a.id - b.id);
        }
      });
    }

    const carDelete = (id) => {
      setCars(prevCars => prevCars.filter(car => car.id !== id));
    };

    return (
        <main className="content bg-body py-5">
          <section className="section-cars pb-5">
            <div className="container-xxl">
                <Sort sortCars={sortCarsList} />
                <List cars={cars} carDelete={carDelete}/>        
            </div>
          </section>
          <section className="section-map">
            <div className="container-xxl">
              <Map cars={cars}/>
            </div>
          </section>
        </main>
       
    );
}
  
export { Main }