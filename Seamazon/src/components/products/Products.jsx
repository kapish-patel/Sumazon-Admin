import '../common/common.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Products.css';
import Table from './table';

function handleAddProductclick(){
  console.log("this is add product button")
}

function Products() {
  return (
    <div className="main-content-container">
      <div className="product-container">
        <div className="product-header">
          <p>products</p>
          <button onClick={handleAddProductclick}> <FontAwesomeIcon icon={faPlus} /> product</button>
        </div>
        <div className="product-body">
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Products;