import React, { useState, useEffect } from 'react';
import productsData from '../Data/productsList.json';
import '../Styles/ProductFilter-output.css';

function ProductFilter() { 

    const [items, setItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        setItems(productsData); // Set the state with the imported JSON data
      }, []);

        // Filter product list by category and price selection
        const filteredCategory = productsData.filter((item) => {

        const productPrice = item.price;
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);

        const meetsMin = isNaN(min) || productPrice >= min;
        const meetsMax = isNaN(max) || productPrice <= max;

        // Filter product categories and prices
        if (selectedCategory === "All") {
            return true && (meetsMax && meetsMin);
        } else {
            return (item.category === selectedCategory) && (meetsMax && meetsMin);
        }
    });
    

     return (
        <>
            <div className="pt-25 px-4">
                <form className="max-w-sm mx-auto pb-3">
                    <label htmlFor="categorySelect" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select name="categorySelect" aria-label="Select by Category" onChange={(e) => setSelectedCategory(e.target.value)} className="dropdown-select">
                        <option value="All">Select by category - All</option>
                        <option value="Apparel">Apparel</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Home Goods">Home Goods</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Sports">Sports</option>
                    </select>
                </form>
            </div>
            <div className="inline-flex px-4">   
                <div className="flex justify-center gap-x-5">
                <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="input-field"
                    aria-label="minimum price"
                    />
                    <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="input-field"
                    aria-label="maximum price"
                />
                </div>
            </div>
            <div className="flex flex-col p-8 md:py-15 items-center text-center">
                <h2 className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white" aria-label="List of products">List of Products</h2>
                <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                    {filteredCategory.map(item => (
                    <li key={item.id} className="card">
                        <img src={item.imageUrl} className='object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg' alt={item.name} />
                        <div className='card-container'>
                            <h5 className="card-title" aria-label={item.name}>{item.name}</h5>
                            <span className="card-price" aria-label={item.price}>${item.price}</span>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ProductFilter;