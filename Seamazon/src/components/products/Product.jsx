import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { CheckCircleOutline, Cancel } from "@mui/icons-material";
import { Rating } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, updateProduct } from '../../Redux/slice/productsSlice';
import { useEffect, useState } from 'react';

function Product() {
    const dispatch = useDispatch();
    const { productId } = useParams();

    const productDetails = useSelector((state) => state.products.selectedProduct);

    const [isEditing, setIsEditing] = useState(false);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [title, setTitle] = useState('');
    const [stars, setStars] = useState(0);
    const [isBestSeller, setBestSeller] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    const [newImage, setNewImage] = useState(null);
    const [newImagePreviewUrl, setNewImagePreviewUrl] = useState('');

    useEffect(() => {
        if (productId) {
            dispatch(getProduct(productId));
        }
    }, [dispatch, productId]);

    useEffect(() => {
        if (productDetails) {
            setDescription(productDetails.description);
            setPrice(productDetails.price);
            setCategory(productDetails.category);
            setQuantity(productDetails.quantity);
            setTitle(productDetails.productName);
            setStars(productDetails.ratings);
            setBestSeller(productDetails.bestSeller);
            setImgUrl(productDetails.productImage);
        }
    }, [productDetails]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewImage(file);
            setNewImagePreviewUrl(URL.createObjectURL(file));
        } else {
            setNewImage(null);
            setNewImagePreviewUrl('');
        }
    };

    const handleSaveBtn = async () => {
        let imageUrl = imgUrl;

        if (newImage) {
            try {
                // Fetch the S3 URL to upload the new image
                const { url } = await fetch("/api/s3Url").then((res) => res.json());

                await fetch(url, {
                    method: "PUT",
                    headers: {
                        "Content-Type": newImage.type,
                    },
                    body: newImage,
                });

                imageUrl = url.split("?")[0];
            } catch (error) {
                console.error("Error uploading image: ", error);
            }
        }

        const change = {
            id: productId,
            productName: title,
            quantity: quantity,
            price: price,
            description: description,
            productImage: imageUrl,
        };

        dispatch(updateProduct(change));
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
                        <img src={newImagePreviewUrl || imgUrl} alt={title} />
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
                                readOnly
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
                        {isEditing && (
                            <div className="info-section saveBtn">
                                <label>Change Product Image:</label>
                                <input type="file" onChange={handleImageChange} />
                                <button className="save-button" onClick={handleSaveBtn}>Save</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
