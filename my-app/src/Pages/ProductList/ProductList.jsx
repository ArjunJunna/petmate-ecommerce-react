import React from 'react';
import './ProductList.css';
import Filter from '../../Components/Filter/Filter';
import SingleProduct from '../../Components/SingleProduct/Single-Product';
import { useDataContext } from '../../Context/dataContext';
import {
  filterDataByExcludingOutOfStock,
  filterDataBySort,
  filterBySelectedCategories,
  filterDataByRating,
  filterDataByPricing,
  filterBySearch,
} from '../../Utilities/JS/filterFunctions';

const ProductList = () => {
  const {
    state: {
      data,
      isLoading,
      sortFrom,
      excludeOutOfStock,
      pricing,
      selectedCategories,
      rating,
      searchFor,
    },
  } = useDataContext();

  const filteredBySelectedCategories = filterBySelectedCategories(
    data,
    selectedCategories
  );
  const filteredDataBySort = filterDataBySort(
    filteredBySelectedCategories,
    sortFrom
  );
  const filteredDataByExcludingOutOfStock = filterDataByExcludingOutOfStock(
    filteredDataBySort,
    excludeOutOfStock
  );
  const filteredDataByPricing = filterDataByPricing(
    filteredDataByExcludingOutOfStock,
    pricing
  );
  const filteredDataByRating = filterDataByRating(
    filteredDataByPricing,
    rating
  );

  const finalData = filterBySearch(filteredDataByRating, searchFor);

  return (
    <>
      <Filter />

      <main>
        {isLoading ? (
          <img
            className="loader--image"
            src="https://cutewallpaper.org/21/loading-gif-transparent-background/HopeWell.gif"
            alt="loader"
          />
        ) : (
          <>
            {finalData.length ? (
              <div className="products">
                {finalData.map(product => (
                  <SingleProduct product={product} key={product._id} />
                ))}
              </div>
            ) : (
              <h1>Oops!!! This product section is currently unavailable...</h1>
            )}
          </>
        )}
      </main>
    </>
  );
};

export default ProductList;
