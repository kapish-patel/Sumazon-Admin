import { DataGrid } from "@mui/x-data-grid";
import { Rating } from "@mui/material";
import { CheckCircleOutline} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { getProducts} from "../../Redux/slice/productsSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../Redux/slice/productsSlice";
import "./Products.css";


function Table() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userDetails);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    dispatch(getProducts(user.user_id));
  }, [dispatch, user.user_id, refresh]);

  async function handleDeleteClick(params) {
    dispatch(deleteProduct(params.row.id));
    setRefresh(prev => !prev);
  }
  
  function handleDetailsClick(params) {
    navigate(`/product/${params.row.id}`);
  }
  
  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "productName",
      headerName: "Product name",
      width: 100,
      sortable: false,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      autowidth: true,
    },
    { field: "price", headerName: "Price", type: "number", autowidth: true },
    {
      field: "description",
      headerName: "Description",
      width: 300,
      sortable: false,
    },
    { field: "category", headerName: "Category", autowidth: true },
    {
      field: "ratings",
      headerName: "Ratings",
      width: 150,
      renderCell: (params) => (
        <Rating
          name={`rating-${params.row.id}`}
          value={params.value}
          precision={0.1}
          readOnly
        />
      ),
    },
    {
      field: "bestSeller",
      headerName: "Best Seller",
      autowidth: true,
      renderCell: (params) =>
        params.value ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <CheckCircleOutline style={{ color: "green" }} />
          </div>
        ) : null,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 80,
      sortable: false,
      renderCell: (params) => (
        <div className="action-buttons">
          <div className="icon-container" onClick={() => {handleDeleteClick(params)}}>
            <FontAwesomeIcon icon={faTrashCan} className="delete-btn" />
          </div>
        </div>
      ),
    },
    {
      field: "details",
      headerName: "Details",
      autowidth: true,
      sortable: false,
      renderCell: (params) => (
        <div className="details-btn">
          <div className="icon-container" onClick={() => {handleDetailsClick(params)}}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
        </div>
      ),
    },
  ];

  const rows = useSelector((state) => state.products.productDetails);

  return (
    <div className="product-table">
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{
          borderRadius: 4,
          border: 1,
          boxShadow: 30,
          scrollBehavior: "smooth",
          fontFamily: "Futura",
          fontSize: 14,
          fontWeight: 500,

          "&.MuiDataGrid-root": {
            overflow: "scroll",
          },
        }}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 15, 20, 50, 100]}
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default Table;
