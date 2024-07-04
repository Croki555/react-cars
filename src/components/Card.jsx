import React from "react";

const Card = ({ id, name, model, year, color, price, latitude, longitude, onCardChange, onCardDelete, imgSrc: src }) => {

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        let cleanedValue = value;
    
        if (name === 'price') {
            cleanedValue = cleanedValue.replace(/\D/g, ''); 
            cleanedValue = parseInt(cleanedValue, 10).toLocaleString();
            ev.target.value = cleanedValue;
        }
    
        onCardChange(id, name, cleanedValue);
    };
    
   

    const handleClick = () => {
        onCardDelete(id);
    }
    
    return (
        <div className="col">
            <div className="card h-100 position-relative bordered-5" id={id}>
                <button className="btn btn-sm position-absolute top-0 end-0" style={{ zIndex: 1000 }} onClick={handleClick}>❌</button>
                <div className="card-header p-3">
                    <div className="mb-2 d-flex gap-2 justify-content-start">
                        <input className="form-control bg-transparent border-0 fw-semibold text-center" type="text" id={name}  name="name" value={name} onChange={handleChange}/>
                        <input className="form-control bg-transparent border-0 fw-semibold text-center" type="text" id={name} name="model" value={model} onChange={handleChange}/>
                    </div>                    
                    <img className="img-fluid w-100 mb-1" src={src} alt={`Машина ${name}`} style={{ height: '200px' }}/>
                    <div className="text-end">
                        <span className="text-secondary">{year} год</span>
                    </div>
                </div>
                <div className="card-body">
                    <div className="mb-2">
                        <p className="mb-0">Цвет: <span className="d-inline-block rounded-circle border" style={{ width:'15px', height: '15px', backgroundColor: `${color}` }}></span></p>
                    </div>
                    <div className="mb-2">
                        <p className="mb-0">Широта: <span className="d-inline-block rounded-circle">{latitude}</span></p>
                    </div>
                    <div className="mb-2">
                        <p className="mb-0">Долгота: <span className="d-inline-block rounded-circle">{longitude}</span></p>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="d-flex gap-2 align-items-center">
                        <input className="form-control bg-transparent border-0 fw-semibold fs-4 text-end" type="text" id={name} name="price" value={price.toLocaleString()} onChange={handleChange}/>
                        <span className="d-inline-block fs-4">₽</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Card };