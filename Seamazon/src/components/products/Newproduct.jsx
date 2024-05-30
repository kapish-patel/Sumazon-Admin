import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Redux/slice/productsSlice";
import "./Newproduct.css";

function Newproduct() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.userDetails);

    // state variables
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productQuantity, setProductQuantity] = useState(0);
    const [productCategory, setProductCategory] = useState(1);
    const [productImage, setProductImage] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState("");

    // handle save button click
    const handleSavebtnClick = async () => {
        // fetch the S3 URL to upload the image
        const { url } = await fetch("/api/s3Url").then((res) => res.json());

        await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": productImage.type,
            },
            body: productImage,
        });

        const imageUrl = url.split("?")[0];
        console.log(imageUrl);

        console.log(
            productName,
            productDescription,
            productPrice,
            productQuantity,
            productCategory,
            imageUrl,
            user.user_id
        );

        dispatch(
            addProduct({
                name: productName,
                description: productDescription,
                price: productPrice,
                quantity: productQuantity,
                category: productCategory,
                image: imageUrl,
                userId: user.user_id,
            })
        );
        // clear the form
        handleResetbtnClick();
    };

    const handleResetbtnClick = () => {
        setProductName("");
        setProductDescription("");
        setProductPrice(0);
        setProductQuantity(0);
        setProductCategory(1);
        setProductImage(null);
        setImagePreviewUrl("");
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProductImage(file);
            setImagePreviewUrl(URL.createObjectURL(file));
        } else {
            setProductImage(null);
            setImagePreviewUrl("");
        }
    };

    return (
        <div className="main-content-container">
            <div className="product-container">
                <div className="product-header">
                    <p>New Product</p>
                </div>
                <div className="product-body newproduct-body">
                    <div className="info-section newproduct-info">
                        <label>Product Name:</label>
                        <input
                            type="text"
                            value={productName}
                            onChange={(e) => {
                                setProductName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="info-section newproduct-info">
                        <label>Product Description:</label>
                        <textarea
                            type="text"
                            value={productDescription}
                            onChange={(e) => {
                                setProductDescription(e.target.value);
                            }}
                        />
                    </div>
                    <div className="info-section newproduct-info">
                        <label>Product Price:</label>
                        <input
                            type="number"
                            value={productPrice}
                            onChange={(e) => {
                                setProductPrice(Number(e.target.value));
                            }}
                        />
                    </div>
                    <div className="info-section newproduct-info">
                        <label>Product Quantity:</label>
                        <input
                            type="number"
                            value={productQuantity}
                            onChange={(e) => {
                                setProductQuantity(Number(e.target.value));
                            }}
                        />
                    </div>
                    <div className="info-section newproduct-info">
                        <label>Product Category:</label>
                        <select
                            value={productCategory}
                            onChange={(e) => {
                                setProductCategory(Number(e.target.value));
                            }}
                        >
                            <option value="1">
                                Male Clothing & Accessories
                            </option>
                            <option value="2">
                                Female Clothing & Accessories
                            </option>
                            <option value="3">Kids & Toys</option>
                            <option value="5">Electronics & Technology</option>
                            <option value="6">Home & Lifestyle</option>
                            <option value="7">Pets & Animals</option>
                            <option value="8">Health & Wellness</option>
                            <option value="9">DIY & Industrial</option>
                            <option value="10">Automotive & Vehicle</option>
                        </select>
                    </div>
                    <div className="info-section newproduct-info">
                        <label>Product Image:</label>
                        <input type="file" onChange={handleImageChange} />
                        {imagePreviewUrl && (
                            <div className="image-preview">
                                <img
                                    src={imagePreviewUrl}
                                    alt="Product Preview"
                                />
                            </div>
                        )}
                    </div>
                    <div className="info-section newproduct-info">
                        <button onClick={handleSavebtnClick}>Save</button>
                        <button onClick={handleResetbtnClick}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newproduct;