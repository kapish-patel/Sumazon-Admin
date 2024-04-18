import '../common/common.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Products.css';
import Table from './table';

function Products() {
  return (
    <div className="main-content-container">
      <div className="product-container">
        <div className="product-header">
          <p>products</p>
          <button> <FontAwesomeIcon icon={faPlus} /> product</button>
        </div>
        <div className="product-body">
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Products;