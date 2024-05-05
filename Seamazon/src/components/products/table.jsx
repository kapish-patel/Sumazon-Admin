import { DataGrid } from "@mui/x-data-grid";
import { Rating } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import "./Products.css";

function handleEditClick(params) {
    console.log("Edit button clicked");
    console.log(params.row);
}

function handleDeleteClick(params) {
    console.log("Delete button clicked");
    console.log(params.row);
}

function handleDetailsClick(params) {
    console.log("Details button clicked");
    console.log(params.row);
}

const columns = [
  { field: "id", headerName: "ID", autowidth: true},
  { field: "productName", headerName: "Product name", width: 200, sortable: false},
  { field: "quantity", headerName: "Quantity", type: "number", autowidth: true },
  { field: "price", headerName: "Price", type: "number", autowidth: true },
  { field: "description", headerName: "Description", width: 300, sortable: false},
  { field: "category", headerName: "Category", autowidth: true},
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
    autowidth: true,
    sortable: false,
    renderCell: (params) => (
      <div className="action-buttons">
        <div className="icon-container" onClick={handleEditClick(params)}>
          <FontAwesomeIcon icon={faPen} className="edit-btn"/>
        </div>
        <div className="icon-container" onClick={handleDeleteClick(params)}>
          <FontAwesomeIcon icon={faTrashCan} className="delete-btn"/>
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
        <div className="icon-container" onClick={handleDetailsClick(params)}>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
      </div>
    ),
  }
];

function Table() {
  const rows = useSelector((state) => state.products);
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

          '&.MuiDataGrid-root': {
            overflow: 'scroll',
          },
        }}
        initialState={{
          pagination: {
            paginationModel: {pageSize: 10},
          },
        }}
        pageSizeOptions={[10, 15, 20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default Table;
