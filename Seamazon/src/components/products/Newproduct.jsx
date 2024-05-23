import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../Redux/slice/productsSlice'
import './Newproduct.css'

function Newproduct() {
    const dispatch = useDispatch()

    const user = useSelector((state) => state.user.userDetails);

    // state variables
    const [productName, setProductName] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const [productQuantity, setProductQuantity] = useState(0)
    const [productCategory, setProductCategory] = useState(1)
    const [productImage, setProductImage] = useState('')

    // handle save button click

    const handleSavebtnClick = () => {
        console.log('Product Name:', productName)
        console.log('Product Description:', productDescription)
        console.log('Product Price:', productPrice)
        console.log('Product Quantity:', productQuantity)
        console.log('Product Category:', productCategory)
        console.log('Product Image:', productImage)
        console.log('User:', user.user_id)
        dispatch(addProduct({
            name: productName,
            description: productDescription,
            price: productPrice,
            quantity: productQuantity,
            category: productCategory,
            image: productImage,
            userId: user.user_id
        }))

        // clear the form 
        handleResetbtnClick()
    }   

    const handleResetbtnClick = () => {
        setProductName('')
        setProductDescription('')
        setProductPrice(0)
        setProductQuantity(0)
        setProductCategory(1)
        setProductImage('')
    }


  return (
    <div className="main-content-container">
      <div className="product-container">
        <div className="product-header">
          <p>New Product</p>
        </div>
        <div className="product-body newproduct-body">
            <div className="info-section newproduct-info">
                <label> Product Name: </label>
                <input type="text"
                value={productName}
                onChange={(e) => {setProductName(e.target.value)}}/>
            </div>
            <div className="info-section newproduct-info">
                <label> Product Descrition: </label>
                <textarea type="text"
                value={productDescription}
                onChange={(e) => {setProductDescription(e.target.value)}}/>
            </div>
            <div className="info-section newproduct-info">
                <label> Product Price: </label>
                <input type="decimal"
                value={productPrice}
                onChange={(e) => {setProductPrice(e.target.value)}}
                />
            </div>
            <div className="info-section newproduct-info">
                <label> Product Quantity: </label>
                <input type="number"
                value={productQuantity}
                onChange={(e) => {setProductQuantity(e.target.value)}}
                />
            </div>
            <div className="info-section newproduct-info">
                <label> Product category:</label>
                <select
                value={productCategory}
                onChange={(e) => {setProductCategory(e.target.value)}}
                >
                    <option value="Male Clothing & Accessories">Male Clothing & Accessories</option>
                    <option value="Female Clothing & Accessories">Female Clothing & Accessories</option>
                    <option value="Kids & Toys">Kids & Toys</option>
                    <option value="Electronics & Technology">Electronics & Technology</option>
                    <option value="Home & Lifestyle">Home & Lifestyle</option>
                    <option value="Pets & Animals">Pets & Animals</option>
                    <option value="Health & Wellness">Health & Wellness</option>
                    <option value="DIY & Industrial">DIY & Industrial</option>
                    <option value="Automotive & Vehicle">Automotive & Vehicle</option>
                </select>
            </div>
            <div className="info-section newproduct-info">
                <label> Product Image:</label>
                <input type="file"
                value={productImage}
                onChange={(e) => {setProductImage(e.target.value)}}
                />
            </div>
            <div className="info-section newproduct-info">
                <button onClick={handleSavebtnClick}>Save</button>
                <button onClick={handleResetbtnClick}>reset</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Newproduct
