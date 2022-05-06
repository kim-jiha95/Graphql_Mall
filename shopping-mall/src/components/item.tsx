import { Product } from "../types"

const ProductItem = ({
    category,
    description,
    title,
    image,
    price,
    rating,
}: Product) => (
    <li className="product-item">
        <p className="product-item__category">{category}</p>
        <p className="product-item__title">{title}</p>
        <p className="product-item__description">{description}</p>
        <img className="product-item__image" src={image} />
        <span className="product-item__price">${price}</span>
        <span className="product-item_rating">{rating.rate}</span>
    </li>

)

export default ProductItem