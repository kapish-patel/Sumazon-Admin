import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { CheckCircleOutline, Cancel } from "@mui/icons-material";
import { Rating } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../Redux/slice/productsSlice';
import { useEffect, useState } from 'react';
import { updateProduct } from '../../Redux/slice/productsSlice';

function Product() {
    const dispatch = useDispatch();
    const { productId } = useParams();

    const productDetails = useSelector((state) => state.products.selectedProduct);
    const productStatus = useSelector((state) => state.products.productStatus);

    const [isEditing, setIsEditing] = useState(false);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [title, setTitle] = useState('');
    const [stars, setStars] = useState(0);
    const [isBestSeller, setBestSeller] = useState(false);
    const [imgUrl, setImgUrl] = useState('');

    useEffect(() => {
        if (productId) {
            dispatch(getProduct(productId));
        }
    }, [dispatch, productId]);

    useEffect(() => {
        if (productStatus === 'Succeeded' && productDetails) {
            setDescription(productDetails.description || '');
            setPrice(productDetails.price || '');
            setCategory(productDetails.category || '');
            setQuantity(productDetails.quantity || '');
            setTitle(productDetails.productName || '');
            setStars(productDetails.ratings || 0);
            setBestSeller(productDetails.bestSeller || false);
            setImgUrl(productDetails.productImage || '');
        }
    }, [productDetails, productStatus]);

    const handleSaveBtn = () => {
        const change = {
                id: productId,
                productName: title,
                quantity: quantity,
                price: price,
                description: description,
        }
        dispatch(updateProduct(change))      
        setIsEditing(false);  
    };

    return (
        <div className="main-content-container">
            <div className="product-container">
                <div className="product-header">
                    <p>Product Page # {productId}</p>
                    <button onClick={() => setIsEditing(!isEditing)}>
                        <FontAwesomeIcon icon={faPenToSquare} /> {isEditing ? 'Cancel' : 'Edit'}
                    </button>
                </div>
                <div className="product-body product-content">
                    <div className="product-image">
                        <img src={imgUrl} alt={title} />
                    </div>
                    <div className="product-details product-page-details">
                        <div className="info-section">
                            <label>Product Name:</label>
                            <input
                                type="text"
                                className={isEditing ? "info-input" : "info"}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                readOnly={!isEditing}
                            />
                        </div>
                        <div className="info-section">
                            <label>Product Description:</label>
                            <textarea
                                type="text"
                                className={isEditing ? "info-input" : "info"}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                readOnly={!isEditing}
                            />
                        </div>
                        <div className="info-section">
                            <label>Product Price:</label>
                            <input
                                type="text"
                                className={isEditing ? "info-input" : "info"}
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                readOnly={!isEditing}
                            />
                        </div>
                        <div className="info-section">
                            <label>Product Category:</label>
                            <p>{category}</p>
                        </div>
                        <div className="info-section">
                            <label>Product Quantity:</label>
                            <input
                                type="text"
                                className={isEditing ? "info-input" : "info"}
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                readOnly={!isEditing}
                            />
                        </div>
                        <div className="info-section">
                            <label>Star Rating:</label>
                            <Rating
                                name={`rating-${productId}`}
                                value={stars}
                                precision={0.1}
                                readOnly={!isEditing}
                            />
                        </div>
                        <div className="info-section">
                            <label>Is Best Selling:</label>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                {isBestSeller ? 
                                    <CheckCircleOutline style={{ color: "green" }} /> : 
                                    <Cancel style={{ color: "red" }} />
                                }
                            </div>
                        </div>
                        <div className="info-section">
                            {isEditing && 
                                <button className="save-button" onClick={handleSaveBtn}>Save</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
