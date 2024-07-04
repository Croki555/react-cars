import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import images from '../images.js';

const List = ({ cars, carDelete }) => {
    const [loadedCars, setLoadedCars] = useState(8); 
    const [carsList, setCarsList] = useState(cars.slice(0, loadedCars));

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200) {
            setLoadedCars(prevLoadedCars => prevLoadedCars + 4); 
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); 

    useEffect(() => {
        setCarsList(cars.slice(0, loadedCars));
    }, [loadedCars, cars]);

    const handleCardChange = (id, name, value) => {
        setCarsList(prevCars => 
            prevCars.map(car => 
                car.id === id ? { ...car, [name]: value } : car
            )
        );
    };

    const handleCardDelete = id => {
        carDelete(id);
    };

    return (
        <div className="mb-3">
            {carsList.length ? (
                <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-4 g-3">
                    {carsList.map(car => (
                        <Card key={car.id} {...car} onCardChange={handleCardChange} onCardDelete={handleCardDelete} imgSrc={images[car.id]} />
                    ))}
                </div>
            ) : (
                <h4 className="m-0 text-primary">Cars not found!</h4>
            )}
        </div>
    );
};

export { List };