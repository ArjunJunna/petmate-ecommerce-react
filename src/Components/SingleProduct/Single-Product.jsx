const SingleProduct = ({
  product: {
    _id,
    title,
    image,
    price,
    discount,
    rating,
    description,
    discountedPrice,
    categoryName,
  },
}) => {
  return (
    <article className="component">
      <div className="card__container" key={_id}>
        <div className="card-header">
          <img src={image} alt="productimage" className="card-image" />
          <span className="card-badge">
            {rating} <i class="fas fa-star" aria-hidden="true"></i>
          </span>
        </div>
        <div className="card-details">
          <h2 className="detail-heading">{title}</h2>
          <p className="detail-subheading">{description}</p>
        </div>
        <div className="card-footer">
          <div className="price-segment">
            <span className="item-price">&#x20b9;{`${discountedPrice}`}</span>
            <span className="item-price dashed">
              {discountedPrice === price ? '' : `₹${price}`}
            </span>
            <span className="item-price discount">
              {discount === 0 ? '' : ` ${discount}%`}
            </span>
          </div>
          <div className="card-icons">
            <i className="bi bi-heart"></i>
            <i className="bi bi-cart"></i>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleProduct;
