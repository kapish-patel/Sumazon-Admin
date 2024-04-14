import '../common/common.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Products.css';


function Products() {
  return (
    <div className="main-content-container">
      <div className="product-container">
        <div className="product-header">
          <p>products</p>
          <button> <FontAwesomeIcon icon={faPlus} /> product</button>
        </div>
        <div className="product-table">
          <h1>table here</h1>
        </div>
      </div>
    </div>
  )
}

export default Products
