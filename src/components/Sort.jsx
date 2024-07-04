import React from "react";

const Sort = ({ sortCars }) => {
    const [selectedValue, setSelectedValue] = React.useState('default');

    const handleChange = (ev) => {
        const { value } = ev.target;
        setSelectedValue(value);
        sortCars(value);
    }

    return (
        <div className="mb-3 d-flex justify-content-end gap-3">
            <label>
                <span className="mb-2 d-inline-block">Сортировка</span>
                <select className="form-select form-select-sm" style={{ maxWidth: '250px' }} name="sort" onChange={handleChange} value={selectedValue}>
                    <option value="default">По умолчанию</option>
                    <option value="year-desc"> Год по убыванию</option>
                    <option value="year-asc">Год по возрастанию</option>
                    <option value="price-desc">Цены по убыванию</option>
                    <option value="price-asc">Цены по возрастанию</option>
                </select>
            </label>
        </div>
    );
};

export { Sort }