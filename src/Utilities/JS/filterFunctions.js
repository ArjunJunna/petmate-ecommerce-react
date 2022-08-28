const filterDataBySort = (data, sortFrom) => {
  if (sortFrom === 'HIGH_TO_LOW') {
    return [...data].sort(
      (a, b) => b['discountedPrice'] - a['discountedPrice']
    );
  } else if (sortFrom === 'LOW_TO_HIGH') {
    return [...data].sort(
      (a, b) => a['discountedPrice'] - b['discountedPrice']
    );
  } else {
    return data;
  }
};

const filterDataByPricing = (data, pricing) => {
  switch (pricing) {
    case 'under ₹ 100':
      return data.filter(product => product.discountedPrice < 100);

    case '₹ 100 - ₹ 200':
      return data.filter(
        product =>
          product.discountedPrice >= 100 && product.discountedPrice < 200
      );

    case '₹ 200 - ₹ 300':
      return data.filter(
        product =>
          product.discountedPrice >= 200 && product.discountedPrice < 300
      );

    case '₹ 300 - ₹ 400':
      return data.filter(
        product =>
          product.discountedPrice >= 300 && product.discountedPrice < 400
      );

    case '₹ 400 - ₹ 500':
      return data.filter(
        product =>
          product.discountedPrice >= 400 && product.discountedPrice < 500
      );

    default:
      return data;
  }
};

const filterDataByRating = (data, rating) => {
  return data.filter(item => rating >= item.rating);
};

const filterBySelectedCategories = (data, selectedCategories) => {
  if (!selectedCategories.length) {
    return data;
  } else {
    let selectedData = selectedCategories.map(category =>
      data.filter(item => item.category === category)
    );
    return selectedData.reduce((acc, curr) => {
      return [...acc, ...curr];
    }, []);
  }
};

const filterBySearch = (data, searchFor) => {
  if (searchFor === '') {
    return data;
  } else {
    return data.filter(item =>
      item.title.toLowerCase().includes(searchFor.toLowerCase())
    );
  }
};

const filterDataByExcludingOutOfStock = (data, excludeOutOfStock) => {
  if (excludeOutOfStock === 'EXCLUDE_OUT_OF_STOCK') {
    return data.filter(product => product.inStock === true);
  } else {
    return data;
  }
};

export {
  filterDataBySort,
  filterBySelectedCategories,
  filterDataByRating,
  filterDataByPricing,
  filterBySearch,
  filterDataByExcludingOutOfStock,
};
