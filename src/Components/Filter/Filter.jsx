import React from 'react';
import '../Filter/Filter.css';
import { useDataContext } from '../../Context/dataContext';

function Filter() {
  const {
    state: { sortFrom, categories, selectedCategories, pricing, rating, excludeOutOfStock,},
    dispatch,
  } = useDataContext();

  const categoryHandler = categoryName => {
    if (selectedCategories.includes(categoryName)) {
      return selectedCategories.filter(category => category !== categoryName);
    } else {
      selectedCategories.push(categoryName);
      return selectedCategories;
    }
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__container">
          <div className="sidebar-header">
            <h5 className="sidebar-h5">Filters</h5>
            <button
              className="sidebar--btn"
              onClick={() => dispatch({ type: 'CLEAR' })}
            >
              Clear
            </button>
          </div>

          <div className="sidebar-block">
            <h5 className="sidebar-h5">Category</h5>
            <ul>
              {categories.map(category => {
                return (
                  <li>
                    <input
                      type="checkbox"
                      className="sub-option"
                      id={category._id}
                      value={category.categoryName}
                      checked={selectedCategories.includes(
                        category.categoryName
                      )}
                      onChange={e =>
                        dispatch({
                          type: 'SORT_BY_CATEGORIES',
                          payload: categoryHandler(e.target.value),
                        })
                      }
                    />
                    <label
                      className="sidebar-label"
                      key={category._id}
                      htmlFor={category._id}
                    >
                      {category.categoryName}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sidebar-block">
            <h5 className="sidebar-h5">Sort By</h5>
            <ul>
              <li>
                <input
                  type="radio"
                  className="sub-option"
                  name="sortPrice"
                  id="LOW_TO_HIGH"
                  onChange={() => dispatch({ type: 'LOW_TO_HIGH' })}
                  checked={sortFrom === 'LOW_TO_HIGH'}
                />
                <label className="sidebar-label" htmlFor="LOW_TO_HIGH">
                  Price - Low to High
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  className="sub-option"
                  name="sortPrice"
                  id="HIGH_TO_LOW"
                  onChange={() => dispatch({ type: 'HIGH_TO_LOW' })}
                  checked={sortFrom === 'HIGH_TO_LOW'}
                />
                <label className="sidebar-label" htmlFor="HIGH_TO_LOW">
                  Price - High to Low
                </label>
              </li>
            </ul>
          </div>
          <div className="sidebar-block">
            <h5 className="sidebar-h5">Availability</h5>
            <ul>
              <li>
                <input
                  type="checkbox"
                  className="sub-option"
                  onChange={() => dispatch({ type: 'EXCLUDE_OUT_OF_STOCK' })}
                  checked={excludeOutOfStock === 'EXCLUDE_OUT_OF_STOCK'}
                />
                <label className="sidebar-label">Exclude out of Stock</label>
              </li>
            </ul>
          </div>
          <div className="sidebar-block">
            <h5 className="sidebar-h5">Ratings</h5>
            <div className="slidercontainer">
              <div className="slider__label-container">
                <label htmlFor="slider--range ">1</label>
                <label htmlFor="slider--range ">2</label>
                <label htmlFor="slider--range ">3</label>
                <label htmlFor="slider--range ">4</label>
                <label htmlFor="slider--range ">5</label>
              </div>

              <input
                type="range"
                min="1"
                max="5"
                step="1"
                defaultValue="0"
                className="slider"
                id="myRange"
                value={rating}
                style={{
                  background: `linear-gradient(
                                            to right,
                                            var(--primary-bg-color) ${
                                              ((rating - 1) / 4) * 100
                                            }%,
                                            var(--slider-bg-color) ${
                                              ((rating - 1) / 4) * 100
                                            }%
                                        )`,
                }}
                onChange={e =>
                  dispatch({ type: 'RATING', payload: e.target.value })
                }
              />
            </div>
          </div>
          <div className="sidebar-block">
            <h5 className="sidebar-h5">Pricing</h5>
            <ul>
              <li>
                <input
                  type="radio"
                  id="under ₹ 100"
                  name="pricing"
                  className="sub-option"
                  checked={pricing === 'under ₹ 100'}
                  onChange={() =>
                    dispatch({ type: 'PRICING', payload: 'under ₹ 100' })
                  }
                />
                <label htmlFor="under ₹ 100" className="sidebar-label">
                  Under &#8377;100
                </label>
              </li>

              <li>
                <input
                  type="radio"
                  id="₹ 100 - ₹ 200"
                  name="pricing"
                  className="sub-option"
                  checked={pricing === '₹ 100 - ₹ 200'}
                  onChange={() =>
                    dispatch({ type: 'PRICING', payload: '₹ 100 - ₹ 200' })
                  }
                />
                <label htmlFor="₹ 100 - ₹ 200" className="sidebar-label">
                  &#8377;100 - &#8377;200
                </label>
              </li>

              <li>
                <input
                  type="radio"
                  id="₹ 200 - ₹ 300"
                  name="pricing"
                  className="sub-option"
                  checked={pricing === '₹ 200 - ₹ 300'}
                  onChange={() =>
                    dispatch({ type: 'PRICING', payload: '₹ 200 - ₹ 300' })
                  }
                />
                <label for="₹ 200 - ₹ 300" className="sidebar-label">
                  &#8377;200 - &#8377;300
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="300 - ₹ 400"
                  name="pricing"
                  className="sub-option"
                  checked={pricing === '₹ 300 - ₹ 400'}
                  onChange={() =>
                    dispatch({ type: 'PRICING', payload: '₹ 300 - ₹ 400' })
                  }
                />
                <label for="300 - ₹ 400" className="sidebar-label">
                  &#8377;300 - &#8377;400
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="400 - ₹ 500"
                  name="pricing"
                  className="sub-option"
                  checked={pricing === '₹ 400 - ₹ 500'}
                  onChange={() =>
                    dispatch({ type: 'PRICING', payload: '₹ 400 - ₹ 500' })
                  }
                />
                <label for="400 - ₹ 500" className="sidebar-label">
                  &#8377;400 - &#8377;500
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
